import PageHeader from "../../components/PageHeader";

export const metadata = {
  title: "Live Stream | Chapel of Praise",
  description: "Watch our live services and events online.",
};

export default function LiveStreamPage() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Live Stream" 
        breadcrumbs={[{ label: "Live Stream", href: "/live" }]} 
      />
      
      <section className="py-24 px-6 lg:px-8 bg-[#FAF9F6]">
        <div className="mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden p-4 md:p-8">
            {/* Embedded Vimeo Live Stream */}
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} className="rounded-2xl overflow-hidden bg-slate-900">
              <iframe 
                src="https://vimeo.com/event/5141400/embed/interaction" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
            
            <div className="mt-10 text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-900 mb-4">
                Join Us Live
              </h2>
              <p className="text-slate-600 text-lg">
                Experience our worship services and special events in real-time, from wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
