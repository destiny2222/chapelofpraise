'use client'

import { useState, useEffect } from 'react'
import { createClient } from '../../../../lib/supabase/client'

export default function ProfilePage() {
  const [email, setEmail] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  const [emailStatus, setEmailStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const [passwordStatus, setPasswordStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  
  const supabase = createClient()

  useEffect(() => {
    async function loadUser() {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setEmail(user.email || '')
        setNewEmail(user.email || '')
      }
    }
    loadUser()
  }, [])

  const handleUpdateEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailStatus(null)
    
    try {
      const { error } = await supabase.auth.updateUser({ email: newEmail })
      if (error) throw error
      setEmailStatus({ type: 'success', message: 'Email update verification sent. Please check your old and new email addresses.' })
    } catch (error: any) {
      setEmailStatus({ type: 'error', message: error.message || 'Failed to update email' })
    }
  }

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setPasswordStatus(null)
    
    if (password !== confirmPassword) {
      setPasswordStatus({ type: 'error', message: 'Passwords do not match' })
      return
    }

    if (password.length < 6) {
      setPasswordStatus({ type: 'error', message: 'Password must be at least 6 characters' })
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({ password })
      if (error) throw error
      setPasswordStatus({ type: 'success', message: 'Password updated successfully' })
      setPassword('')
      setConfirmPassword('')
    } catch (error: any) {
      setPasswordStatus({ type: 'error', message: error.message || 'Failed to update password' })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-700">Admin Account</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-brand-900 sm:text-4xl">Profile Settings</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-xl font-bold text-brand-900">Update Email</h2>
          <form onSubmit={handleUpdateEmail} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Current Email</label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-slate-500 shadow-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">New Email</label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            
            {emailStatus && (
              <div className={`rounded-md p-3 text-sm ${emailStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {emailStatus.message}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full rounded-md bg-brand-900 px-4 py-2 font-medium text-white transition-colors hover:bg-brand-800"
            >
              Update Email
            </button>
          </form>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-xl font-bold text-brand-900">Change Password</h2>
          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
            
            {passwordStatus && (
              <div className={`rounded-md p-3 text-sm ${passwordStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {passwordStatus.message}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full rounded-md bg-brand-900 px-4 py-2 font-medium text-white transition-colors hover:bg-brand-800"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
