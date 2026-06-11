import Image from "next/image"; 
import { FadeIn } from "../../components/ui/fade-in";
import PageHeader from "../../components/PageHeader";
import { BookOpen, Building2, Flame, HandHeart, Moon, Music, Users, Baby, MapPin, Phone, Mail, ArrowRight, Video } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-white selection:bg-accent-500 selection:text-white pb-24">
      <PageHeader 
        title="Services" 
        breadcrumbs={[{ label: "Services", href: "/services" }]} 
      />

      {/* Weekly Schedule Section */}
      <section className="py-24 sm:py-32 bg-[#FAF9F6] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Weekly Schedule
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900">
                Our Services & Gatherings
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
            
            {/* Card 1 */}
            <FadeIn delay={0.1}>
               <div className="group bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 relative overflow-hidden h-full flex flex-col">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                 <div className="flex justify-between items-start mb-8">
                   <div className="w-16 h-16 bg-accent-500/10 rounded-2xl flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-500">
                     <BookOpen className="w-8 h-8" />
                   </div>
                   <span className="bg-brand-900 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                     In Person
                   </span>
                 </div>
                 <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-900 mb-2">Believer's Bible Class</h3>
                 <p className="text-accent-500 font-bold tracking-wide text-sm mb-6">Sundays • 10:00 AM</p>
                 <p className="text-slate-600 leading-relaxed font-light mt-auto">
                   Deep dive into God's word before the Sunday worship service. All are welcome to join us for study and discussion.
                 </p>
               </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
               <div className="group bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 relative overflow-hidden h-full flex flex-col">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                 <div className="flex justify-between items-start mb-8">
                   <div className="w-16 h-16 bg-accent-500/10 rounded-2xl flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-500">
                     <Building2 className="w-8 h-8" />
                   </div>
                   <span className="bg-brand-900 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                     In Person
                   </span>
                 </div>
                 <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-900 mb-2">Sunday Worship Service</h3>
                 <p className="text-accent-500 font-bold tracking-wide text-sm mb-6">Sundays • 11:00 AM</p>
                 <p className="text-slate-600 leading-relaxed font-light mt-auto">
                   Join us for a powerful time of worship, prayer, and the word of God. Our services are Spirit-led and designed to encourage and equip you.
                 </p>
               </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3}>
               <div className="group bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 relative overflow-hidden h-full flex flex-col">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-900/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                 <div className="flex justify-between items-start mb-8">
                   <div className="w-16 h-16 bg-brand-900/10 rounded-2xl flex items-center justify-center text-brand-900 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-500">
                     <Flame className="w-8 h-8" />
                   </div>
                   <span className="bg-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                     Virtual
                   </span>
                 </div>
                 <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-900 mb-2">Solution Night</h3>
                 <p className="text-accent-500 font-bold tracking-wide text-sm mb-6">Tuesdays • 12:00 AM</p>
                 <p className="text-slate-600 leading-relaxed font-light mt-auto">
                   A midnight hour of prayer and seeking God for breakthroughs and solutions. Join virtually from anywhere.
                 </p>
               </div>
            </FadeIn>

            {/* Card 4 */}
            <FadeIn delay={0.4}>
               <div className="group bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 relative overflow-hidden h-full flex flex-col">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-900/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                 <div className="flex justify-between items-start mb-8">
                   <div className="w-16 h-16 bg-brand-900/10 rounded-2xl flex items-center justify-center text-brand-900 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-500">
                     <HandHeart className="w-8 h-8" />
                   </div>
                   <span className="bg-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                     Virtual
                   </span>
                 </div>
                 <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-900 mb-2">Intercessory Prayer</h3>
                 <p className="text-accent-500 font-bold tracking-wide text-sm mb-6">Thursdays • 6:00 PM</p>
                 <p className="text-slate-600 leading-relaxed font-light mt-auto">
                   Standing in the gap through fervent prayer. Virtual unless otherwise noted.
                 </p>
               </div>
            </FadeIn>

          </div>

          {/* Virtual Meeting Details Banner */}
          <FadeIn delay={0.5}>
            <div className="bg-brand-900 rounded-3xl p-6 sm:p-12 text-center relative overflow-hidden shadow-2xl w-full">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <div className="relative z-10 flex flex-col items-center">
                <Video className="w-8 h-8 text-accent-500 mb-4" />
                <p className="text-accent-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  Virtual Meeting Details
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
                  Free Conference Call
                </h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:px-12 w-full sm:w-auto flex flex-col sm:flex-row items-center gap-5 sm:gap-12 border border-white/10 overflow-hidden">
                  <div className="text-center shrink-0">
                    <p className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider mb-1">Dial-In Number</p>
                    <p className="text-xl sm:text-3xl font-bold text-white whitespace-nowrap">205-825-9755</p>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-white/20 shrink-0"></div>
                  <div className="block sm:hidden w-12 h-px bg-white/20 shrink-0"></div>
                  <div className="text-center w-full sm:w-auto min-w-0">
                    <p className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider mb-1">Meeting ID / Pin</p>
                    <p className="text-base sm:text-xl font-bold text-white flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <span className="truncate max-w-full">ChecChapelofPraise</span> 
                      <span className="hidden sm:inline text-accent-500">•</span> 
                      <span>6803</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Monthly Gatherings */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Monthly Gatherings
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900">
                Special Monthly Services
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            
            {/* Monthly Card 1 */}
            <FadeIn delay={0.1}>
               <div className="group bg-[#FAF9F6] rounded-[2rem] p-8 sm:p-12 text-center hover:bg-brand-900 transition-colors duration-500 border border-slate-100 h-full flex flex-col items-center">
                 <span className="bg-accent-500 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-8">
                   Monthly
                 </span>
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-accent-500 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                   <Flame className="w-10 h-10" />
                 </div>
                 <h3 className="font-serif text-3xl font-bold text-brand-900 mb-2 group-hover:text-white transition-colors duration-500">NextGen Upper Room</h3>
                 <p className="text-accent-500 font-bold tracking-wide text-sm mb-6">First Thursday • 7:30 PM</p>
                 <p className="text-slate-500 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-500">
                   A powerful gathering for our next generation to encounter God's presence. Every first Thursday of the month.
                 </p>
               </div>
            </FadeIn>

            {/* Monthly Card 2 */}
            <FadeIn delay={0.2}>
               <div className="group bg-[#FAF9F6] rounded-[2rem] p-8 sm:p-12 text-center hover:bg-brand-900 transition-colors duration-500 border border-slate-100 h-full flex flex-col items-center">
                 <span className="bg-accent-500 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-8">
                   Monthly
                 </span>
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-accent-500 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                   <Moon className="w-10 h-10" />
                 </div>
                 <h3 className="font-serif text-3xl font-bold text-brand-900 mb-2 group-hover:text-white transition-colors duration-500">Night Vigil</h3>
                 <p className="text-accent-500 font-bold tracking-wide text-sm mb-6">Last Friday • 12:00 AM</p>
                 <p className="text-slate-500 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-500">
                   A night of deep prayer, worship, and seeking God's face together. Every last Friday of the month starting at midnight.
                 </p>
               </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* What To Expect */}
      <section className="py-24 sm:py-32 bg-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Your First Visit
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900">
                What to Expect
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="w-16 h-16 mx-auto bg-accent-500/10 rounded-full flex items-center justify-center text-accent-500 mb-6">
                  <Music className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-900 mb-2">Worship</h3>
                <p className="text-accent-500 text-xs font-bold uppercase tracking-widest mb-4">Spirit-Led Praise</p>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Experience heartfelt, Spirit-led praise and worship that draws you into God's presence.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="w-16 h-16 mx-auto bg-accent-500/10 rounded-full flex items-center justify-center text-accent-500 mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-900 mb-2">Teaching</h3>
                <p className="text-accent-500 text-xs font-bold uppercase tracking-widest mb-4">Bible-Based</p>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Practical, Bible-based teaching that equips you to live out your faith every day.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="w-16 h-16 mx-auto bg-accent-500/10 rounded-full flex items-center justify-center text-accent-500 mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-900 mb-2">Fellowship</h3>
                <p className="text-accent-500 text-xs font-bold uppercase tracking-widest mb-4">Warm Community</p>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Connect with a warm, welcoming community of believers who genuinely care about you.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="w-16 h-16 mx-auto bg-accent-500/10 rounded-full flex items-center justify-center text-accent-500 mb-6">
                  <Baby className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-900 mb-2">Children</h3>
                <p className="text-accent-500 text-xs font-bold uppercase tracking-widest mb-4">Kids Ministry</p>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Age-appropriate programs for kids to learn about God's love in a fun, safe environment.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Find Us / Location */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_8px_40px_rgb(0,0,0,0.06)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Info Side */}
              <div className="p-10 sm:p-16 flex flex-col justify-center">
                <FadeIn>
                  <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                    Find Us
                  </p>
                  <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900 mb-12">
                    Our Location
                  </h2>

                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0 text-brand-900">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-900 mb-1 text-lg">Address</h4>
                        <p className="text-slate-500 font-light leading-relaxed">
                          15821 Greenwood Road<br/>
                          South Holland, IL 60473
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0 text-brand-900">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-900 mb-1 text-lg">Phone</h4>
                        <p className="text-slate-500 font-light leading-relaxed">
                          708-201-1192 <span className="mx-2 text-slate-300">|</span> 708-201-1193
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0 text-brand-900">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-brand-900 mb-1 text-lg">Email</h4>
                        <a href="mailto:checchapelofpraise@gmail.com" className="text-accent-500 font-light hover:underline transition-all break-all sm:break-normal">
                          checchapelofpraise@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <Link href="https://maps.google.com/?q=15821+Greenwood+Road,+South+Holland,+IL+60473" target="_blank" className="inline-flex items-center gap-2 bg-brand-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20 group">
                      Get Directions
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </FadeIn>
              </div>

              {/* Map Side */}
              <div className="relative h-[400px] lg:h-full w-full bg-slate-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.824213799636!2d-87.5956044234551!3d41.60550477127493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811d8c117d23d85%3A0xc6c7d2c3e1e2d2!2s15821%20Greenwood%20Rd%2C%20South%20Holland%2C%20IL%2060473!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </section>

       

    </div>
  );
}
