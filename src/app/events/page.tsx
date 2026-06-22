import EventCard from "../../components/EventCard";
import { supabase } from "../../lib/supabase";

export const dynamic = 'force-dynamic';

export default async function Events() {
  let allEvents: any[] = [];
  try {
    const { data: eventsData } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });
    
    allEvents = eventsData || [];
  } catch (error) {
    console.error("Failed to fetch events from Supabase:", error);
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Premium Hero Banner */}
      <div className="relative w-full pt-32 pb-40 md:pt-40 md:pb-48 bg-brand-900 overflow-hidden">
        {/* Background Image Parallax */}
        <div
          className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-multiply pointer-events-none"
        />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center space-x-2 mb-6 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <div className="w-8 h-px bg-accent-500/50"></div>
            <h3 className="text-accent-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
              Join Our Community
            </h3>
            <div className="w-8 h-px bg-accent-500/50"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F1EFE7] font-serif mb-6 drop-shadow-lg">
            Upcoming Events
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#F1EFE7]/90 font-light">
            There's always something happening at Chapel of Praise. Find out what's coming up and how you can get involved.
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32 -mt-24 relative z-20">
        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {allEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
          {allEvents.length === 0 && (
            <div className="col-span-1 md:col-span-2 text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-brand-900/5">
              <p className="text-slate-500 text-lg italic font-medium">No upcoming events scheduled at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
