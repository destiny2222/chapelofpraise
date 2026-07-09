import Link from "next/link";
import EventCard from "../components/EventCard";
import SermonCard from "../components/SermonCard";
import Hero from "../components/ui/animated-shader-hero";
import Image from "next/image";
import { Sparkles, Star, Cross, Heart, BookOpen, Church } from "lucide-react";
import { FadeIn } from "../components/ui/fade-in";
import { AnimatedText } from "../components/ui/animated-shiny-text";
import ShimmerText from "../components/ui/shimmer-text";
import { TextRevealByWord } from "../components/ui/text-reveal";
import UpcomingEventsSlider from "../components/UpcomingEventsSlider"; 
import ModernSermonsSlider from "../components/ModernSermonsSlider";
import { supabase } from "../lib/supabase";

export const dynamic = 'force-dynamic';

export default async function Home() {
  let upcomingEvents: any[] = [];
  let recentSermons: any[] = [];

  try {
    const [{ data: eventsData }, { data: sermonsData }] = await Promise.all([
      supabase.from('events').select('*').order('date', { ascending: true }).limit(6),
      supabase.from('sermons').select('*').order('date', { ascending: false }).limit(6)
    ]);
    
    upcomingEvents = eventsData || [];
    recentSermons = sermonsData || [];
  } catch (error) {
    // console.error("Failed to fetch data from Supabase:", error);
  }

  return (
    <>
      {/* Animated Hero Section */}
      <Hero
        // videoSrc="https://chapelofpraise.church/wp-content/uploads/2019/03/Background.mp4"
        trustBadge={{
          text: "Experience the presence of God.",
          // text: "CHRIST HEALING EVANGELICAL CHURCH",
          icons: [<Sparkles key="1" size={16} />, <Star key="2" size={16} />]
        }}
        headline={{
          line1: "Welcome Home",
          line2: "to Chapel of Praise"
        }}
        subtitle="A life-giving community where you can find a true connection to God and others that is refreshing, relational, and relevant to your everyday life."
        buttons={{
          primary: {
            text: "Plan a Visit",
            href: "/contact"
          },
          secondary: {
            text: "Watch Live",
            href: "/live"
          }
        }}
      />

      {/* who we are */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Column - Image */}
            <FadeIn direction="right" className="relative">
              {/* Decorative Dot Pattern */}
              <div className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 w-48 h-48 sm:w-64 sm:h-64 z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #cbd5e1 2px, transparent 0)', backgroundSize: '16px 16px' }}></div>

              <div className="relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl z-10">
                <img
                  src="/pastor.jpg"
                  alt="Church interior"
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeIn>

            {/* Right Column - Content */}
            <div className="flex flex-col gap-6">
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-2">
                  <AnimatedText
                    text="ABOUT US"
                    className="justify-start"
                    textClassName="font-bold tracking-widest uppercase text-sm"
                    gradientColors="linear-gradient(90deg, #AB8842, #EAC170, #AB8842)"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2>
                  <ShimmerText className="text-2xl md:text-3xl lg:text-3xl font-black text-brand-900 leading-[1.1] tracking-tight w-full block" duration={2.5} delay={1}>
                    A Community Chosen & Preserved by God
                  </ShimmerText>
                </h2>
              </FadeIn>

              {/* Red Dividers */}
              <FadeIn delay={0.3}>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-1 w-8 bg-accent-500 rounded-full"></div>
                  <div className="h-1 w-8 bg-accent-500 rounded-full"></div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <TextRevealByWord
                  text="We are a church: a community of people God has chosen and preserved for Himself, who love, follow, learn from, and worship God together. God sends us out to proclaim the gospel and embody Christ’s coming kingdom by the quality of our life together and our love for one another."
                  textClassName="text-lg leading-relaxed mt-2"
                />
              </FadeIn>

              <FadeIn delay={0.5}>
                <TextRevealByWord
                  text="The gospel, or the good news, is the message of the Bible that God is redeeming His fallen creation through the coming of His kingdom in the person and work of Jesus Christ."
                  textClassName="text-lg leading-relaxed mt-2"
                />
              </FadeIn>

              <FadeIn delay={0.6} className="mt-10">
                <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-bold tracking-wide hover:bg-accent-600 transition-colors rounded-sm shadow-xl shadow-accent-500/20">
                  Learn More
                </Link>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>


      {/* Our Services Section */}
      <section className="relative py-24 sm:py-32 z-20 overflow-hidden bg-[#FAF9F6]">
        {/* Background Image Parallax */}
        <div
          className="absolute inset-0 w-full h-full bg-[url('/nathan-mullet.jpg')] bg-cover bg-center bg-no-repeat bg-fixed opacity-[0.15] mix-blend-multiply pointer-events-none"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-20">
            <FadeIn>
              <div className="inline-flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-px bg-accent-500/50"></div>
                <h3 className="text-accent-500 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
                  Join Us This Sunday
                </h3>
                <div className="w-8 h-px bg-accent-500/50"></div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-900 mb-8">
                Our Services
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-900 hover:bg-brand-800 text-white rounded-full font-bold text-sm transition-colors shadow-lg shadow-brand-900/20"
              >
                See All Services
              </Link>
            </FadeIn>
          </div> 
        </div>
      </section>

      {/* Upcoming Events */} 
      <UpcomingEventsSlider events={upcomingEvents} />

      {/* Give Online Section */}
      <section className="relative py-32 sm:py-48 z-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=2000"
            alt="Giving background"
            className="w-full h-full object-cover  "
          />
          <div className="absolute inset-0 bg-[#16202A]/85"></div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            {/* Heart Icon */}
            <div className="w-20 h-20 rounded-full bg-accent-500 flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(197,165,90,0.3)]">
              <Heart className="w-8 h-8 text-white" strokeWidth={1.5} fill="transparent" />
            </div>

            {/* Big Quote */}
            <h2 className="font-sans text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight md:leading-tight mb-8">
              Support the ministry and help us make a difference in our community.
            </h2>

            {/* Subtext */}
            {/* <p className="font-serif italic text-xl md:text-3xl text-white/70 mb-14 font-light">
              Proverbs 3:9
            </p> */}

            {/* Donate Button */}
            <Link
              href="https://www.zeffy.com/en-US/donation-form/building-expansion-phase-iii"
              className="inline-block border-2 border-accent-500 bg-transparent text-white px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-accent-500 transition-all duration-300"
            >
              Donate Online
            </Link>
          </FadeIn>
        </div>
      </section>
      {/* Latest Sermons */}
      <ModernSermonsSlider sermons={recentSermons} />
    </>
  );
}
