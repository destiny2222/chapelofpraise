'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '../../../../lib/supabase/server'
import { uploadToCloudinary } from '../../../../lib/cloudinary'

export async function addEvent(formData: FormData) {
  const supabase = await createClient()

  const imageFile = formData.get('image') as File | null
  const imageUrl = await uploadToCloudinary(imageFile)

  const { error } = await supabase.from('events').insert({
    title: formData.get('title'),
    date: formData.get('date'),
    time: formData.get('time'),
    image: imageUrl || null,
    location: formData.get('location'),
    description: formData.get('description'),
  })

  if (error) return { error: error.message }
  revalidatePath('/admin/events')
  revalidatePath('/')
  return { success: true }
}

export async function editEvent(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id')

  const imageFile = formData.get('image') as File | null
  let imageUrl = undefined

  if (imageFile && imageFile.size > 0 && imageFile.name !== 'undefined') {
    imageUrl = await uploadToCloudinary(imageFile)
  }

  const updateData: any = {
    title: formData.get('title'),
    date: formData.get('date'),
    time: formData.get('time'),
    location: formData.get('location'),
    description: formData.get('description'),
  }

  if (imageUrl) {
    updateData.image = imageUrl
  }

  const { error } = await supabase.from('events').update(updateData).eq('id', id)

  if (error) return { error: error.message }
  revalidatePath('/admin/events')
  revalidatePath('/')
  return { success: true }
}

export async function deleteEvent(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id')

  const { error } = await supabase.from('events').delete().eq('id', id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/events')
  revalidatePath('/')
}
