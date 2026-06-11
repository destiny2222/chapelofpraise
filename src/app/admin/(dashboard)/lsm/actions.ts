'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '../../../../lib/supabase/server'

import { uploadToCloudinary } from '../../../../lib/cloudinary'

export async function addGraduation(formData: FormData) {
  const supabase = await createClient()

  const imageFile = formData.get('image') as File
  const imageUrl = await uploadToCloudinary(imageFile)
 

  const { error } = await supabase.from('lsm_graduations').insert({
    image: imageUrl,
  })

  if (error) return { error: error.message }
  revalidatePath('/admin/lsm')
  revalidatePath('/lsm')
  return { success: true }
}

export async function editGraduation(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id')

  const imageFile = formData.get('image') as File
  let imageUrl = undefined

  if (imageFile && imageFile.size > 0 && imageFile.name !== 'undefined') {
    imageUrl = await uploadToCloudinary(imageFile)
  }

  if (!imageUrl) {
    return { error: 'You must select a new image to edit it.' }
  }

  const { error } = await supabase.from('lsm_graduations').update({
    image: imageUrl
  }).eq('id', id)

  if (error) return { error: error.message }
  revalidatePath('/admin/lsm')
  revalidatePath('/lsm')
  return { success: true }
}

export async function deleteGraduation(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id')

  const { error } = await supabase.from('lsm_graduations').delete().eq('id', id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/lsm')
  revalidatePath('/lsm')
}
