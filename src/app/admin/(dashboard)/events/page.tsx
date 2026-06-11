import { createClient } from '../../../../lib/supabase/server'
import { addEvent, deleteEvent } from './actions'

export const dynamic = 'force-dynamic'

export default async function EventsAdmin() {
  const supabase = await createClient()
  const { data: events } = await supabase.from('events').select('*').order('date', { ascending: true })

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-900 mb-8">Manage Events</h1>

      {/* Add Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-12">
        <h2 className="text-xl font-bold text-brand-900 mb-4">Add New Event</h2>
        <form action={addEvent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input required type="text" name="title" className="w-full px-3 py-2 border focus:ring-0 focus:border-accent-500 rounded-lg" placeholder="Sunday Worship Service" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date (ISO Format)</label>
            <input required type="text" name="date" className="w-full px-3 py-2 border rounded-lg" placeholder="2026-06-14T09:00:00Z" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Time (Display)</label>
            <input required type="text" name="time" className="w-full px-3 py-2 border rounded-lg" placeholder="9:00 AM - 11:30 AM" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
            <input required type="text" name="location" className="w-full px-3 py-2 border rounded-lg" placeholder="Main Auditorium" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea required name="description" rows={3} className="w-full px-3 py-2 border rounded-lg" placeholder="Event description..."></textarea>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-brand-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-800 transition-colors">
              Add Event
            </button>
          </div>
        </form>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
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
                  <div>{new Date(event.date).toLocaleDateString()}</div>
                  <div className="text-xs text-slate-400">{event.time}</div>
                </td>
                <td className="p-4 text-sm text-slate-600">{event.location}</td>
                <td className="p-4 text-right">
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
  )
}
