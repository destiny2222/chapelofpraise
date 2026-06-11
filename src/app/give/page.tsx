import { FadeIn } from "../../components/ui/fade-in";
import PageHeader from "../../components/PageHeader";
import { Smartphone, Mail, Laptop, HeartHandshake } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ShareButton from "../../components/ShareButton";

export default function Give() {

  const givingCategories = [
    { name: "Tithe", description: "The biblical standard of giving 10% of our income." },
    { name: "Offering", description: "Free-will gifts given above and beyond the tithe." },
    { name: "Building Fund", description: "Contributions towards our facility expansion and maintenance." },
    { name: "Missions", description: "Supporting local and global outreach initiatives." }
  ];

  return (
    <div className="bg-white selection:bg-accent-500 selection:text-white pb-0">
      <PageHeader 
        title="Partner With Us" 
        overline="Chapel of Praise"
        subtitle={<>Your generosity helps us reach our community and beyond.<br className="hidden sm:block"/> Every gift makes a difference.</>}
        breadcrumbs={[{ label: "Give", href: "/give" }]} 
      />

      {/* Scripture Section */}
      <section className="bg-[#121A2A] py-24 px-6 lg:px-8 text-center border-t border-white/5">
        <FadeIn className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white italic font-medium leading-relaxed mb-8">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          </h3>
          <p className="text-accent-500 font-bold tracking-widest text-sm">
            2 Corinthians 9:7
          </p>
        </FadeIn>
      </section>

      {/* Expanded Giving Options */}
      <section className="bg-[#FAF9F6] py-32 px-6 lg:px-8 border-t border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid max-w-2xl grid-cols-1 gap-12 lg:max-w-none lg:grid-cols-2 lg:gap-8 items-stretch">
            
            {/* Online Giving - Premium Dark Card */}
            <FadeIn delay={0.1} className="h-full">
              <div className="bg-brand-900 p-8 sm:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent"></div>
                
                <div className="relative z-10 flex-grow">
                  <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm border border-white/10">
                    <Laptop className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-4">Give Online</h3>
                  <p className="text-slate-300 mb-10 text-lg font-light leading-relaxed">
                    Securely give online using your credit/debit card. You can easily set up a one-time gift or schedule a recurring donation.
                  </p>
                  
                  <div className="space-y-6 mb-12">
                    <h4 className="font-bold text-white tracking-wide uppercase text-sm opacity-90">Giving Categories</h4>
                    <ul className="space-y-5">
                        {givingCategories.map(cat => (
                        <li key={cat.name} className="flex gap-x-4 items-start">
                            <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#D4AF37]/30">
                              <svg className="h-3.5 w-3.5 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-slate-300 font-light leading-relaxed">
                              <strong className="text-white font-semibold">{cat.name}:</strong> {cat.description}
                            </span>
                        </li>
                        ))}
                    </ul>
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-8">
                  <button className="w-full bg-[#D4AF37] text-white font-bold uppercase tracking-widest text-sm px-8 py-5 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-[#B8962E] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2">
                    Proceed to Secure Gateway
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* Bank Transfer - Premium Light Card */}
            <FadeIn delay={0.2} className="h-full">
              <div className="bg-white p-8 sm:p-12 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 h-full flex flex-col">
                <div className="inline-flex items-center justify-center p-3 bg-[#FAF9F6] rounded-2xl mb-8 border border-slate-100">
                  <HeartHandshake className="w-8 h-8 text-brand-900" />
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-brand-900 font-serif mb-4">Direct Bank Transfer</h3>
                <p className="text-slate-500 mb-10 text-lg font-light leading-relaxed">
                  You can transfer directly to our church bank accounts. Please specify your giving category in the transfer description.
                </p>

                <div className="space-y-6 flex-grow">
                <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-[#D4AF37]/30 transition-colors">
                    <h4 className="font-bold text-brand-900 mb-3 text-lg">Primary Account <span className="text-slate-500 font-normal text-sm ml-1">(Tithe & Offering)</span></h4>
                    <dl className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-slate-200/60 pb-2"><dt className="text-slate-500">Bank Name:</dt><dd className="font-bold text-brand-900">Grace City Bank</dd></div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-2"><dt className="text-slate-500">Account Name:</dt><dd className="font-bold text-brand-900">Chapel of Praise</dd></div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-2"><dt className="text-slate-500">Account Number:</dt><dd className="font-mono font-bold text-brand-900 bg-white px-2 py-0.5 rounded border border-slate-100">1234567890</dd></div>
                    <div className="flex justify-between"><dt className="text-slate-500">Routing Number:</dt><dd className="font-mono font-bold text-brand-900 bg-white px-2 py-0.5 rounded border border-slate-100">098765432</dd></div>
                      </dl>
                  </div>

                <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-[#D4AF37]/30 transition-colors">
                    <h4 className="font-bold text-brand-900 mb-3 text-lg">Projects Account <span className="text-slate-500 font-normal text-sm ml-1">(Building & Missions)</span></h4>
                    <dl className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-slate-200/60 pb-2"><dt className="text-slate-500">Bank Name:</dt><dd className="font-bold text-brand-900">Grace City Bank</dd></div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-2"><dt className="text-slate-500">Account Name:</dt><dd className="font-bold text-brand-900">Chapel of Praise Projects</dd></div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-2"><dt className="text-slate-500">Account Number:</dt><dd className="font-mono font-bold text-brand-900 bg-white px-2 py-0.5 rounded border border-slate-100">0987654321</dd></div>
                    <div className="flex justify-between"><dt className="text-slate-500">Routing Number:</dt><dd className="font-mono font-bold text-brand-900 bg-white px-2 py-0.5 rounded border border-slate-100">098765432</dd></div>
                      </dl>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Phase III Fundraising Campaign */}
            <FadeIn delay={0.3} className="lg:col-span-2 mt-8 lg:mt-0">
              <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row group">
                <div className="w-full md:w-2/5 relative min-h-[300px] sm:min-h-[400px]">
                  <Image 
                    src="/give.jpeg" 
                    alt="Building Expansion Phase III" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent md:bg-none" />
                </div>
                <div className="p-8 sm:p-12 md:w-3/5 flex flex-col justify-center bg-brand-900 relative overflow-hidden">
                  {/* Decorative background */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent"></div>
                  
                  <div className="relative z-10">
                    <span className="text-[#D4AF37] font-bold tracking-widest text-sm uppercase mb-3 block">Special Campaign</span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-4">Building Expansion Phase III</h3>
                    <p className="text-slate-300 mb-8 text-lg font-light leading-relaxed">
                      Partner with us to build our new sanctuary. Your financial support will help us expand our facility to serve our growing congregation and community. <strong>Please send this to friends!</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <a 
                        href="https://www.zeffy.com/en-US/donation-form/building-expansion-phase-iii" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex justify-center bg-[#D4AF37] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-[#B8962E] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:-translate-y-1 transition-all duration-300 items-center gap-2"
                      >
                        Donate to Phase III
                      </a>
                      <ShareButton 
                        title="Building Expansion Phase III"
                        url="https://www.zeffy.com/en-US/donation-form/building-expansion-phase-iii"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}