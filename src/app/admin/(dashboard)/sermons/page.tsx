import { createClient } from '../../../../lib/supabase/server'
import { addSermon, editSermon, deleteSermon } from './actions'
import SubmitButton from '../../../../components/SubmitButton'
import AdminForm from '../../../../components/AdminForm'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function SermonsAdmin({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams
  const editId = resolvedSearchParams.edit as string | undefined
  const supabase = await createClient()
  const { data: sermons } = await supabase.from('sermons').select('*').order('date', { ascending: false })

  const editItem = editId ? sermons?.find(s => s.id.toString() === editId) : null;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-700">Admin Folder</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-brand-900 sm:text-4xl">Manage Sermons & Messages</h1>
      </div>

      {/* Add Form */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-xl font-bold text-brand-900 mb-4">{editItem ? 'Edit Sermon' : 'Add New Sermon'}</h2>
        <AdminForm key={editItem?.id || 'new'} action={editItem ? editSermon : addSermon} className="grid grid-cols-1 md:grid-cols-2 gap-4" successMessage={editItem ? "Sermon successfully updated!" : "Sermon successfully created!"}>
          {editItem && <input type="hidden" name="id" value={editItem.id} />}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input required type="text" name="title" defaultValue={editItem?.title} className="w-full px-3 py-2 border rounded-lg" placeholder="Walking in Faith" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Preacher</label>
            <input required type="text" name="preacher" defaultValue={editItem?.preacher} className="w-full px-3 py-2 border rounded-lg" placeholder="Pastor Ade Talabi" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date (ISO Format)</label>
            <input required type="text" name="date" defaultValue={editItem?.date} className="w-full px-3 py-2 border rounded-lg" placeholder="2026-06-07T10:00:00Z" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">YouTube Video ID (Optional)</label>
            <input type="text" name="video_id" defaultValue={editItem?.video_id} className="w-full px-3 py-2 border rounded-lg" placeholder="M7FIvfx5J10" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Sermon Thumbnail Image (Optional)</label>
            <input type="file" accept="image/*" name="image" className="w-full px-3 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-900 hover:file:bg-brand-100" />
            {editItem && <p className="text-xs text-slate-500 mt-1">Leave blank to keep the current image.</p>}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Excerpt / Short Description</label>
            <textarea required name="excerpt" defaultValue={editItem?.excerpt} rows={2} className="w-full px-3 py-2 border rounded-lg" placeholder="A short description of the message..."></textarea>
          </div>
          <div className="md:col-span-2 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <SubmitButton defaultText={editItem ? "Update Sermon" : "Add Sermon"} loadingText="Saving Sermon..." />
              {editItem && (
                <Link href="/admin/sermons" className="rounded-lg border border-slate-200 px-6 py-2 text-center font-medium text-slate-600 transition-colors hover:bg-slate-50">
                  Cancel
                </Link>
              )}
            </div>
            <span className="text-sm text-slate-500">Video messages automatically appear on the <b>/messages</b> page.</span>
          </div>
        </AdminForm>
      </div>

      {/* List */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left border-collapse">
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
                <td className="p-4 text-right flex justify-end gap-2">
                  <Link href={`/admin/sermons?edit=${sermon.id}`} className="text-blue-500 hover:text-blue-700 text-sm font-medium px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors">
                    Edit
                  </Link>
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
    </div>
  )
}
