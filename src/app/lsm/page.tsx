import Image from "next/image"; 
import { FadeIn } from "../../components/ui/fade-in";
import PageHeader from "../../components/PageHeader";
import { Target, Eye, BookOpen, Handshake, GraduationCap, ShieldCheck, Calendar, Clock, Award, ChevronDown } from "lucide-react";
import GraduationCarousel from "../../components/GraduationCarousel";
import { supabase } from "../../lib/supabase";
import LsmRegistrationForm from "../../components/LsmRegistrationForm";

export const dynamic = 'force-dynamic';

export default async function LSM() {
  const { data } = await supabase.from('lsm_graduations').select('*').order('created_at', { ascending: true });
  
  const formattedData = data?.map(d => ({
    src: d.image || d.src || '/lsm.jpg',
    alt: d.alt || 'Graduation Image'
  }))

  const graduationImages = formattedData && formattedData.length > 0 ? formattedData : [
    { src: "/lsm.jpg", alt: "Graduation 1" },
    { src: "/hero-bg.jpg", alt: "Graduation 2" },
    { src: "/lsm.jpg", alt: "Graduation 3" },
    { src: "/hero-bg.jpg", alt: "Graduation 4" },
  ];

  return (
    <div className="bg-white selection:bg-accent-500 selection:text-white pb-24">
      <PageHeader 
        title="Lighthouse School of Ministry" 
        breadcrumbs={[{ label: "LSM", href: "/lsm" }]} 
      />

      {/* Image Block */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            
            {/* Image Side */}
            <FadeIn className="h-full">
              <div className="relative h-full min-h-[400px] w-full rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
                <Image 
                  src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800" 
                  alt="Lighthouse School of Ministry"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            {/* Text Side */}
            <FadeIn delay={0.2} className="flex flex-col justify-center py-6">
              <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                About LSM
              </p>
              <p className="font-serif text-3xl md:text-3xl lg:text-3xl font-bold text-brand-900 leading-[1.15] mb-8">
                Founded by
              </p>

              <div className="space-y-4 text-left pb-4">
                <p className="text-slate-600 text-sm sm:text-base font-light mb-0">
                  <strong className="text-brand-900 font-bold">Pastor A. A. Talabi, President</strong>    
                </p>
                <p className="text-slate-700 mx-1 sm:mx-2">MA Ministry, Moody Theological Seminary</p> 
                <p className="text-slate-600 text-sm sm:text-base font-light mb-0">
                  <strong className="text-brand-900 font-bold">Pastor Mabel Talabi, Vice President</strong> 
                </p>
                <p className="text-slate-700 mx-1 sm:mx-2">M Div Urban Ministry, Trinity Theological University.</p>
              </div>

              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-10">
                <p>
                  The Lighthouse School of Ministry was established by Pastor & Prophetess Talabi through the leading and direction of the Holy Spirit, to train and equip lay church members for effective service alongside the leader, pastor, and pastor's wife in the local church.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#FAF9F6] py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          
          {/* Mission Card */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row items-stretch">
              <div className="p-10 sm:p-16 lg:p-20 md:w-[55%] flex flex-col justify-center">
                <h3 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                  Our Mission
                </h3>
                <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-light">
                  To equip ordinary lay people for a life of fruitful ministry through instruction, hands-on training, and personal mentoring — so they are well prepared to fulfill their ministry in the local church and develop a burning desire for soul winning.
                </p>
              </div>
              <div className="relative md:w-[45%] min-h-[300px] md:min-h-full bg-slate-100">
                <Image 
                  src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800" 
                  alt="Mission in action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Vision Card */}
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row-reverse items-stretch">
              <div className="p-10 sm:p-16 lg:p-20 md:w-[55%] flex flex-col justify-center">
                <h3 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-light">
                  To create an environment for lay men and women in the local church to be trained and equipped for effective service in God's Kingdom.
                </p>
              </div>
              <div className="relative md:w-[45%] min-h-[300px] md:min-h-full bg-slate-100">
                <Image 
                  src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800" 
                  alt="Vision of the future"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Ministry Objectives Section */}
      <section className="bg-slate-50 py-24 px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-accent-600 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                What You'll Gain
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900">
                Ministry Objectives
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Objective 1 */}
            <FadeIn delay={0.1} className="h-full">
              <div className="group relative rounded-[2rem] p-8 h-full bg-brand-900 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-900/20 transition-all duration-500 hover:-translate-y-2 border border-brand-800 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-500/10 to-transparent rounded-bl-[100px] transition-transform duration-700 group-hover:scale-150" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm transition-all duration-500 group-hover:bg-accent-500 group-hover:border-accent-400 group-hover:-translate-y-1 shadow-lg">
                    <BookOpen className="w-7 h-7 text-accent-400 group-hover:text-brand-900 transition-colors duration-500" />
                  </div>
                  <h3 className="font-bold text-white text-xl mb-4 group-hover:text-accent-400 transition-colors duration-300">Biblical Literacy</h3>
                  <p className="text-slate-400 font-light leading-relaxed flex-grow">
                    Become biblically articulate and able to read, understand, and interpret biblical text correctly.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left" />
              </div>
            </FadeIn>

            {/* Objective 2 */}
            <FadeIn delay={0.2} className="h-full">
              <div className="group relative rounded-[2rem] p-8 h-full bg-brand-900 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-900/20 transition-all duration-500 hover:-translate-y-2 border border-brand-800 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-500/10 to-transparent rounded-bl-[100px] transition-transform duration-700 group-hover:scale-150" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm transition-all duration-500 group-hover:bg-accent-500 group-hover:border-accent-400 group-hover:-translate-y-1 shadow-lg">
                    <Handshake className="w-7 h-7 text-accent-400 group-hover:text-brand-900 transition-colors duration-500" />
                  </div>
                  <h3 className="font-bold text-white text-xl mb-4 group-hover:text-accent-400 transition-colors duration-300">Practical Ministry</h3>
                  <p className="text-slate-400 font-light leading-relaxed flex-grow">
                    Translate classroom lectures to practical, effective ministry in the local church.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left" />
              </div>
            </FadeIn>

            {/* Objective 3 */}
            <FadeIn delay={0.3} className="h-full">
              <div className="group relative rounded-[2rem] p-8 h-full bg-brand-900 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-900/20 transition-all duration-500 hover:-translate-y-2 border border-brand-800 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-500/10 to-transparent rounded-bl-[100px] transition-transform duration-700 group-hover:scale-150" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm transition-all duration-500 group-hover:bg-accent-500 group-hover:border-accent-400 group-hover:-translate-y-1 shadow-lg">
                    <GraduationCap className="w-7 h-7 text-accent-400 group-hover:text-brand-900 transition-colors duration-500" />
                  </div>
                  <h3 className="font-bold text-white text-xl mb-4 group-hover:text-accent-400 transition-colors duration-300">Doctrinal Knowledge</h3>
                  <p className="text-slate-400 font-light leading-relaxed flex-grow">
                    Understand Bible doctrines and their theological impact in a ministry context.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left" />
              </div>
            </FadeIn>

            {/* Objective 4 */}
            <FadeIn delay={0.4} className="h-full">
              <div className="group relative rounded-[2rem] p-8 h-full bg-brand-900 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-900/20 transition-all duration-500 hover:-translate-y-2 border border-brand-800 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-500/10 to-transparent rounded-bl-[100px] transition-transform duration-700 group-hover:scale-150" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm transition-all duration-500 group-hover:bg-accent-500 group-hover:border-accent-400 group-hover:-translate-y-1 shadow-lg">
                    <ShieldCheck className="w-7 h-7 text-accent-400 group-hover:text-brand-900 transition-colors duration-500" />
                  </div>
                  <h3 className="font-bold text-white text-xl mb-4 group-hover:text-accent-400 transition-colors duration-300">Servant Leadership</h3>
                  <p className="text-slate-400 font-light leading-relaxed flex-grow">
                    Develop appreciation for and support of the leadership in your local church.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left" />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Course Offerings Section */}
      <section className="bg-[#FAF9F6] py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Curriculum
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900 mb-6">
                Course Offerings
              </h2>
              <p className="text-slate-500 text-lg font-light">
                30 hours of academic study across three concentrations. Click each category to explore.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-4">
            <FadeIn delay={0.1}>
              <details className="group bg-white rounded-2xl border border-slate-100 shadow-sm open:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between p-6 sm:p-8 cursor-pointer list-none font-serif text-xl sm:text-2xl font-bold text-brand-900">
                  Biblical Courses
                  <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown className="w-5 h-5 text-accent-500" />
                  </span>
                </summary>
                <div className="px-6 sm:px-8 pb-8 text-slate-500 font-light leading-relaxed">
                  Deep dive into the Old and New Testaments, understanding biblical context, theology, and historical significance to build a strong scriptural foundation.
                </div>
              </details>
            </FadeIn>
            <FadeIn delay={0.2}>
              <details className="group bg-white rounded-2xl border border-slate-100 shadow-sm open:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between p-6 sm:p-8 cursor-pointer list-none font-serif text-xl sm:text-2xl font-bold text-brand-900">
                  Developing Leadership Skills
                  <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown className="w-5 h-5 text-accent-500" />
                  </span>
                </summary>
                <div className="px-6 sm:px-8 pb-8 text-slate-500 font-light leading-relaxed">
                  Learn the principles of servant leadership, organizational management within the church, and how to effectively lead and inspire teams.
                </div>
              </details>
            </FadeIn>
            <FadeIn delay={0.3}>
              <details className="group bg-white rounded-2xl border border-slate-100 shadow-sm open:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between p-6 sm:p-8 cursor-pointer list-none font-serif text-xl sm:text-2xl font-bold text-brand-900">
                  Developing Skills for Ministry
                  <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown className="w-5 h-5 text-accent-500" />
                  </span>
                </summary>
                <div className="px-6 sm:px-8 pb-8 text-slate-500 font-light leading-relaxed">
                  Practical training on sermon preparation, pastoral care, community outreach, and the day-to-day operations of effective church ministry.
                </div>
              </details>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="bg-slate-50/50 py-24 px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl relative">
          
          {/* Decorative background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-100/50 blur-[120px] rounded-full pointer-events-none -z-10" />

          <div className="text-center mb-16 relative z-10">
            <FadeIn>
              <p className="text-accent-600 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Program Details
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900">
                What You Need to Know
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Detail 1 */}
            <FadeIn delay={0.1} className="h-full">
              <div className="group relative bg-white rounded-[2.5rem] p-10 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-accent-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-accent-100/80 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -bottom-8 -right-4 text-[8rem] font-serif font-black text-slate-50 opacity-80 group-hover:text-accent-50 group-hover:-translate-x-4 transition-all duration-700 pointer-events-none">
                  01
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-900 mb-8 border border-brand-100 transition-all duration-500 group-hover:bg-brand-900 group-hover:text-accent-400 group-hover:rotate-6 group-hover:scale-110 shadow-sm">
                    <Calendar className="w-8 h-8 transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-900 mb-4 group-hover:text-accent-600 transition-colors duration-300">Schedule</h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Yearly program runs <strong className="font-bold text-brand-900">September through May</strong>. Graduation held annually in May.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Detail 2 */}
            <FadeIn delay={0.2} className="h-full">
              <div className="group relative bg-white rounded-[2.5rem] p-10 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-accent-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-accent-100/80 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -bottom-8 -right-4 text-[8rem] font-serif font-black text-slate-50 opacity-80 group-hover:text-accent-50 group-hover:-translate-x-4 transition-all duration-700 pointer-events-none">
                  02
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-900 mb-8 border border-brand-100 transition-all duration-500 group-hover:bg-brand-900 group-hover:text-accent-400 group-hover:rotate-6 group-hover:scale-110 shadow-sm">
                    <Clock className="w-8 h-8 transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-900 mb-4 group-hover:text-accent-600 transition-colors duration-300">Duration</h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    <strong className="font-bold text-brand-900">30 hours</strong> of academic study completed over <strong className="font-bold text-brand-900">2 calendar years</strong>.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Detail 3 */}
            <FadeIn delay={0.3} className="h-full">
              <div className="group relative bg-white rounded-[2.5rem] p-10 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-accent-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-accent-100/80 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -bottom-8 -right-4 text-[8rem] font-serif font-black text-slate-50 opacity-80 group-hover:text-accent-50 group-hover:-translate-x-4 transition-all duration-700 pointer-events-none">
                  03
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-900 mb-8 border border-brand-100 transition-all duration-500 group-hover:bg-brand-900 group-hover:text-accent-400 group-hover:rotate-6 group-hover:scale-110 shadow-sm">
                    <Award className="w-8 h-8 transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-900 mb-4 group-hover:text-accent-600 transition-colors duration-300">Degree</h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Upon successful completion, graduates receive an <strong className="font-bold text-brand-900">Associate Degree in Ministry</strong>.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Graduation Gallery */}
      <section className="bg-white pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Celebrating Our Graduates
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900 mb-6">
                Recent Graduation
              </h2>
              <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">
                Join the ranks of those who have completed the journey. Here are highlights from our most recent graduation ceremony.
              </p>
            </FadeIn>
          </div>

          <div className="px-4">
            <FadeIn delay={0.1}>
              <GraduationCarousel images={graduationImages} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Registration Fee */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-5xl bg-brand-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <div className="relative z-10">
              <p className="text-accent-500 text-[10px] sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 sm:mb-8">
                One Time Registration
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-1 sm:gap-2 mb-6 sm:mb-8">
                <span className="text-6xl sm:text-8xl font-serif font-bold text-white leading-none">$300</span>
                <span className="text-accent-500 font-bold tracking-wider mb-0 sm:mb-4 text-sm sm:text-base">per person</span>
              </div>
              <p className="text-slate-300 text-sm sm:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
                <strong className="text-white font-bold">Tuition is FREE.</strong> The $300 one-time registration fee covers lecture materials, graduation gowns and cap, school T-shirt, gifts, and support for mission.
                <br className="hidden sm:block" /><br className="hidden sm:block" />
                <span className="block mt-4 sm:mt-0 sm:inline">
                  <strong className="text-white font-bold">Scholarship by Sponsorship</strong> may be available — a basic essay is required to qualify.
                </span>
              </p>
              <div className="inline-block border border-accent-500/30 bg-accent-500/10 px-4 sm:px-8 py-2 sm:py-3 rounded-full">
                <p className="text-accent-500 font-bold text-[10px] sm:text-sm tracking-widest uppercase">
                  Registration Closes July 31, 2026
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Registration Form */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Register Now
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900 mb-6">
                Begin Your Ministry Journey
              </h2>
              <p className="text-slate-500 text-lg font-light">
                Fill out the form below to register for the Lighthouse School of Ministry. We'll be in touch shortly with next steps.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="bg-[#FAF9F6] rounded-[2rem] p-8 sm:p-12 border border-slate-100 shadow-sm">
              <p className="text-sm text-slate-500 mb-8 font-light">Fields marked with an <span className="text-red-500">*</span> are required</p>
              
              <LsmRegistrationForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Statement of Beliefs Section */}
      <section className="bg-white py-24 px-6 lg:px-8 border-t border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Our Foundation
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900 mb-6">
                Statement of Beliefs
              </h2>
              <p className="text-slate-700 text-lg max-w-2xl mx-auto">
                These core tenets form the theological foundation of everything we teach and practice at the Lighthouse School of Ministry.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { text: "The Bible is the inspired, infallible, and authoritative written Word of God.", ref: "2 Timothy 3:16" },
              { text: "There is one God, eternally existent in three persons: God the Father, God the Son, and God the Holy Spirit.", ref: "Deuteronomy 6:4; Matthew 28:19" },
              { text: "In the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death, in His bodily resurrection, in His ascension to the right hand of the Father, in His personal future return to this earth in power and glory.", ref: "John 3:16; Acts 1:9-11; Romans 1:3-6" },
              { text: "In the blessed hope — the rapture of the Church at Christ's coming.", ref: "Titus 2:13" },
              { text: "The only means of being cleansed from sin is through repentance and faith in the precious blood of Christ.", ref: "John 14:6" },
              { text: "In water baptism by immersion.", ref: "Matthew 28:19" },
              { text: "The redemptive work of Christ on the cross provides healing of the human body in answer to believing prayer.", ref: "1 Peter 2:24" },
              { text: "The baptism in the Holy Spirit is given to believers who ask for it.", ref: "Acts 2:4" },
              { text: "In the sanctifying power of the Holy Spirit by whose indwelling the Christian is enabled to live a holy life.", ref: "Galatians 5:16-25" },
              { text: "In the resurrection of both the saved and the lost, the one to everlasting life and the other to everlasting damnation.", ref: "Revelation 20:11-15" }
            ].map((belief, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="h-full">
                <div className="bg-[#FAF9F6] rounded-[1.5rem] p-8 sm:p-10 border border-slate-100 h-full flex items-start gap-5 hover:shadow-md transition-shadow duration-300">
                  <div className="bg-white p-3 rounded-2xl shadow-sm shrink-0 border border-slate-50">
                    <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-800 font-medium leading-relaxed mb-3">
                      {belief.text}
                    </p>
                    <p className="text-accent-500 text-xs font-bold tracking-widest uppercase">
                      {belief.ref}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}