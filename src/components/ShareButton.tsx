"use client";

import React from "react";

export default function ShareButton({ url, title }: { url: string; title: string }) {
  return (
    <button 
      onClick={() => {
        if (navigator.share) {
          navigator.share({
            title,
            url
          });
        } else {
          navigator.clipboard.writeText(url);
          alert('Link copied to clipboard!');
        }
      }}
      className="w-full sm:w-auto inline-flex justify-center bg-white/10 text-white border border-white/20 font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 items-center gap-2"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      Share Link
    </button>
  );
}
