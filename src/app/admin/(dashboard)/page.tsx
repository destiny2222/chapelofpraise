export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-900 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-brand-900 mb-4">Welcome to the Admin Panel</h2>
          <p className="text-slate-600 leading-relaxed">
            Use the sidebar on the left to navigate between different sections of your website's data. 
            You can create, edit, and delete entries instantly.
          </p>
        </div>
        
        <div className="bg-brand-900 text-white p-8 rounded-2xl shadow-sm border border-brand-800">
          <h2 className="text-xl font-bold text-accent-500 mb-4">Quick Tips</h2>
          <ul className="space-y-2 text-white/80 list-disc pl-4 marker:text-accent-500">
            <li>For images, you can paste any valid URL (like a link from Unsplash, or `/lsm.jpg` for local files).</li>
            <li>Changes made here are instantly reflected on your live website.</li>
            <li>YouTube Videos only require the 11-character video ID (e.g. <code>M7FIvfx5J10</code>).</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
