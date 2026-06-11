import { createClient } from '../../../../lib/supabase/server'
import { addMinistry, deleteMinistry } from './actions'
import SubmitButton from '../../../../components/SubmitButton'
import AdminForm from '../../../../components/AdminForm'

export const dynamic = 'force-dynamic'

export default async function MinistriesAdmin() {
  const supabase = await createClient()
  const { data: ministries } = await supabase.from('ministries').select('*').order('created_at', { ascending: true })

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-900 mb-8">Manage Ministries</h1>

      {/* Add Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-12">
        <h2 className="text-xl font-bold text-brand-900 mb-4">Add New Ministry</h2>
        <AdminForm action={addMinistry} className="grid grid-cols-1 md:grid-cols-2 gap-4" successMessage="Ministry successfully created!">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Ministry Name</label>
            <input required type="text" name="name" className="w-full px-3 py-2 border rounded-lg" placeholder="Men of Honor" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Meeting Time / Target Group</label>
            <input required type="text" name="meeting_time" className="w-full px-3 py-2 border rounded-lg" placeholder="Open To All Men" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Ministry Image</label>
            <input required type="file" accept="image/*" name="image" className="w-full px-3 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-900 hover:file:bg-brand-100" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea required name="description" rows={3} className="w-full px-3 py-2 border rounded-lg" placeholder="A brotherhood of men committed to living with integrity..."></textarea>
          </div>
          <div className="md:col-span-2">
            <SubmitButton defaultText="Add Ministry" loadingText="Uploading Image & Saving..." />
          </div>
        </AdminForm>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 font-semibold text-slate-600">Image</th>
              <th className="p-4 font-semibold text-slate-600">Name</th>
              <th className="p-4 font-semibold text-slate-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ministries?.map(ministry => (
              <tr key={ministry.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                <td className="p-4">
                  <div className="w-16 h-16 rounded-lg bg-slate-100 overflow-hidden relative">
                    <img src={ministry.image} alt={ministry.name} className="object-cover w-full h-full" />
                  </div>
                </td>
                <td className="p-4">
                  <div className="font-medium text-brand-900">{ministry.name}</div>
                  <div className="text-xs text-slate-400">{ministry.meeting_time}</div>
                </td>
                <td className="p-4 text-right">
                  <form action={deleteMinistry}>
                    <input type="hidden" name="id" value={ministry.id} />
                    <button type="submit" className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-1 bg-red-50 hover:bg-red-100 rounded-md transition-colors">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {(!ministries || ministries.length === 0) && (
              <tr>
                <td colSpan={3} className="p-8 text-center text-slate-500">No ministries found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
