"use client";

import { useRef } from "react";
import Link from "next/link";
import { FadeIn } from "./ui/fade-in";
import { Play, ArrowRight, Clock, User } from "lucide-react";

interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  excerpt: string;
  image?: string;
  tag?: string;
}

export default function ModernSermonsSlider({ sermons }: { sermons: Sermon[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const images = [
    "https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1519834785169-98be25ce8673?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-accent-500/50"></span>
                <h3 className="text-accent-600 font-bold tracking-[0.2em] uppercase text-xs">
                  Latest Messages
                </h3>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-900 mb-4">
                Catch Up On Recent Sermons
              </h2>
              <p className="text-slate-600 text-lg">
                Listen to our latest messages and find inspiration for your daily walk of faith.
              </p>
            </FadeIn>
          </div>
          
          {/* Navigation Arrows */}
          <FadeIn className="flex items-center gap-3 hidden md:flex">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_4px_12px_rgb(0,0,0,0.03)] flex items-center justify-center text-slate-500 hover:text-accent-600 hover:border-accent-200 hover:shadow-md transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_4px_12px_rgb(0,0,0,0.03)] flex items-center justify-center text-slate-500 hover:text-accent-600 hover:border-accent-200 hover:shadow-md transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </FadeIn>
        </div>

        {/* Slider Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sermons.map((sermon, index) => (
            <div key={sermon.id} className="w-[85vw] sm:w-[320px] md:w-[380px] snap-center sm:snap-start shrink-0">
              <FadeIn delay={index * 0.1} className="h-full">
                {/* Modern SaaS Card */}
                <div className="group h-full flex flex-col bg-white rounded-[1.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden cursor-pointer">
                  
                  {/* Image Container with Play overlay */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={sermon.image || images[index % images.length]} 
                      alt={sermon.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-brand-900/30 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-accent-600 shadow-xl scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <Play className="w-7 h-7 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Top Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-xs font-bold text-brand-900 uppercase tracking-widest rounded-full shadow-sm">
                        {sermon.tag || 'Sermon'}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4 uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-accent-500" />
                        <span className='text-[8px] lg:text-sm'>{new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-accent-500" />
                        <span className='text-[8px] lg:text-sm'>{sermon.preacher}</span>
                      </div>
                    </div>
                    
                    <h4 className="font-serif text-2xl font-bold text-brand-900 mb-3 group-hover:text-accent-600 transition-colors line-clamp-2">
                      {sermon.title}
                    </h4>
                    
                    <p className="text-slate-500 text-base leading-relaxed line-clamp-2 mb-8 flex-grow">
                      {sermon.excerpt}
                    </p>

                    <div className="flex items-center text-accent-600 font-bold text-sm tracking-wide uppercase mt-auto">
                      Listen Now
                      <div className="ml-3 w-8 h-8 rounded-full bg-accent-50 group-hover:bg-accent-500 flex items-center justify-center transition-colors duration-300">
                        <ArrowRight className="w-4 h-4 text-accent-600 group-hover:text-white transform group-hover:translate-x-0.5 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />
        </div>
        
        {/* Mobile View All */}
        <div className="mt-4 flex items-center justify-center md:hidden">
          <Link href="/sermons" className="inline-flex items-center justify-center border-2 border-accent-500 text-accent-600 px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-accent-500 hover:text-white transition-all duration-300">
            View All Sermons
          </Link>
        </div>

      </div>
    </section>
  );
}
