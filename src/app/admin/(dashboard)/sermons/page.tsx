import { createClient } from '../../../../lib/supabase/server'
import { addSermon, deleteSermon } from './actions'
import SubmitButton from '../../../../components/SubmitButton'
import AdminForm from '../../../../components/AdminForm'

export const dynamic = 'force-dynamic'

export default async function SermonsAdmin() {
  const supabase = await createClient()
  const { data: sermons } = await supabase.from('sermons').select('*').order('date', { ascending: false })

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-900 mb-8">Manage Sermons & Messages</h1>

      {/* Add Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-12">
        <h2 className="text-xl font-bold text-brand-900 mb-4">Add New Sermon</h2>
        <AdminForm action={addSermon} className="grid grid-cols-1 md:grid-cols-2 gap-4" successMessage="Sermon successfully created!">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input required type="text" name="title" className="w-full px-3 py-2 border rounded-lg" placeholder="Walking in Faith" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Preacher</label>
            <input required type="text" name="preacher" className="w-full px-3 py-2 border rounded-lg" placeholder="Pastor Ade Talabi" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date (ISO Format)</label>
            <input required type="text" name="date" className="w-full px-3 py-2 border rounded-lg" placeholder="2026-06-07T10:00:00Z" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">YouTube Video ID (Optional)</label>
            <input type="text" name="video_id" className="w-full px-3 py-2 border rounded-lg" placeholder="M7FIvfx5J10" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Sermon Thumbnail Image (Optional)</label>
            <input type="file" accept="image/*" name="image" className="w-full px-3 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-900 hover:file:bg-brand-100" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Excerpt / Short Description</label>
            <textarea required name="excerpt" rows={2} className="w-full px-3 py-2 border rounded-lg" placeholder="A short description of the message..."></textarea>
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <SubmitButton defaultText="Add Sermon" loadingText="Saving Sermon..." />
            <span className="text-sm text-slate-500">Video messages automatically appear on the <b>/messages</b> page.</span>
          </div>
        </AdminForm>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 font-semibold text-slate-600">Sermon</th>
              <th className="p-4 font-semibold text-slate-600">Preacher</th>
              <th className="p-4 font-semibold text-slate-600">Video ID</th>
              <th className="p-4 font-semibold text-slate-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sermons?.map(sermon => (
              <tr key={sermon.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                <td className="p-4">
                  <div className="font-medium text-brand-900">{sermon.title}</div>
                  <div className="text-xs text-slate-400">{new Date(sermon.date).toLocaleDateString()}</div>
                </td>
                <td className="p-4 text-sm text-slate-600">{sermon.preacher}</td>
                <td className="p-4 text-sm text-slate-600">
                  {sermon.video_id ? (
                    <span className="px-2 py-1 bg-red-50 text-red-600 rounded-md font-mono text-xs border border-red-100">
                      {sermon.video_id}
                    </span>
                  ) : (
                    <span className="text-slate-400 italic">None</span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <form action={deleteSermon}>
                    <input type="hidden" name="id" value={sermon.id} />
                    <button type="submit" className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-1 bg-red-50 hover:bg-red-100 rounded-md transition-colors">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {(!sermons || sermons.length === 0) && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">No sermons found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
