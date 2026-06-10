"use client";
import React, { useId } from 'react';

const GlowButton = ({ children = 'Register' }: { children?: React.ReactNode }) => {
  const id = useId().replace(/:/g, '');
  const filters = {
    unopaq: `unopaq-${id}`,
    unopaq2: `unopaq2-${id}`,
    unopaq3: `unopaq3-${id}`,
  };

  return (
    <div className="relative group">
      {/* SVG Filters */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq}>
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq2}>
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq3}>
          <feColorMatrix values="1 0 0 0.2 0 0 1 0 0.2 0 0 0 1 0.2 0 0 0 0 2 0" />
        </filter>
      </svg>

      {/* Button Container */}
      <div className="relative w-24 h-[2.35rem]">
        {/* Outer Glow Layer */}
        <div 
          className="absolute inset-0 -z-20 opacity-40 overflow-hidden transition-opacity duration-300
                     group-hover:opacity-70 group-active:opacity-100 rounded-full"
          style={{ filter: `blur(0.8em) url(#${filters.unopaq})` }}
        >
          <div 
            className="absolute inset-[-150%] group-hover:animate-[speen_8s_cubic-bezier(0.56,0.15,0.28,0.86)_infinite,woah_4s_infinite]"
            style={{ 
              background: 'linear-gradient(90deg, #fcd34d 30%, #0000 50%, #b45309 70%)',
            }}
          />
        </div>

        {/* Middle Glow Layer */}
        <div 
          className="absolute inset-[-0.125em] -z-20 opacity-60 overflow-hidden transition-opacity duration-300
                     group-hover:opacity-80 group-active:opacity-100 rounded-full"
          style={{ filter: `blur(0.25em) url(#${filters.unopaq2})` }}
        >
          <div 
            className="absolute inset-[-150%] group-hover:animate-[speen_8s_cubic-bezier(0.56,0.15,0.28,0.86)_infinite,woah_4s_infinite]"
            style={{ 
              background: 'linear-gradient(90deg, #fde68a 20%, #0000 45% 55%, #d97706 80%)',
            }}
          />
        </div>

        {/* Button Border */}
        <div className="absolute inset-0 p-[2px] bg-gradient-to-r from-amber-200 to-amber-500 rounded-2xl">
          <div className="relative w-full h-full rounded-full">
            {/* Inner Glow Layer */}
            <div 
              className="absolute inset-[-2px] -z-10 opacity-70 overflow-hidden transition-opacity duration-300
                         group-hover:opacity-100 group-active:opacity-100 rounded-full"
              style={{ filter: `blur(2px) url(#${filters.unopaq3})` }}
            >
              <div 
                className="absolute inset-[-150%] group-hover:animate-[speen_8s_cubic-bezier(0.56,0.15,0.28,0.86)_infinite,woah_4s_infinite]"
                style={{ 
                  background: 'linear-gradient(90deg, #fffbeb 30%, #0000 45% 55%, #f59e0b 70%)',
                }}
              />
            </div>
            
            {/* Button Surface */}
            <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-brand-700 to-brand-900 text-white font-bold text-sm rounded-3xl overflow-hidden shadow-sm">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GlowButton };
