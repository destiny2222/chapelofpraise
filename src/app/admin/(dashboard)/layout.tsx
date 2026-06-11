'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calendar, Video, Users, GraduationCap, LayoutDashboard, LogOut } from 'lucide-react'
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
    { name: 'Sermons', href: '/admin/sermons', icon: Video },
    { name: 'Ministries', href: '/admin/ministries', icon: Users },
    { name: 'LSM Graduations', href: '/admin/lsm', icon: GraduationCap },
  ]

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex">
      {/* Sidebar */}
      <div className="w-64 bg-brand-900 text-white flex flex-col fixed h-full">
        <div className="p-6">
          <h1 className="text-2xl font-serif font-bold text-accent-500">Admin Panel</h1>
          <p className="text-xs text-white/50 mt-1">Chapel of Praise</p>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-brand-800 text-accent-500 font-medium' 
                    : 'text-white/70 hover:bg-brand-800/50 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-brand-800">
          <button 
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-red-500/10 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
