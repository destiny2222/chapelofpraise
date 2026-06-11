'use server'

import { createClient } from '../../../../lib/supabase/server'
import { revalidatePath } from 'next/cache'

async function uploadToCloudinary(file: File) {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'church_preset')

  const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    throw new Error('Failed to upload image to Cloudinary')
  }

  const data = await res.json()
  return data.secure_url
}

export async function addRendering(formData: FormData) {
  const supabase = await createClient()

  const imageFile = formData.get('image') as File
  if (!imageFile || imageFile.size === 0 || imageFile.name === 'undefined') {
    return { error: 'Please select an image.' }
  }

  let imageUrl;
  try {
    imageUrl = await uploadToCloudinary(imageFile)
  } catch (err: any) {
    return { error: err.message }
  }

  const { error } = await supabase.from('phase_renderings').insert({
    image: imageUrl
  })

  if (error) return { error: error.message }
  revalidatePath('/admin/phase')
  revalidatePath('/phase')
  return { success: true }
}

export async function editRendering(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id')

  const imageFile = formData.get('image') as File
  let imageUrl = undefined

  if (imageFile && imageFile.size > 0 && imageFile.name !== 'undefined') {
    try {
      imageUrl = await uploadToCloudinary(imageFile)
    } catch (err: any) {
      return { error: err.message }
    }
  }

  if (!imageUrl) {
    return { error: 'You must select a new image to edit it.' }
  }

  const { error } = await supabase.from('phase_renderings').update({
    image: imageUrl
  }).eq('id', id)

  if (error) return { error: error.message }
  revalidatePath('/admin/phase')
  revalidatePath('/phase')
  return { success: true }
}

export async function deleteRendering(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id')

  const { error } = await supabase.from('phase_renderings').delete().eq('id', id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/phase')
  revalidatePath('/phase')
}
