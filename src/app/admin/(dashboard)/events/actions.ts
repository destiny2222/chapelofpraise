'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '../../../../lib/supabase/server'

export async function addEvent(formData: FormData) {
  const supabase = await createClient()

  const { error } = await supabase.from('events').insert({
    title: formData.get('title'),
    date: formData.get('date'),
    time: formData.get('time'),
    image: formData.get('image'),
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

  const { error } = await supabase.from('events').update({
    title: formData.get('title'),
    date: formData.get('date'),
    time: formData.get('time'),
    image: formData.get('image'),
    location: formData.get('location'),
    description: formData.get('description'),
  }).eq('id', id)

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
