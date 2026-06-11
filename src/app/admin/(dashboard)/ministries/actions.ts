'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '../../../../lib/supabase/server'

import { uploadToCloudinary } from '../../../../lib/cloudinary'

export async function addMinistry(formData: FormData) {
  const supabase = await createClient()

  const imageFile = formData.get('image') as File
  const imageUrl = await uploadToCloudinary(imageFile)

  const { error } = await supabase.from('ministries').insert({
    name: formData.get('name'),
    meeting_time: formData.get('meeting_time'),
    image: imageUrl || 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80',
    description: formData.get('description'),
  })

  if (error) return { error: error.message }
  revalidatePath('/admin/ministries')
  revalidatePath('/ministries')
  return { success: true }
}

export async function deleteMinistry(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id')

  const { error } = await supabase.from('ministries').delete().eq('id', id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/ministries')
  revalidatePath('/ministries')
}
