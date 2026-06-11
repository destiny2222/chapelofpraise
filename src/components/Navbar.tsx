"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MapPin, Mail, Globe, Search, Plus, ArrowRight } from 'lucide-react';
import { GlowButton } from './ui/shiny-button-1';
import { useState, useEffect } from 'react';

import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  // Add scroll listener to make navbar solid when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-brand-900/95 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'}`}>
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl lg:pt-6 lg:pb-6 items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500 rounded-sm">
            <span className="sr-only">Chapel of Praise</span>
            {/* Note: Ensure the logo.png is white/light or works on dark backgrounds */}
            <Image
              src="/logo.png"
              alt="Chapel of Praise Logo"
              width={200}
              height={60}
              priority
              className="h-10 w-auto " 
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden flex-1 justify-end items-center gap-2 sm:gap-4">
          <Link href="/donate" className="flex items-center scale-90 origin-right">
            <GlowButton>GIVE</GlowButton>
          </Link>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-accent-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-x-8 items-center">
          <Link href="/about" className="text-sm font-bold uppercase tracking-wider text-white hover:text-accent-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500 rounded-sm transition-colors flex items-center gap-1">
            About Us 
          </Link>
          <Link href="/services" className="text-sm font-bold uppercase tracking-wider text-white hover:text-accent-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500 rounded-sm transition-colors flex items-center gap-1">
            Services 
          </Link> 
          <Link href="/ministries" className="text-sm font-bold uppercase tracking-wider text-white hover:text-accent-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500 rounded-sm transition-colors flex items-center gap-1">
            Ministries 
          </Link>
          <Link href="/lsm" className="text-sm font-bold uppercase tracking-wider text-white hover:text-accent-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500 rounded-sm transition-colors flex items-center gap-1">
            LSM  
          </Link> 
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-white hover:text-accent-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500 rounded-sm transition-colors">
              Live Stream
              <Plus className="h-3.5 w-3.5 opacity-70" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-md bg-brand-900 border border-white/10 py-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="https://vimeo.com/chapelofpraise" className="block px-4 py-2 text-sm text-white/90 hover:bg-brand-800 hover:text-accent-500">
                Live
              </Link>
              <Link href="/messages" className="block px-4 py-2 text-sm text-white/90 hover:bg-brand-800 hover:text-accent-500">
                Messages
              </Link> 
            </div>
          </div>
          <Link href="/contact" className="text-sm font-bold uppercase tracking-wider text-white hover:text-accent-500 py-2 transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4 items-center">
          <Link href="/give" className="flex items-center">
            <GlowButton>GIVE</GlowButton>
          </Link>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 w-full h-[100dvh] bg-brand-900 flex flex-col items-center justify-center z-[100] animate-bg-enter" style={{ animationDelay: '150ms' }}>
          <style jsx>{`
            @keyframes bg-enter {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            .animate-bg-enter {
              animation: bg-enter 0.3s ease-out forwards;
              opacity: 0;
            }
            @keyframes menu-item-enter {
              0% {
                opacity: 0;
                transform: translateY(15px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-menu-item {
              animation: menu-item-enter 0.5s ease-out forwards;
              opacity: 0;
            }
          `}</style>

          {/* Top Header of Overlay */}
          <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 lg:px-8">
            <div className="-m-1.5 p-1.5 animate-menu-item" style={{ animationDelay: '300ms' }}>
              <Image
                src="/logo.png"
                alt="Chapel of Praise Logo"
                width={150}
                height={45}
                priority
                className="h-10 w-auto " 
              />
            </div>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-accent-500 transition-colors animate-menu-item"
              style={{ animationDelay: '300ms' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-8 w-8 font-light" aria-hidden="true" />
            </button>
          </div>

          {/* Centered Navigation Links */}
          <div className="flex flex-col animate-menu-item  items-center gap-6 w-full mt-12 overflow-y-auto pb-32"  style={{ animationDelay: '650ms' }}>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="animate-menu-item transition-colors duration-300 text-2xl sm:text-3xl font-bold tracking-wide text-white hover:text-accent-500   flex items-center gap-3" >
              Home 
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="animate-menu-item transition-colors duration-300 text-2xl sm:text-3xl font-bold tracking-wide text-white hover:text-accent-500 flex items-center gap-3" >
              About Us 
            </Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="animate-menu-item transition-colors duration-300 text-2xl sm:text-3xl font-bold tracking-wide text-white hover:text-accent-500 flex items-center gap-3" >
              Services 
            </Link> 
            <Link href="/ministries" onClick={() => setIsMobileMenuOpen(false)} className="animate-menu-item transition-colors duration-300 text-2xl sm:text-3xl font-bold tracking-wide text-white hover:text-accent-500 flex items-center gap-3" >
              Ministries 
            </Link>
            <Link href="/lsm" onClick={() => setIsMobileMenuOpen(false)} className="animate-menu-item transition-colors duration-300 text-2xl sm:text-3xl font-bold tracking-wide text-white hover:text-accent-500 flex items-center gap-3" >
              LSM
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="animate-menu-item transition-colors duration-300 text-2xl sm:text-3xl font-bold tracking-wide text-white hover:text-accent-500 flex items-center gap-3" >
              Contact 
            </Link>
            {/* live stream dropdown */}
            
            <Link href="/give" onClick={() => setIsMobileMenuOpen(false)} className="mt-6 animate-menu-item" style={{ animationDelay: '750ms' }}>
              <GlowButton>Give</GlowButton>
            </Link>
          </div>

          {/* Bottom Social Icons and Divider */}
          <div className="absolute bottom-6 sm:bottom-8 left-0 w-full flex flex-col items-center justify-center animate-menu-item" style={{ animationDelay: '800ms' }}>
            <div className="w-[80%] max-w-xs h-px bg-white/20 mb-6"></div>
            <div className="flex items-center gap-8">
              <Link href="#" className="text-white hover:text-accent-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </Link>
              <Link href="#" className="text-white hover:text-accent-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </Link>
              <Link href="#" className="text-white hover:text-accent-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
