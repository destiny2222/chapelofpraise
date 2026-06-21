"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FadeIn } from "./ui/fade-in";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  image: string;
  location: string;
  description: string;
}

export default function UpcomingEventsSlider({ events }: { events: Event[] }) {
  const sliderRef = useRef<Slider>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobile = slidesToShow === 1;

  const scrollLeft = () => sliderRef.current?.slickPrev();
  const scrollRight = () => sliderRef.current?.slickNext();

  const settings = {
    dots: isMobile,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    touchMove: true,
  };

  const images = [
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section className="bg-brand-900 py-24 sm:py-32 relative z-20 overflow-hidden">
      <style>{`
        .events-slider .slick-dots { bottom: -36px; }
        .events-slider .slick-dots li button:before { font-size: 8px; color: rgba(241,239,231,0.3); opacity: 1; }
        .events-slider .slick-dots li.slick-active button:before { color: #d97706; opacity: 1; }
      `}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="flex flex-col items-start gap-4">
            <div className="bg-[#F1EFE7] text-brand-900 text-[10px] lg:text-sm font-black tracking-widest uppercase px-4 py-2">
              Featured Events
            </div>
            <h2 className="font-sans text-[28px] md:text-7xl font-black uppercase tracking-tighter text-[#F1EFE7]">
              Upcoming Events
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollLeft}
              className="w-14 h-14 rounded-full border border-[#F1EFE7]/20 flex items-center justify-center text-[#F1EFE7] hover:bg-[#F1EFE7] hover:text-brand-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-14 h-14 rounded-full border border-[#F1EFE7]/20 flex items-center justify-center text-[#F1EFE7] hover:bg-[#F1EFE7] hover:text-brand-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="events-slider mt-8 pb-12 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <Slider ref={sliderRef} {...settings}>
            {events.map((event, index) => (
              <div key={event.id} className="px-4 outline-none">
                <FadeIn delay={index * 0.1}>
                  <div className="group cursor-pointer flex flex-col gap-6">
                    {/* Image */}
                    <div className="w-full h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden relative border border-[#F1EFE7]/10">
                      <img
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-3">
                      <div className="text-[#F1EFE7]/80 text-xs font-bold tracking-widest uppercase">
                        {event.date
                          ? new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                          : 'DATE TBA'}
                      </div>
                      <h3 className="text-2xl font-bold text-[#F1EFE7] leading-tight group-hover:text-accent-400 transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-accent-500 font-bold text-xs border border-accent-500/30">
                          CP
                        </div>
                        <span className="text-[#F1EFE7]/70 text-sm font-medium">
                          chapelofpraise
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile View All */}
        <div className="mt-12 flex items-center justify-center gap-4 md:hidden">
          <Link href="/events" className="bg-[#F1EFE7] text-brand-900 px-8 py-4 font-bold tracking-wide hover:bg-white transition-colors text-sm uppercase">
            View All Events
          </Link>
        </div>

      </div>
    </section>
  );
}
