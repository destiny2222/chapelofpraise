import Link from 'next/link';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export default function EventCard({ id, title, date, time, location, description }: EventCardProps) {
  return (
    <div className="flex flex-col bg-brand-50/50 rounded-2xl p-6 border border-brand-100 hover:bg-brand-50 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-brand-700 font-bold text-lg">{new Date(date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</span>
          <span className="text-3xl font-bold text-slate-900 leading-none">{new Date(date).getDate()}</span>
        </div>
        <div className="text-right text-sm text-slate-600">
          <p className="font-medium">{time}</p>
          <p>{location}</p>
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">{title}</h3>
      <p className="text-slate-600 text-sm mb-6 flex-grow">{description}</p>
      <Link
        href={`/events/${id}`}
        className="inline-flex justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
      >
        View Details
      </Link>
    </div>
  );
}
