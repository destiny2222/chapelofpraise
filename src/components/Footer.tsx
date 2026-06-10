import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="font-serif text-2xl font-bold text-white">Chapel of Praise</span>
            <p className="text-sm leading-6 text-brand-200">
              Transforming lives through the love of Christ. Join us this Sunday!
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/about" className="text-sm leading-6 text-brand-200 hover:text-white">About Us</Link></li>
                  <li><Link href="/sermons" className="text-sm leading-6 text-brand-200 hover:text-white">Sermons</Link></li>
                  <li><Link href="/events" className="text-sm leading-6 text-brand-200 hover:text-white">Events</Link></li>
                  <li><Link href="/ministries" className="text-sm leading-6 text-brand-200 hover:text-white">Ministries</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Connect</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/contact" className="text-sm leading-6 text-brand-200 hover:text-white">Contact Us</Link></li>
                  <li><Link href="/prayer" className="text-sm leading-6 text-brand-200 hover:text-white">Prayer Request</Link></li>
                  <li><Link href="/donate" className="text-sm leading-6 text-brand-200 hover:text-white">Donate</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-brand-800 pt-8 sm:mt-20 lg:mt-24 text-center">
          <p className="text-xs leading-5 text-brand-400">
            &copy; {new Date().getFullYear()} Chapel of Praise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
