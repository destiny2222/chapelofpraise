"use client";

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import { ChevronRight, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }
  return (
    <footer className="bg-[#0b132b] text-brand-50 border-t border-white/5" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* About Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6"> 
              <h3 className="text-xl font-bold text-white">About Chapel of Praise</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Chapel of Praise is professionally designed for a life-giving community where you can find a true connection to God and others. Join us in transforming lives through the love of Christ!
            </p>
            {/* Social Media Links */}
            <div className='mt-5'>
              <h4 className='text-white text-lg font-bold mb-2'>Follow Us</h4>
              <div className="flex space-x-3 pt-2">
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#3b5998] hover:text-white hover:border-[#3b5998] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[#3b5998]/30 hover:shadow-lg">
                  <FaFacebook className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#1da1f2] hover:text-white hover:border-[#1da1f2] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[#1da1f2]/30 hover:shadow-lg">
                  <FaTwitter className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#e1306c] hover:text-white hover:border-[#e1306c] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[#e1306c]/30 hover:shadow-lg">
                  <FaInstagram className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[#ff0000]/30 hover:shadow-lg">
                  <FaYoutube className="w-4 h-4" />
                </Link> 
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
            </div>
            <ul role="list" className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Phase 3', href: '/phase' },
                { name: 'Services', href: '/services' },
                { name: 'Ministries', href: '/ministries' },
                { name: 'LSM', href: '/lsm' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center text-sm text-slate-400 hover:text-accent-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Contact Details Column */}
          <div>
            <div className="flex items-center gap-2 mb-6"> 
              <h3 className="text-xl font-bold text-white">Contact Us</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-slate-400">
                  15821 Greenwood Road,<br />
                  South Holland, IL 60473
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:708-201-1192" className="text-sm text-slate-400 hover:text-accent-500 transition-colors">
                    708-201-1192
                  </a>
                  <a href="tel:708-201-1193" className="text-sm text-slate-400 hover:text-accent-500 transition-colors">
                    708-201-1193
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <a href="mailto:checchapelofpraise@gmail.com" className="text-sm text-slate-400 hover:text-accent-500 transition-colors">
                  checchapelofpraise@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 gap-4">
          <p className="text-xs leading-5 text-slate-400">
            Copyrights &copy; {new Date().getFullYear()} Chapel of Praise. Designed by <a href="https://dexnovate.com" className='text-accent-500' target="_blank" rel="noopener noreferrer">dexnovate</a> 
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400">  
            <Link href="/sermons" className="hover:text-white transition-colors">Sermons</Link>
            <span>/</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
