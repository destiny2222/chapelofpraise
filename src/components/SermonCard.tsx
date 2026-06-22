import Link from 'next/link';

interface SermonCardProps {
  id: string;
  title: string;
  preacher: string;
  date: string;
  excerpt: string;
}

export default function SermonCard({ id, title, preacher, date, excerpt }: SermonCardProps) {
  return (
    <article className="flex flex-col items-start justify-between bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={date} className="text-slate-500">
          {new Date(`${date.split('T')[0]}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </time>
        <span className="relative z-10 rounded-full bg-brand-50 px-3 py-1.5 font-medium text-brand-700">
          Sermon
        </span>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-xl font-semibold leading-6 text-slate-900 group-hover:text-brand-700 font-serif">
          <Link href={`/sermons/${id}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">{excerpt}</p>
      </div>
      <div className="relative mt-6 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-slate-900">
            <span className="absolute inset-0" />
            {preacher}
          </p>
        </div>
      </div>
    </article>
  );
}
