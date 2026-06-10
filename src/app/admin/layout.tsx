import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden text-slate-900">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-4 bg-brand-900 text-lg font-bold font-serif border-b border-brand-800">
          Chapel Admin
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="block px-4 py-2 rounded bg-slate-800 text-brand-400 hover:bg-slate-700 hover:text-brand-300">
            Dashboard
          </Link>
          <Link href="/admin/sermons" className="block px-4 py-2 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
            Sermons
          </Link>
          <Link href="/admin/events" className="block px-4 py-2 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
            Events
          </Link>
          <Link href="/admin/ministries" className="block px-4 py-2 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
            Ministries
          </Link>
          <Link href="/admin/prayer" className="block px-4 py-2 rounded text-slate-300 hover:bg-slate-800 hover:text-white">
            Prayer Requests
          </Link>
          <Link href="/" className="block px-4 py-2 rounded text-slate-400 hover:bg-slate-800 hover:text-white mt-8 border-t border-slate-700 pt-4">
            ← Back to Website
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-white shadow-sm border-b border-slate-200">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-slate-800">Admin Area</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500">Logged in as Admin</span>
            </div>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
