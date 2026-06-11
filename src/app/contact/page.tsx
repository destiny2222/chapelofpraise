import { FadeIn } from "../../components/ui/fade-in";
import PageHeader from "../../components/PageHeader";
import { MapPin, Headphones, Mail, Clock } from "lucide-react";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <div className="bg-[#FAF9F6] selection:bg-[#C8102E] selection:text-white pb-32">
      <PageHeader 
        title="Contact Us" 
        breadcrumbs={[{ label: "Contact Us", href: "/contact" }]} 
      />

      {/* Info Cards Section (Overlapping the header) */}
      <section className="relative mt-10 md:-mt-20 z-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          
          {/* Location Card */}
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-brand-900 rounded-[2rem] p-10 text-center text-white h-full shadow-2xl relative overflow-hidden group hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] border border-transparent hover:border-accent-500/50 transition-all duration-500 flex flex-col justify-center">
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-screen"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 group-hover:border-accent-500/50 transition-colors duration-500">
                  <MapPin className="w-8 h-8 text-accent-500 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4">Our Location</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed px-4 group-hover:text-white transition-colors duration-500">
                  15821 Greenwood Road,<br/>South Holland, IL 60473
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Phone Card */}
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-brand-900 rounded-[2rem] p-10 text-center text-white h-full shadow-2xl relative overflow-hidden group hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] border border-transparent hover:border-accent-500/50 transition-all duration-500 flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900 to-[#0A1220]"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519671482749-fd098e382307?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-screen"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 group-hover:border-accent-500/50 transition-colors duration-500">
                  <Headphones className="w-8 h-8 text-accent-500 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4">Phone Number</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                  708-201-1192<br/>
                  708-201-1193
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Email Card */}
          <FadeIn delay={0.3} className="h-full">
            <div className="bg-brand-900 rounded-[2rem] p-10 text-center text-white h-full shadow-2xl relative overflow-hidden group hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] border border-transparent hover:border-accent-500/50 transition-all duration-500 flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-bl from-brand-900 to-[#0A1220]"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-screen"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 group-hover:border-accent-500/50 transition-colors duration-500">
                  <Mail className="w-8 h-8 text-accent-500 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4">Email Address</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                  checchapelofpraise@gmail.com
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Service Times Card */}
          <FadeIn delay={0.4} className="h-full">
            <div className="bg-brand-900 rounded-[2rem] p-10 text-center text-white h-full shadow-2xl relative overflow-hidden group hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] border border-transparent hover:border-accent-500/50 transition-all duration-500 flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900 to-[#0A1220]"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-screen"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 group-hover:border-accent-500/50 transition-colors duration-500">
                  <Clock className="w-8 h-8 text-accent-500 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4">Service Times</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                  Bible Class: Sundays 10:00 AM<br/>
                  Worship: Sundays 11:00 AM
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form & Image Section */}
      <section className="mt-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* Form Side */}
          <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-900 mb-8">Send Us a Message</h2>
              <ContactForm />
            </FadeIn>
          </div>

          {/* Image Side */}
          <div className="flex-1 relative min-h-[400px] lg:block hidden lg:min-h-auto">
            <Image 
              src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80"
              alt="Person using phone at church"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
