"use client";

import { useState } from "react";
import { FadeIn } from "./ui/fade-in";

type VideoMessage = {
  id: string;
  title: string;
  video_id: string;
};

export default function MessagesGrid({ videos }: { videos: VideoMessage[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(videos.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleVideos = videos.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 500, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 500, behavior: "smooth" });
    }
  };

  if (videos.length === 0) {
    return (
      <div className="text-center py-24">
        <h3 className="text-2xl font-serif font-bold text-brand-900 mb-4">No Messages Found</h3>
        <p className="text-slate-600">Check back later for new video messages.</p>
      </div>
    );
  }

  return (
    <>
      {/* Featured Video */}
      <FadeIn>
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl mb-16 bg-slate-900">
          <iframe 
            src={`https://www.youtube.com/embed/${videos[0].video_id}?rel=0`}
            title="Featured Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          ></iframe>
        </div>
      </FadeIn>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {visibleVideos.map((video, index) => (
          <FadeIn key={video.id} delay={index * 0.05}>
            <div className="group flex flex-col h-full">
              {/* Embedded Video */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-4 bg-slate-900 shrink-0">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.video_id}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                ></iframe>
              </div>
              
              {/* Video Info */}
              <h4 className="text-brand-900 font-bold text-lg leading-snug hover:text-accent-500 transition-colors">
                {video.title}
              </h4>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <FadeIn delay={0.2}>
          <div className="mt-16 flex items-center justify-center gap-2">
            <button 
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-brand-900 hover:bg-white border border-transparent hover:border-slate-200 shadow-sm hover:shadow-md hover:text-accent-500'}`}
              aria-label="Previous page"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentPage(i + 1);
                  window.scrollTo({ top: 500, behavior: "smooth" });
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${currentPage === i + 1 ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30 scale-110' : 'text-slate-500 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-sm hover:text-brand-900'}`}
              >
                {i + 1}
              </button>
            ))}
            
            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-brand-900 hover:bg-white border border-transparent hover:border-slate-200 shadow-sm hover:shadow-md hover:text-accent-500'}`}
              aria-label="Next page"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </FadeIn>
      )}
    </>
  );
}
