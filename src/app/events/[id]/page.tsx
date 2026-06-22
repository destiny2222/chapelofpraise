import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, MapPin, ChevronLeft } from "lucide-react";
import { supabase } from "../../../lib/supabase";

export const dynamic = 'force-dynamic';

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  let event: any = null;
  let error: any = null;

  try {
    const response = await supabase
      .from("events")
      .select("*")
      .eq("id", id)
      .single();
    event = response.data;
    error = response.error;
  } catch (err) {
    console.error("Failed to fetch event details from Supabase:", err);
    error = err;
  }

  if (error || !event) {
    notFound();
  }

  const defaultImage = "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=2000";

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Simple Header Section */}
      <div className="relative w-full h-[25vh] md:h-[30vh] bg-brand-900">
        {/* Back Button */}
        <div className="absolute top-32 left-4 md:left-8 z-10">
          <Link
            href="/events"
            className="inline-flex items-center text-[#F1EFE7] hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Events
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-brand-900/5 p-6 md:p-12 border border-slate-100">
          {/* Featured Image */}
          <div className="w-full mb-10 rounded-xl overflow-hidden relative">
            <img
              src={event.image || defaultImage}
              alt={event.title}
              className="w-full h-auto"
            />
          </div>

          <div className="mb-8">
            <span className="text-accent-600 font-bold tracking-widest uppercase text-sm">
              Event Details
            </span>
            <h1 className="mt-2 text-3xl md:text-5xl font-bold font-serif text-slate-900 leading-tight">
              {event.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Date</p>
                <p className="font-medium text-slate-900">
                  {event.date
                    ? new Date(`${event.date.split('T')[0]}T12:00:00`).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
                    : 'TBA'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Time</p>
                <p className="font-medium text-slate-900">{event.time || 'TBA'}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Location</p>
                <p className="font-medium text-slate-900">{event.location || 'TBA'}</p>
              </div>
            </div>
            
            {event.link && (
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 md:col-span-3">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Registration Link</p>
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent-600 hover:text-accent-700 underline break-all">
                    {event.link}
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">About This Event</h2>
            <div className="text-slate-600 whitespace-pre-wrap leading-relaxed">
              {event.description || 'No description available for this event.'}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 text-center">
             <Link
              href="/contact"
              className="inline-flex justify-center rounded-lg bg-brand-900 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-brand-800 transition-colors"
            >
              Contact Us for More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
