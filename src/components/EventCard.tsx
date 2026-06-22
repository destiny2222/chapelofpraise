import Link from 'next/link';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  link?: string;
}

export default function EventCard({ id, title, date, time, location, description, image, link }: EventCardProps) {
  const defaultImage = "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800";
  
  // Fix timezone issue by aggressively extracting the YYYY-MM-DD part and parsing at local noon
  const safeDateStr = date ? `${date.split('T')[0]}T12:00:00` : '';
  const eventDate = date ? new Date(safeDateStr) : null;
  
  return (
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-900/5 border border-slate-100 hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 group">
      {/* Image Section */}
      <Link href={`/events/${id}`} className="relative h-64 w-full overflow-hidden block">
        <img
          src={image || defaultImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </Link>
      
      {/* Content Section */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-100">
          <div className="flex flex-col">
            <span className="text-accent-600 font-bold text-sm tracking-widest uppercase">
              {eventDate ? eventDate.toLocaleDateString('en-US', { month: 'short' }) : 'TBA'}
            </span>
            <span className="text-4xl font-bold text-slate-900 leading-none">
              {eventDate ? eventDate.getDate() : '-'}
            </span>
          </div>
          <div className="text-right text-sm text-slate-500">
            <p className="font-semibold text-slate-700">{time}</p>
            <p>{location}</p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif line-clamp-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-8 flex-grow line-clamp-3 leading-relaxed">{description}</p>
        
        <div className="flex items-center gap-4 mt-auto">
          <Link
            href={`/events/${id}`}
            className="inline-flex justify-center rounded-xl bg-brand-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-800 transition-colors flex-grow text-center"
          >
            View Details
          </Link>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center rounded-xl bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors whitespace-nowrap"
            >
              Registration Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
