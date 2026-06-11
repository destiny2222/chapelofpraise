import { createClient } from '../../../../lib/supabase/server'
import { addGraduation, deleteGraduation } from './actions'
import SubmitButton from '../../../../components/SubmitButton'
import AdminForm from '../../../../components/AdminForm'

export const dynamic = 'force-dynamic'

export default async function LSMAdmin() {
  const supabase = await createClient()
  const { data: graduations } = await supabase.from('lsm_graduations').select('*').order('created_at', { ascending: true })

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-900 mb-8">Manage LSM Graduations</h1>

      {/* Add Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-12">
        <h2 className="text-xl font-bold text-brand-900 mb-4">Add New Graduation Image</h2>
        <AdminForm action={addGraduation} className="grid grid-cols-1 gap-4 max-w-xl" successMessage="Image successfully uploaded!">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Graduation Image</label>
            <input required type="file" accept="image/*" name="image" className="w-full px-3 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-900 hover:file:bg-brand-100" />
          </div>
          <div>
            <SubmitButton defaultText="Add Image" loadingText="Uploading Image..." />
          </div>
        </AdminForm>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
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
                <td className="p-4 text-right">
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
  )
}
