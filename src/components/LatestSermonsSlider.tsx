"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FadeIn } from "./ui/fade-in";

interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  excerpt: string;
}

export default function LatestSermonsSlider({ sermons }: { sermons: Sermon[] }) {
  const images = [
    "https://images.unsplash.com/photo-1544427920-c49ccbc8e298?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1510175825319-a1d2f70b777a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1470229722913-7c090be5c5b4?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section className="bg-brand-50/50 py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <FadeIn>
              <h3 className="text-accent-500 font-bold tracking-widest uppercase text-sm mb-3">
                Watch & Listen
              </h3>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-900 mb-4">
                Latest Sermons
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Catch up on recent messages and be encouraged by God's Word.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.1} className="hidden md:block">
            <Link
              href="/sermons"
              className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-accent-400 transition-colors shadow-lg shadow-accent-500/30"
            >
              View All Sermons
            </Link>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative w-full max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-20 pt-4 px-4"
          >
            {sermons.map((sermon, index) => (
              <SwiperSlide key={sermon.id} className="h-auto">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 h-full flex flex-col group cursor-pointer">
                  {/* Image Header */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={images[index % images.length]}
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent opacity-90" />
                    
                    {/* Floating Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                        <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white ml-2"></div>
                      </div>
                    </div>
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-brand-900 tracking-[0.2em] uppercase shadow-lg">
                      Sermon
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-8 md:p-10 flex flex-col grow">
                    <p className="text-accent-500 font-bold text-xs tracking-widest uppercase mb-4">
                      {new Date(sermon.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-900 mb-4 line-clamp-2 group-hover:text-accent-600 transition-colors">
                      {sermon.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 line-clamp-3 grow">
                      {sermon.excerpt}
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center border border-brand-100">
                        <svg className="w-6 h-6 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium tracking-wide uppercase mb-0.5">Message by</p>
                        <p className="text-sm font-bold text-brand-900">{sermon.preacher}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
          </Swiper>
          
          {/* Mobile View All Button */}
          <div className="mt-8 flex justify-center md:hidden">
            <Link
              href="/sermons"
              className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-accent-400 transition-colors shadow-lg shadow-accent-500/30"
            >
              View All Sermons
            </Link>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .swiper-button-next, .swiper-button-prev {
              color: var(--color-brand-900) !important;
              background: white;
              width: 50px !important;
              height: 50px !important;
              border-radius: 50%;
              box-shadow: 0 10px 25px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
            }
            .swiper-button-next:hover, .swiper-button-prev:hover {
              transform: scale(1.1);
            }
            .swiper-button-next:after, .swiper-button-prev:after {
              font-size: 18px !important;
              font-weight: 900;
            }
            .swiper-pagination-bullet-active {
              background: var(--color-accent-500) !important;
            }
            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
            }
          `}} />
        </FadeIn>
      </div>
    </section>
  );
}
