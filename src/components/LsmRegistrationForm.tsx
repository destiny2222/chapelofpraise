'use client'

import { useState } from 'react';
import { submitLsmRegistration } from '../app/lsm/actions';
import SubmitButton from './SubmitButton';

export default function LsmRegistrationForm() {
  const [status, setStatus] = useState<{ error?: string; success?: boolean; warning?: string } | null>(null);

  async function action(formData: FormData) {
    setStatus(null);
    const result = await submitLsmRegistration(formData);
    setStatus(result);
  }

  if (status?.success) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-10 text-center shadow-sm">
        <h3 className="text-2xl font-serif font-bold mb-3">Registration Received!</h3>
        <p className="text-green-700">
          Thank you for registering for the Lighthouse School of Ministry. We will be in touch with you shortly regarding the next steps!
        </p>
        {status.warning && (
          <p className="text-xs text-slate-500 mt-4 opacity-50 font-mono">Debug: {status.warning}</p>
        )}
      </div>
    );
  }

  return (
    <form action={action} className="space-y-6">
      {status?.error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-100 mb-6">
          {status.error}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2 text-left">
          <label className="text-sm font-bold text-brand-900">First Name <span className="text-red-500">*</span></label>
          <input type="text" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all bg-white" />
        </div>
        <div className="space-y-2 text-left">
          <label className="text-sm font-bold text-brand-900">Last Name <span className="text-red-500">*</span></label>
          <input type="text" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all bg-white" />
        </div>
      </div>
      
      <div className="space-y-2 text-left">
        <label className="text-sm font-bold text-brand-900">Email <span className="text-red-500">*</span></label>
        <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all bg-white" />
      </div>
      
      <div className="space-y-2 text-left">
        <label className="text-sm font-bold text-brand-900">Phone Number <span className="text-red-500">*</span></label>
        <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all bg-white" />
      </div>

      <div className="space-y-2 text-left">
        <label className="text-sm font-bold text-brand-900">Prayer Request Title</label>
        <input type="text" name="requestTitle" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all bg-white" />
      </div>

      <div className="space-y-2 text-left">
        <label className="text-sm font-bold text-brand-900">Prayer Request</label>
        <textarea name="requestBody" rows={6} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all bg-white resize-none"></textarea>
      </div>

      <div className="pt-4 text-left">
        <SubmitButton 
            defaultText="Submit Registration" 
            loadingText="Submitting..." 
            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#B8962E] text-white font-bold tracking-wider px-8 py-3 rounded transition-colors mt-4"
        />
      </div>
    </form>
  );
}
