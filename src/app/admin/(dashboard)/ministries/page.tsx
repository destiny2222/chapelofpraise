import { createClient } from '../../../../lib/supabase/server'
import { addMinistry, editMinistry, deleteMinistry } from './actions'
import SubmitButton from '../../../../components/SubmitButton'
import AdminForm from '../../../../components/AdminForm'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function MinistriesAdmin({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams
  const editId = resolvedSearchParams.edit as string | undefined
  const supabase = await createClient()
  const { data: ministries } = await supabase.from('ministries').select('*').order('created_at', { ascending: true })

  const editItem = editId ? ministries?.find(m => m.id.toString() === editId) : null;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-700">Admin Folder</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-brand-900 sm:text-4xl">Manage Ministries</h1>
      </div>

      {/* Add Form */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-xl font-bold text-brand-900 mb-4">{editItem ? 'Edit Ministry' : 'Add New Ministry'}</h2>
        <AdminForm key={editItem?.id || 'new'} action={editItem ? editMinistry : addMinistry} className="grid grid-cols-1 md:grid-cols-2 gap-4" successMessage={editItem ? "Ministry successfully updated!" : "Ministry successfully created!"}>
          {editItem && <input type="hidden" name="id" value={editItem.id} />}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Ministry Name</label>
            <input required type="text" name="name" defaultValue={editItem?.name} className="w-full px-3 py-2 border rounded-lg" placeholder="Men of Honor" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Meeting Time / Target Group</label>
            <input required type="text" name="meeting_time" defaultValue={editItem?.meeting_time} className="w-full px-3 py-2 border rounded-lg" placeholder="Open To All Men" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Ministry Image</label>
            <input type="file" required={!editItem} accept="image/*" name="image" className="w-full px-3 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-900 hover:file:bg-brand-100" />
            {editItem && <p className="text-xs text-slate-500 mt-1">Leave blank to keep the current image.</p>}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea required name="description" defaultValue={editItem?.description} rows={3} className="w-full px-3 py-2 border rounded-lg" placeholder="A brotherhood of men committed to living with integrity..."></textarea>
          </div>
          <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <SubmitButton defaultText={editItem ? "Update Ministry" : "Add Ministry"} loadingText={editItem ? "Updating..." : "Uploading Image & Saving..."} />
            {editItem && (
              <Link href="/admin/ministries" className="rounded-lg border border-slate-200 px-6 py-2 text-center font-medium text-slate-600 transition-colors hover:bg-slate-50">
                Cancel
              </Link>
            )}
          </div>
        </AdminForm>
      </div>

      {/* List */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] text-left border-collapse">
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
                <td className="p-4 text-right flex justify-end gap-2">
                  <Link href={`/admin/ministries?edit=${ministry.id}`} className="text-blue-500 hover:text-blue-700 text-sm font-medium px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors">
                    Edit
                  </Link>
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
    </div>
  )
}
