import PageHeader from "../../components/PageHeader";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "../../components/ui/fade-in";

import { supabase } from "../../lib/supabase";


export const dynamic = 'force-dynamic';

export default async function Ministries() {
  const { data: ministriesData } = await supabase.from('ministries').select('*').order('id', { ascending: true });
  const ministries = ministriesData || [];

  
  return (
    <div className="bg-[#FAF9F6] selection:bg-[#C8102E] selection:text-white pb-32">
      <PageHeader 
        title="Our Ministries" 
        subtitle="At Chapel of Praise, we believe in growing together through fellowship, discipleship, and community. Find your place in one of our ministries."
        breadcrumbs={[{ label: "Ministries", href: "/ministries" }]}  
      />

      <section className="mt-40 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-sm font-bold tracking-widest text-accent-500 uppercase mb-3 block">
              Get Connected
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-900 mb-6">
              Find Your Place
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you’re looking for fellowship, growth, or a way to serve, there’s a ministry for you at Chapel of Praise.
            </p>
          </FadeIn>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {ministries.map((ministry, index) => (
            <FadeIn key={ministry.name} delay={index * 0.1}>
              <div className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] flex flex-col justify-between p-8 text-center cursor-pointer shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${ministry.image}')` }}
                ></div>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 group-hover:bg-black/70 transition-colors duration-500"></div>
                
                <div className="relative z-10 transform transition-transform duration-500 group-hover:translate-y-2">
                  <h3 className={`text-3xl font-bold font-serif ${ministry.name === 'Outreach & Missions' ? 'text-accent-500' : 'text-white'}`}>
                    {ministry.name}
                  </h3>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="opacity-100 h-auto md:opacity-0 md:h-0 overflow-hidden md:group-hover:h-auto md:group-hover:opacity-100 transition-all duration-500 mb-6 text-white/90 px-2">
                    <p className="mb-4 text-sm leading-relaxed">{ministry.description}</p>
                    {ministry.meeting_time && <p className="text-xs font-semibold tracking-wider text-accent-500">{ministry.meeting_time.toUpperCase()}</p>}
                  </div>
                   
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
