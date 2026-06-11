import Image from "next/image";
import { FadeIn } from "../../components/ui/fade-in";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";
import PhaseCarousel from "../../components/PhaseCarousel";
import { createClient } from '../../lib/supabase/server';
import { Building2, BookOpen, Heart, Users, CheckCircle2, Clock, Sparkles, Play } from "lucide-react";

const phases = [
    {
        number: "01",
        title: "Foundation & Planning",
        description: "Architectural design, permits, site preparation, and securing the vision for our new sanctuary.",
        status: "completed" as const,
    },
    {
        number: "02",
        title: "Structure & Framework",
        description: "Construction of the main building shell, roofing, and primary structural systems.",
        status: "completed" as const,
    },
    {
        number: "03",
        title: "Interior & Community Spaces",
        description: "Expanded seating auditorium, children's classrooms, accessible spaces, and youth facilities — creating a home for every member.",
        status: "current" as const,
    },
];

const features = [
    { icon: Building2, title: "New Sanctuary", desc: "Expanded seating auditorium for our growing congregation" },
    { icon: BookOpen, title: "Children's Classrooms", desc: "Equipped learning spaces for children's ministry growth" },
    { icon: Heart, title: "Accessible Spaces", desc: "Dedicated areas for special needs members of our community" },
    { icon: Users, title: "Youth Facilities", desc: "Space for our NextGen community to grow and thrive" },
];

const stats = [
    { value: "30+", label: "Years of Ministry" },
    { value: "$6M", label: "Building Goal" },
    { value: "3", label: "Phases" },
    { value: "100s", label: "Lives Impacted" },
];

export default async function PhasePage() {
    const supabase = await createClient();
    const { data: renderings } = await supabase.from('phase_renderings').select('*').order('created_at', { ascending: true });

    const carouselImages = renderings?.map(r => ({
        src: r.image,
        alt: "Phase III Rendering"
    })) || [];

    return (
        <div className="bg-white selection:bg-accent-500 selection:text-white">
            <PageHeader
                title="The Phases of our New Sanctuary"
                subtitle="After 30 years of faithful ministry, we are expanding our sanctuary to serve our growing congregation and community."
                overline="$6,000,000 Goal"
                breadcrumbs={[{ label: "Phase", href: "/phase" }]}
            />

            {/* Stats Strip */}
            <section className="bg-brand-900 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div>
                                    <p className="text-4xl md:text-5xl font-serif font-bold text-accent-500">{stat.value}</p>
                                    <p className="text-sm text-white/60 uppercase tracking-wider mt-2 font-semibold">{stat.label}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Vision Section */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h3 className="text-accent-600 font-semibold tracking-wider uppercase text-sm mb-4">The Vision</h3>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-8 leading-tight">
                                A Home for Our Growing Family
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    At CHEC, Chapel of Praise, we have had great successes and blessings in the past 30 years of the existence of the church, and many lives have been touched through our community outreach as well as our mission to other nations proclaiming the gospel of Jesus.
                                </p>
                                <p>
                                    We believe in a positive and promising future for our NextGen community and children&apos;s ministry, which are growing in numbers. Due to our community outreach, our present facility is inadequate for our services and other community programs.
                                </p>
                                <p>
                                    This year, our need is to add additional seating, create space for special needs, children, and youth — and equip classrooms for children&apos;s learning.
                                </p>
                            </div>
                            <div className="mt-10 flex items-center gap-4">
                                <div className="h-px flex-1 bg-accent-200" />
                                <span className="text-accent-600 text-sm font-semibold uppercase tracking-widest">By His Grace</span>
                                <div className="h-px flex-1 bg-accent-200" />
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2} className="relative aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/phase.jpg"
                                alt="New church exterior rendering"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Phases Timeline */}
            {/* Phases Timeline */}
            <section className="py-24 lg:py-32 bg-slate-50/50 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn className="text-center mb-20">
                        <h3 className="text-accent-600 font-semibold tracking-wider uppercase text-sm mb-4">Our Journey</h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900">Building in Phases</h2>
                    </FadeIn>

                    <div className="relative">
                        {/* Glowing Vertical line */}
                        <div className="absolute left-7 lg:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-transparent via-accent-300 to-transparent -translate-x-1/2 hidden sm:block opacity-40 rounded-full" />

                        <div className="space-y-16 lg:space-y-24">
                            {phases.map((phase, idx) => (
                                <FadeIn key={idx} delay={idx * 0.15}>
                                    <div className={`relative flex gap-8 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''} group`}>
                                        
                                        {/* Timeline dot */}
                                        <div className={`hidden sm:flex absolute left-7 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full items-center justify-center z-10 shadow-2xl transition-transform duration-700 group-hover:scale-110
                                            ${phase.status === 'completed' 
                                                ? 'bg-accent-500 border-4 border-white' 
                                                : phase.status === 'current' 
                                                ? 'bg-brand-900 border-4 border-brand-800' 
                                                : 'bg-slate-200 border-4 border-white'}`}>
                                            
                                            {/* Pulse effect for current phase */}
                                            {phase.status === 'current' && (
                                                <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-accent-500" />
                                            )}
                                            
                                            {phase.status === 'completed'
                                                ? <CheckCircle2 className="w-7 h-7 text-white" />
                                                : phase.status === 'current'
                                                ? <Sparkles className="w-7 h-7 text-accent-400 animate-pulse" />
                                                : <Clock className="w-7 h-7 text-slate-400" />
                                            }
                                        </div>

                                        {/* Card */}
                                        <div className={`sm:w-[calc(50%-4rem)] ${idx % 2 === 0 ? 'sm:ml-auto lg:ml-0 lg:mr-auto' : 'sm:ml-auto'} w-full`}>
                                            <div className={`relative overflow-hidden rounded-[2.5rem] p-8 lg:p-12 transition-all duration-500 group-hover:-translate-y-2
                                                ${phase.status === 'current'
                                                    ? 'bg-brand-900 shadow-2xl shadow-brand-900/20 border border-brand-800'
                                                    : 'bg-white shadow-xl shadow-slate-200/40 border border-white group-hover:border-accent-200'
                                                }`}>
                                                
                                                {/* Massive Background Number */}
                                                <div className={`absolute -right-8 -bottom-10 text-[10rem] font-serif font-black leading-none opacity-[0.03] select-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-4
                                                    ${phase.status === 'current' ? 'text-white' : 'text-brand-900'}`}>
                                                    {phase.number}
                                                </div>

                                                <div className="relative z-10">
                                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                                        <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm
                                                            ${phase.status === 'completed'
                                                                ? 'bg-accent-50 text-accent-700 ring-1 ring-accent-200'
                                                                : phase.status === 'current'
                                                                ? 'bg-accent-500 text-brand-900 ring-1 ring-accent-400 shadow-accent-500/20'
                                                                : 'bg-slate-50 text-slate-500 ring-1 ring-slate-200'
                                                            }`}>
                                                            {phase.status === 'completed' ? 'Completed' : phase.status === 'current' ? 'Current Phase' : 'Coming Soon'}
                                                        </span>
                                                    </div>
                                                    
                                                    <h3 className={`text-2xl lg:text-3xl font-serif font-bold mb-4 
                                                        ${phase.status === 'current' ? 'text-white' : 'text-brand-900'}`}>
                                                        {phase.title}
                                                    </h3>
                                                    
                                                    <p className={`text-lg leading-relaxed
                                                        ${phase.status === 'current' ? 'text-white/80' : 'text-slate-600'}`}>
                                                        {phase.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Building Renderings Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn className="text-center max-w-3xl mx-auto mb-16">
                        <h3 className="text-accent-600 font-semibold tracking-wider uppercase text-sm mb-4">The New Sanctuary</h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">Building Renderings</h2>
                        <p className="text-xl text-slate-600">
                            A glimpse of what God is building through our congregation&apos;s faithfulness and generosity.
                        </p>
                    </FadeIn>

                    {carouselImages.length > 0 && (
                        <FadeIn delay={0.2}>
                            <PhaseCarousel images={carouselImages} />
                        </FadeIn>
                    )}
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn className="text-center mb-16">
                        <h3 className="text-accent-600 font-semibold tracking-wider uppercase text-sm mb-4">Phase 3 Includes</h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900">What We&apos;re Building</h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="bg-brand-900 p-8 rounded-[2rem] shadow-xl shadow-brand-900/5 border border-brand-800/50 hover:shadow-2xl hover:shadow-brand-900/20 hover:-translate-y-2 transition-all duration-500 group h-full relative overflow-hidden flex flex-col justify-between">
                                    {/* Decorative background blob */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-500/20 to-transparent rounded-bl-[100px] transition-transform duration-700 group-hover:scale-150" />
                                    
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-md group-hover:bg-accent-500 group-hover:border-accent-400 transition-all duration-500 group-hover:rotate-6">
                                            <feature.icon className="w-8 h-8 text-accent-400 group-hover:text-brand-900 transition-colors duration-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors duration-300">{feature.title}</h3>
                                        <p className="text-slate-400 leading-relaxed font-light">{feature.desc}</p>
                                    </div>
                                    
                                    {/* Subtle bottom line indicator */}
                                    <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-white/10 rounded-t-md overflow-hidden">
                                        <div className="h-full bg-accent-500 w-0 group-hover:w-full transition-all duration-700 ease-out" />
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Message from Pastor Section */}
            <section className="py-24 bg-brand-900 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <FadeIn>
                        <h3 className="text-accent-500 font-semibold tracking-wider uppercase text-sm mb-4">A Message From Pastor Talabi</h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Hear the Heart Behind Phase 3</h2>
                        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                            Video coming soon — Pastor Talabi will share his heart and vision for Phase 3 and what it means for the future of Chapel of Praise.
                        </p>
                        <Link href="/contact" className="inline-block bg-accent-500 text-brand-900 font-bold px-8 py-4 rounded-lg hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/20">
                            Contact Pastor Talabi
                        </Link>
                    </FadeIn>
                </div>
            </section>

            {/* How You Can Help Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn>
                        <h3 className="text-accent-600 font-semibold tracking-wider uppercase text-sm mb-4">How You Can Help</h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">Partner With Us</h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                            This vision requires the prayerful and financial support of our entire church family.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="rounded-2xl border-2 border-brand-900 bg-brand-900 p-10 text-left hover:bg-brand-800 transition-colors group">
                                <Building2 className="w-10 h-10 text-accent-500 mb-5" />
                                <h3 className="text-2xl font-serif font-bold text-white mb-3">Give Financially</h3>
                                <p className="text-white/60 mb-8 leading-relaxed">
                                    Every gift, large or small, brings us closer to the $6M goal and the completion of God&apos;s house.
                                </p>
                                <Link href="/give" className="inline-block bg-accent-500 text-brand-900 font-bold px-6 py-3 rounded-lg hover:bg-accent-400 transition-colors">
                                    Give to the Building Fund
                                </Link>
                            </div>
                            <div className="rounded-2xl border-2 border-slate-200 p-10 text-left hover:border-accent-300 hover:bg-accent-50 transition-colors">
                                <Heart className="w-10 h-10 text-accent-500 mb-5" />
                                <h3 className="text-2xl font-serif font-bold text-brand-900 mb-3">Pray With Us</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed">
                                    Stand with us in prayer as we trust God to provide for every need of this building project.
                                </p>
                                <Link href="/contact" className="inline-block bg-brand-900 text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-800 transition-colors">
                                    Connect With Us
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
