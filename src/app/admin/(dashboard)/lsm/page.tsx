import { createClient } from '../../../../lib/supabase/server'
import { addGraduation, editGraduation, deleteGraduation } from './actions'
import SubmitButton from '../../../../components/SubmitButton'
import AdminForm from '../../../../components/AdminForm'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function LSMAdmin({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams
  const editId = resolvedSearchParams.edit as string | undefined
  const supabase = await createClient()
  const { data: graduations } = await supabase.from('lsm_graduations').select('*').order('created_at', { ascending: true })

  const editItem = editId ? graduations?.find(g => g.id.toString() === editId) : null;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-700">Admin Folder</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-brand-900 sm:text-4xl">Manage LSM Graduations</h1>
      </div>

      {/* Add Form */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-xl font-bold text-brand-900 mb-4">{editItem ? 'Edit Graduation Image' : 'Add New Graduation Image'}</h2>
        <AdminForm key={editItem?.id || 'new'} action={editItem ? editGraduation : addGraduation} className="grid grid-cols-1 gap-4 max-w-xl" successMessage={editItem ? "Image successfully updated!" : "Image successfully uploaded!"}>
          {editItem && <input type="hidden" name="id" value={editItem.id} />}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Graduation Image</label>
            <input required={!editItem} type="file" accept="image/*" name="image" className="w-full px-3 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-900 hover:file:bg-brand-100" />
            {editItem && <p className="text-xs text-slate-500 mt-1">Select a new image to replace the current one.</p>}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <SubmitButton defaultText={editItem ? "Update Image" : "Add Image"} loadingText={editItem ? "Updating..." : "Uploading Image..."} />
            {editItem && (
              <Link href="/admin/lsm" className="rounded-lg border border-slate-200 px-6 py-2 text-center font-medium text-slate-600 transition-colors hover:bg-slate-50">
                Cancel
              </Link>
            )}
          </div>
        </AdminForm>
      </div>

      {/* List */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 font-semibold text-slate-600">Image</th> 
              <th className="p-4 font-semibold text-slate-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {graduations?.map(grad => (
              <tr key={grad.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                <td className="p-4">
                  <div className="w-32 h-20 rounded-lg bg-slate-100 overflow-hidden relative">
                    <img src={grad.image} alt="Graduation" className="object-cover w-full h-full" />
                  </div>
                </td>
                <td className="p-4 text-right flex justify-end items-center gap-2">
                  <Link href={`/admin/lsm?edit=${grad.id}`} className="text-blue-500 hover:text-blue-700 text-sm font-medium px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors">
                    Edit
                  </Link>
                  <form action={deleteGraduation}>
                    <input type="hidden" name="id" value={grad.id} />
                    <button type="submit" className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-1 bg-red-50 hover:bg-red-100 rounded-md transition-colors">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {(!graduations || graduations.length === 0) && (
              <tr>
                <td colSpan={3} className="p-8 text-center text-slate-500">No images found.</td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
