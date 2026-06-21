'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calendar, Video, Users, GraduationCap, LayoutDashboard, LogOut, Images } from 'lucide-react'
import { createClient } from '../../../lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Events', href: '/admin/events', icon: Calendar },
    { name: 'Message', href: '/admin/sermons', icon: Video },
    { name: 'Ministries', href: '/admin/ministries', icon: Users },
    { name: 'LSM Graduations', href: '/admin/lsm', icon: GraduationCap },
    { name: 'Phase Renderings', href: '/admin/phase', icon: Images },
  ]

  return (
    <div className="min-h-screen bg-[#F7F5EF] lg:flex">
      <aside className="sticky top-0 z-40 bg-brand-900 text-white shadow-xl shadow-brand-950/10 lg:fixed lg:flex lg:h-screen lg:w-72 lg:flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6 lg:block lg:border-b-0 lg:p-6">
          <div>
            <h1 className="font-serif text-2xl font-bold text-accent-500">Admin Panel</h1>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">Chapel of Praise</p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-300 lg:hidden"
            aria-label="Sign out"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:mt-3 lg:flex-1 lg:flex-col lg:overflow-visible lg:px-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors lg:gap-3 lg:px-4 lg:py-3 ${
                  isActive 
                    ? 'bg-white/10 text-accent-500 font-semibold shadow-inner shadow-black/10' 
                    : 'text-white/70 hover:bg-brand-800/50 hover:text-white'
                }`}
              >
                <item.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="whitespace-nowrap">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="hidden border-t border-white/10 p-4 lg:block">
          <button 
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-white/70 transition-colors hover:bg-red-500/10 hover:text-red-300"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:ml-72 lg:p-8">
        <div className="mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  )
}
