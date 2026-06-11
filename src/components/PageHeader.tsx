import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { FadeIn } from './ui/fade-in';
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  overline?: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

export default function PageHeader({ 
  title, 
  subtitle,
  overline,
  breadcrumbs, 
  backgroundImage = "https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&q=80&w=2000" 
}: PageHeaderProps) {
  return (
    <div className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 flex items-center justify-center min-h-[350px] sm:min-h-[450px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={backgroundImage}
          alt="Header Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Modern dark gradient overlay with slight blur */}
        <div className="absolute inset-0 bg-[#1A2A3A]/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          {overline && (
            <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
              {overline}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
            {title}
          </h1>
          
          {subtitle && (
            <div className="text-white/90 text-lg sm:text-xl font-light leading-relaxed mb-8 max-w-3xl mx-auto">
              {subtitle}
            </div>
          )}
          
          <nav className="flex justify-center" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-xl">
              <li className="inline-flex items-center">
                <Link href="/" className="text-sm font-bold tracking-wider uppercase text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href}>
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-white/60 mx-1" />
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-sm font-bold tracking-wider uppercase text-accent-500 ml-1">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link href={crumb.href} className="text-sm font-bold tracking-wider uppercase text-white/80 hover:text-white transition-colors ml-1">
                        {crumb.label}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </FadeIn>
      </div>
    </div>
  );
}
