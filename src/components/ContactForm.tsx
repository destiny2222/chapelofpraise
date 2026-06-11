'use client'

import { useState } from 'react';
import { submitContactForm } from '../app/contact/actions';
import SubmitButton from './SubmitButton';

export default function ContactForm() {
  const [status, setStatus] = useState<{ error?: string; success?: boolean; warning?: string } | null>(null);

  async function action(formData: FormData) {
    setStatus(null);
    const result = await submitContactForm(formData);
    setStatus(result);
  }

  if (status?.success) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center shadow-sm">
        <h3 className="text-2xl font-serif font-bold mb-3">Message Sent!</h3>
        <p className="text-green-700">
          Thank you for reaching out. We have received your message and will get back to you soon.
        </p>
        {status.warning && (
          <p className="text-xs text-slate-500 mt-4 opacity-50 font-mono">Debug: {status.warning}</p>
        )}
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {status?.error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-100">
          {status.error}
        </div>
      )}
      
      <div>
        <input 
          type="text" 
          name="name"
          placeholder="Name" 
          required 
          className="w-full rounded-md border border-slate-200 px-5 py-4 text-slate-900 placeholder:text-slate-400 transition-all bg-transparent outline-none shadow-sm focus:border-brand-900 focus:ring-1 focus:ring-brand-900"
        />
      </div>
      <div>
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          required 
          className="w-full rounded-md border border-slate-200 px-5 py-4 text-slate-900 placeholder:text-slate-400 transition-all bg-transparent outline-none shadow-sm focus:border-brand-900 focus:ring-1 focus:ring-brand-900"
        />
      </div>
      <div>
        <input 
          type="tel" 
          name="phone"
          placeholder="Phone (optional)" 
          className="w-full rounded-md border border-slate-200 px-5 py-4 text-slate-900 placeholder:text-slate-400 transition-all bg-transparent outline-none shadow-sm focus:border-brand-900 focus:ring-1 focus:ring-brand-900"
        />
      </div>
      <div>
        <textarea 
          name="message"
          placeholder="Your message" 
          rows={6} 
          required 
          className="w-full rounded-md border border-slate-200 px-5 py-4 text-slate-900 placeholder:text-slate-400 transition-all bg-transparent outline-none resize-none shadow-sm focus:border-brand-900 focus:ring-1 focus:ring-brand-900"
        />
      </div>
      <div className="pt-2">
        <SubmitButton 
          defaultText="Send Message" 
          loadingText="Sending..." 
        />
      </div>
    </form>
  );
}
