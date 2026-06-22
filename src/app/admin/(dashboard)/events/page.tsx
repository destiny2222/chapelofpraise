import { createClient } from '../../../../lib/supabase/server'
import { addEvent, editEvent, deleteEvent } from './actions'
import SubmitButton from '../../../../components/SubmitButton'
import AdminForm from '../../../../components/AdminForm'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function EventsAdmin({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams
  const editId = resolvedSearchParams.edit as string | undefined
  const supabase = await createClient()
  const { data: events } = await supabase.from('events').select('*').order('date', { ascending: true })
  
  const editItem = editId ? events?.find(e => e.id.toString() === editId) : null;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-700">Admin Folder</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-brand-900 sm:text-4xl">Manage Events</h1>
      </div>

      {/* Add Form */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-xl font-bold text-brand-900 mb-4">{editItem ? 'Edit Event' : 'Add New Event'}</h2>
        <AdminForm key={editItem?.id || 'new'} action={editItem ? editEvent : addEvent} className="grid grid-cols-1 md:grid-cols-2 gap-4" successMessage={editItem ? "Event successfully updated!" : "Event successfully created!"}>
          {editItem && <input type="hidden" name="id" value={editItem.id} />}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input required type="text" name="title" defaultValue={editItem?.title} className="w-full px-3 py-2 border focus:ring-0 focus:border-accent-500 rounded-lg" placeholder="Sunday Worship Service" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date (ISO Format)</label>
            <input required type="date" name="date" defaultValue={editItem?.date} className="w-full px-3 py-2 border rounded-lg" placeholder="2026-06-14T09:00:00Z" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Time (Display)</label>
            <input required type="text" name="time" defaultValue={editItem?.time} className="w-full px-3 py-2 border rounded-lg" placeholder="9:00 AM - 11:30 AM" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Image</label>
            <input type="file" accept="image/*" name="image" className="w-full px-3 py-2 border rounded-lg" />
          </div>  
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
            <input required type="text" name="location" defaultValue={editItem?.location} className="w-full px-3 py-2 border rounded-lg" placeholder="Main Auditorium" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Registration Link ( Optional )</label>
            <input type="text" name="link" defaultValue={editItem?.link} className="w-full px-3 py-2 border rounded-lg" placeholder="Registration link" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea required name="description" defaultValue={editItem?.description} rows={3} className="w-full px-3 py-2 border rounded-lg" placeholder="Event description..."></textarea>
          </div>
          <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <SubmitButton defaultText={editItem ? "Update Event" : "Add Event"} loadingText="Saving..." />
            {editItem && (
              <Link href="/admin/events" className="rounded-lg border border-slate-200 px-6 py-2 text-center font-medium text-slate-600 transition-colors hover:bg-slate-50">
                Cancel
              </Link>
            )}
          </div>
        </AdminForm>
      </div>

      {/* List */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 font-semibold text-slate-600">Event</th>
              <th className="p-4 font-semibold text-slate-600">Date/Time</th>
              <th className="p-4 font-semibold text-slate-600">Location</th>
              <th className="p-4 font-semibold text-slate-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events?.map(event => (
              <tr key={event.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                <td className="p-4">
                  <div className="font-medium text-brand-900">{event.title}</div>
                  <div className="text-sm text-slate-500 truncate max-w-xs">{event.description}</div>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  <div>{new Date(`${event.date.split('T')[0]}T12:00:00`).toLocaleDateString()}</div>
                  <div className="text-xs text-slate-400">{event.time}</div>
                </td>
                <td className="p-4 text-sm text-slate-600">{event.location}</td>
                <td className="p-4 text-right flex justify-end gap-2">
                  <Link href={`/admin/events?edit=${event.id}`} className="text-blue-500 hover:text-blue-700 text-sm font-medium px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors">
                    Edit
                  </Link>
                  <form action={deleteEvent}>
                    <input type="hidden" name="id" value={event.id} />
                    <button type="submit" className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-1 bg-red-50 hover:bg-red-100 rounded-md transition-colors">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {(!events || events.length === 0) && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">No events found.</td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
