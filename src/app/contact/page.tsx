export default function Contact() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-serif">Contact Us</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Have questions? Want to learn more? We'd love to hear from you.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Info & Map */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 font-serif mb-6">Our Information</h3>
            <dl className="space-y-6 text-base leading-7 text-slate-600 mb-10">
              <div className="flex gap-x-4">
                <dt className="font-semibold text-slate-900">Address:</dt>
                <dd>123 Faith Avenue, Grace City, GC 12345</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="font-semibold text-slate-900">Phone:</dt>
                <dd>+1 (555) 123-4567</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="font-semibold text-slate-900">Email:</dt>
                <dd>info@chapelofpraise.com</dd>
              </div>
            </dl>
            
            {/* Mock Map Embed */}
            <div className="aspect-w-16 aspect-h-9 w-full bg-slate-200 rounded-2xl overflow-hidden relative">
              {/* Replace with real iframe */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium border-2 border-dashed border-slate-300 m-2 rounded-xl">
                Google Maps Embed Placeholder
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-900">Name</label>
                <div className="mt-2.5">
                  <input type="text" name="name" id="name" required className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">Email</label>
                <div className="mt-2.5">
                  <input type="email" name="email" id="email" required className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">Message</label>
                <div className="mt-2.5">
                  <textarea name="message" id="message" rows={4} required className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <button type="submit" className="w-full rounded-md bg-brand-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-500">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
