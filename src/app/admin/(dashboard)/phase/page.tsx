import { createClient } from '../../../../lib/supabase/server'
import { addRendering, editRendering, deleteRendering } from './actions'
import SubmitButton from '../../../../components/SubmitButton'
import AdminForm from '../../../../components/AdminForm'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function PhaseAdmin({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams
  const editId = resolvedSearchParams.edit as string | undefined
  const supabase = await createClient()
  const { data: renderings } = await supabase.from('phase_renderings').select('*').order('created_at', { ascending: true })

  const editItem = editId ? renderings?.find(r => r.id.toString() === editId) : null;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-700">Admin Folder</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-brand-900 sm:text-4xl">Manage Phase 3 Renderings</h1>
      </div>

      {/* Add Form */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-xl font-bold text-brand-900 mb-4">{editItem ? 'Edit Phase Rendering' : 'Add New Phase Rendering'}</h2>
        <AdminForm key={editItem?.id || 'new'} action={editItem ? editRendering : addRendering} className="grid grid-cols-1 gap-4 max-w-xl" successMessage={editItem ? "Rendering successfully updated!" : "Rendering successfully uploaded!"}>
          {editItem && <input type="hidden" name="id" value={editItem.id} />}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Rendering Image</label>
            <input required={!editItem} type="file" accept="image/*" name="image" className="w-full px-3 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-900 hover:file:bg-brand-100" />
            {editItem && <p className="text-xs text-slate-500 mt-1">Select a new image to replace the current one.</p>}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <SubmitButton defaultText={editItem ? "Update Image" : "Add Image"} loadingText={editItem ? "Updating..." : "Uploading Image..."} />
            {editItem && (
              <Link href="/admin/phase" className="rounded-lg border border-slate-200 px-6 py-2 text-center font-medium text-slate-600 transition-colors hover:bg-slate-50">
                Cancel
              </Link>
            )}
          </div>
        </AdminForm>
      </div>

      {/* List */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 font-semibold text-slate-600">Image Preview</th>
              <th className="p-4 font-semibold text-slate-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderings && renderings.length > 0 ? (
              renderings.map((r) => (
                <tr key={r.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <div className="h-28 w-40 overflow-hidden rounded-lg bg-slate-100 sm:h-32 sm:w-48">
                      <img src={r.image} alt="Rendering" className="object-cover w-full h-full" />
                    </div>
                  </td>
                  <td className="p-4 text-right flex flex-col sm:flex-row justify-end items-center gap-2">
                    <Link href={`/admin/phase?edit=${r.id}`} className="text-blue-500 hover:text-blue-700 text-sm font-medium px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors w-full sm:w-auto text-center">
                      Edit
                    </Link>
                    <form action={deleteRendering} className="w-full sm:w-auto">
                      <input type="hidden" name="id" value={r.id} />
                      <button type="submit" className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-1 bg-red-50 hover:bg-red-100 rounded-md transition-colors w-full sm:w-auto">
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="p-8 text-center text-slate-500">
                  No renderings found. Add one above!
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
