export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-700">Website Control Center</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-brand-900 sm:text-4xl">Dashboard Overview</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-xl font-bold text-brand-900">Welcome to the Admin Panel</h2>
          <p className="text-slate-600 leading-relaxed">
            Use the navigation to move between different sections of your website&apos;s data.
            You can create, edit, and delete entries instantly.
          </p>
        </div>
        
        <div className="rounded-lg border border-brand-800 bg-brand-900 p-6 text-white shadow-sm sm:p-8">
          <h2 className="mb-4 text-xl font-bold text-accent-500">Quick Tips</h2>
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
