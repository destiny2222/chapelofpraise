'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '../../../../lib/supabase/server'

import { uploadToCloudinary } from '../../../../lib/cloudinary'

export async function addSermon(formData: FormData) {
  const supabase = await createClient()

  const imageFile = formData.get('image') as File
  const imageUrl = await uploadToCloudinary(imageFile)

  const { error } = await supabase.from('sermons').insert({
    title: formData.get('title'),
    preacher: formData.get('preacher'),
    date: formData.get('date'),
    excerpt: formData.get('excerpt'),
    video_id: formData.get('video_id') || null,
    image: imageUrl || null,
    tag: formData.get('tag') || 'Sermon',
  })

  if (error) return { error: error.message }
  revalidatePath('/admin/sermons')
  revalidatePath('/messages')
  revalidatePath('/')
  return { success: true }
}

export async function deleteSermon(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id')

  const { error } = await supabase.from('sermons').delete().eq('id', id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/sermons')
  revalidatePath('/messages')
  revalidatePath('/')
}
