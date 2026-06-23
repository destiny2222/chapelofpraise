import Image from "next/image"; 
import { FadeIn } from "../../components/ui/fade-in";
import PageHeader from "../../components/PageHeader";

export default function About() {
  return (
    <div className="bg-white selection:bg-accent-500 selection:text-white">
      <PageHeader 
        title="About Us" 
        breadcrumbs={[{ label: "About Us", href: "/about" }]} 
      />

      {/* Leadership Images Section */}
      <section className="py-24 sm:py-32 bg-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Header */}
          <FadeIn className="text-center mb-20">
            <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Our Leadership
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900">
              Meet Our Pastors
            </h2>
          </FadeIn>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 lg:gap-12 max-w-md mx-auto">

            {/* Senior Pastor */}
            <FadeIn delay={0.1}>
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
                <div className="relative aspect-[4/5] bg-slate-50 overflow-hidden">
                  <Image
                    src="/pastors.jpeg"
                    alt="Pastor Adegboyega Talabi"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="w-10 h-0.5 bg-accent-500 mb-4" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-900 mb-2">
                    Senior Pastor Adegboyega & Prophetess (Co-Pastor) Mabel Talabi
                  </h2>
                  {/* <p className="text-accent-500 font-bold tracking-widest uppercase text-xs">
                    Senior Pastor
                  </p> */}
                </div>
              </div>
            </FadeIn>

            {/* Co-Pastor */}
            {/* <FadeIn delay={0.3} className="md:mt-16">
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
                <div className="relative aspect-[4/5] bg-slate-50 overflow-hidden">
                  <Image
                    src="/MUMMY-1.png"
                    alt="Prophetess Mabel Talabi"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="p-8">
                  <div className="w-10 h-0.5 bg-accent-500 mb-4" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-900 mb-2">
                    Prophetess Mabel Talabi
                  </h2>
                  <p className="text-accent-500 font-bold tracking-widest uppercase text-xs">
                    Co-Pastor
                  </p>
                </div>
              </div>
            </FadeIn> */}

          </div>
        </div>
      </section>


      {/* Intro Split Section */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            
            {/* Image Side */}
            <FadeIn className="h-full">
              <div className="relative h-full min-h-[400px] w-full rounded-[20px] overflow-hidden shadow-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000" 
                  alt="A diverse and inclusive community"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>

            {/* Text Side */}
            <FadeIn delay={0.2} className="flex flex-col justify-center py-6">
              <h2 className="font-sans text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-[#1A2A3A] leading-[1] mb-8">
                A DIVERSE AND  INCLUSIVE COMMUNITY
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-serif">
                <p>
                  Our ministry embraces diversity and is deeply committed to authentic fellowship. We understand each person comes to us with different talents, backgrounds, and identities. And we celebrate that difference because our diversity is our strength.
                </p>
                <p>
                  Community is everything at Chapel of Praise. It's who we are and how things get done. Everyone here is motivated by a deep commitment to making sure each person and family feels welcome and included. When everyone feels like they belong, we are stronger and smarter together. We're a community driven to make the world a better place—starting in our own backyard.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      
      {/* Our Vision Dark Block */}
      <section className="bg-brand-900 py-24 sm:py-32 text-center px-4">
        <FadeIn className="max-w-4xl mx-auto">
          <p className="text-accent-500 text-sm font-bold tracking-[0.25em] uppercase mb-8">
            Our Vision
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-tight text-white italic font-medium">
            “The vision of Chapel of Praise is to help individuals find and fulfill their God-given purpose in Christ. We are dedicated to making Chapel of Praise a place where everyone can discover Christ and His plan for their lives.”
          </h2>
        </FadeIn>
      </section>

      {/* Our Story Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24">

            {/* Sticky Left Column */}
            <FadeIn>
              <div className="lg:sticky lg:top-32 lg:self-start">
                <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                  Our Story
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900 leading-tight mb-8">
                  Over 30 Years of Faithful Ministry
                </h2>
                <div className="w-12 h-0.5 bg-accent-500 mb-8" />
                <p className="text-slate-600 text-sm leading-relaxed">
                  From a humble apartment fellowship to a thriving congregation — a journey guided by faith.
                </p>
              </div>
            </FadeIn>

            {/* Right Column: Timeline Entries */}
            <div className="space-y-0">

              <FadeIn delay={0.1}>
                <div className="border-t border-slate-200 pt-8 pb-12">
                  <span className="font-mono text-xs text-accent-500 font-bold tracking-widest uppercase block mb-4">
                    Founded · 1993
                  </span>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Christ Healing Evangelical Church (USA) Inc, a non-profit religious church organization, was founded on the 15th of February 1993 and was incorporated by April 15th, 2003. The church was an evolution of what started as a house fellowship meeting in the rented apartment of Pastor Talabi at 5817 N. Kenmore Avenue on the North Side of the city of Chicago, to encourage and strengthen fellow Africans and friends from different backgrounds.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="border-t border-slate-200 pt-8 pb-12">
                  <span className="font-mono text-xs text-accent-500 font-bold tracking-widest uppercase block mb-4">
                    Early Growth
                  </span>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    According to the direction and the leading of the Holy Spirit, and under the leadership of Pastor Adegboyega A. Talabi, the fellowship gathered momentum with increased attendance of people from different backgrounds, and a vision was born. There was a spiritual yearning and a need for identity among those who were present then, as the number of families grew to 15 within one month.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-t border-slate-200 pt-8 pb-12">
                  <span className="font-mono text-xs text-accent-500 font-bold tracking-widest uppercase block mb-4">
                    Incorporation
                  </span>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Having received strong commitment from the people, Pastor Adegboyega A. Talabi then organized the members who would constitute the original incorporators of Christ Healing Evangelical Church (USA Inc.) in 1993. The Church continued to grow by leaps and bounds, enjoying tremendous growth in the years following.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="border-t border-slate-200 pt-8 pb-12">
                  <span className="font-mono text-xs text-accent-500 font-bold tracking-widest uppercase block mb-4">
                    Expansion
                  </span>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    As the membership began to grow, the church moved from the apartment into a storefront at 2422 W. Schubert Avenue on the near north side of Chicago, and there it continued to enjoy great success.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="border-t border-b border-slate-200 pt-8 pb-12">
                  <span className="font-mono text-xs text-accent-500 font-bold tracking-widest uppercase block mb-4">
                    10th Anniversary · 2003
                  </span>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    After its 10th-year anniversary in 2003, the church had grown to a membership in excess of 200 active members, including children. This necessitated a need for a bigger facility, and so the church leased another facility at 2324 W. Nelson Street, Chicago.
                  </p>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 sm:py-32 bg-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Header */}
          <FadeIn className="text-center mb-16">
            <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Our Mission
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900">
              Why We Exist
            </h2>
          </FadeIn>

          {/* Mission Statement — Dark Featured Block */}
          <FadeIn delay={0.1} className="mb-12">
            <div className="bg-brand-900 rounded-3xl px-10 py-12 md:px-16 md:py-14 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-accent-500" />
              <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-6">
                Mission
              </p>
              <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed font-light max-w-4xl">
                To glorify God through corporate worship and personal devotion, and to obey the Great Commission by evangelizing and making disciples who will positively influence their community for Christ.
              </p>
              <p className="text-accent-500 font-mono text-sm mt-8 font-bold tracking-widest">
                Matthew 28:19–20
              </p>
            </div>
          </FadeIn>

          {/* Vision Goals — Card Grid */}
          <FadeIn delay={0.2} className="mb-8">
            <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-3">
              Vision
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-900">
              Under the guidance of the Holy Spirit, we intend to:
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">

            <FadeIn delay={0.25}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-200 block mb-5 leading-none">01</span>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Establish and plant branch churches in North America and Europe
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-200 block mb-5 leading-none">02</span>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Deliberate in making disciples who, in turn, produce other disciples
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-200 block mb-5 leading-none">03</span>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Train and equip leaders for the purpose of ministry
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-200 block mb-5 leading-none">04</span>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Establish and organize a Christian-based educational system where children can grow and fulfill life&apos;s destiny
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Statement of Beliefs */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Header */}
          <FadeIn className="text-center mb-16">
            <p className="text-accent-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">
              What We Believe
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-900">
              Our Statement of Beliefs
            </h2>
          </FadeIn>

          {/* Beliefs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <FadeIn delay={0.05}>
              <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-lg transition-all duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-100 block mb-5 leading-none">01</span>
                <p className="text-slate-800 text-base leading-relaxed flex-1 mb-6">
                  All scriptures are inspired as originally written and therefore infallible and inherent.
                </p>
                <span className="font-mono text-xs text-accent-500 font-bold tracking-wide">2 Tim. 3:16-17 · 2 Pet. 1:21 · 1 Cor. 2:13</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-lg transition-all duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-100 block mb-5 leading-none">02</span>
                <p className="text-slate-800 text-base leading-relaxed flex-1 mb-6">
                  We subscribe to its authority as final. There is one living and true God who exists in three persons: Father, Son, and Holy Spirit.
                </p>
                <span className="font-mono text-xs text-accent-500 font-bold tracking-wide">Matt. 28:19 · 2 Cor. 13:14</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-lg transition-all duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-100 block mb-5 leading-none">03</span>
                <p className="text-slate-800 text-base leading-relaxed flex-1 mb-6">
                  Jesus Christ is the Son of the living God born of a virgin, died on the cross and rose bodily from the dead and is now sitting at the right hand of the Father.
                </p>
                <span className="font-mono text-xs text-accent-500 font-bold tracking-wide">Matt. 1:18 · Matt. 28 · Mk. 16 · 1 Cor. 15</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-lg transition-all duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-100 block mb-5 leading-none">04</span>
                <p className="text-slate-800 text-base leading-relaxed flex-1 mb-6">
                  Christ will return to rapture the believers and raise the dead in Christ to take them with Him.
                </p>
                <span className="font-mono text-xs text-accent-500 font-bold tracking-wide">1 Thess. 4:13-18 · John 14:1-3</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-lg transition-all duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-100 block mb-5 leading-none">05</span>
                <p className="text-slate-800 text-base leading-relaxed flex-1 mb-6">
                  Men inherited a depraved body (Sin Nature) and are lost sinners in need of salvation.
                </p>
                <span className="font-mono text-xs text-accent-500 font-bold tracking-wide">Rom. 3:9-19 · Eph. 2:1-3</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-lg transition-all duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-100 block mb-5 leading-none">06</span>
                <p className="text-slate-800 text-base leading-relaxed flex-1 mb-6">
                  God has provided salvation through the offering of His Son on the cross of Calvary, allowing His blood to be shed for the atonement of our sins.
                </p>
                <span className="font-mono text-xs text-accent-500 font-bold tracking-wide">Rom. 3:25 · Heb. 9:22</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-lg transition-all duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-100 block mb-5 leading-none">07</span>
                <p className="text-slate-800 text-base leading-relaxed flex-1 mb-6">
                  Justification comes when we recognize ourselves as sinners and put our trust in Christ. Salvation is by grace through faith plus nothing.
                </p>
                <span className="font-mono text-xs text-accent-500 font-bold tracking-wide">Rom. 3:24 · Eph. 2:8-9</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-lg transition-all duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-100 block mb-5 leading-none">08</span>
                <p className="text-slate-800 text-base leading-relaxed flex-1 mb-6">
                  God gave everyone a free will to choose his or her place in eternity. Kingdom of heaven or eternity in hell is by a man&apos;s choice.
                </p>
                <span className="font-mono text-xs text-accent-500 font-bold tracking-wide">Ezek. 18:20-26</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-lg transition-all duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-100 block mb-5 leading-none">09</span>
                <p className="text-slate-800 text-base leading-relaxed flex-1 mb-6">
                  Baptism of the Holy Spirit is scriptural and other tongues accompany it. The in-filling of the Holy Spirit is a continuous process throughout the lifetime of a believer.
                </p>
                <span className="font-mono text-xs text-accent-500 font-bold tracking-wide">1 Cor. 1:2 · Acts 2:1-2 · Mark 16:17</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-lg transition-all duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-100 block mb-5 leading-none">10</span>
                <p className="text-slate-800 text-base leading-relaxed flex-1 mb-6">
                  The Bible teaches and we believe in the eternal blessedness of the saved and the eternal punishment of the finally impenitent.
                </p>
                <span className="font-mono text-xs text-accent-500 font-bold tracking-wide">John 14:14 · 5:24 · Rev. 20:10 · Matt. 25:46</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-lg transition-all duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-100 block mb-5 leading-none">11</span>
                <p className="text-slate-800 text-base leading-relaxed flex-1 mb-6">
                  The grace of God has appeared to all men and teaches us to live soberly, righteously, and Godly.
                </p>
                <span className="font-mono text-xs text-accent-500 font-bold tracking-wide">Tit. 2:11-13</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-8 hover:border-accent-500/40 hover:shadow-lg transition-all duration-300 h-full">
                <span className="font-mono text-4xl font-bold text-slate-100 block mb-5 leading-none">12</span>
                <p className="text-slate-800 text-base leading-relaxed flex-1 mb-6">
                  We believe in the efficacy of prayer.
                </p>
                <span className="font-mono text-xs text-accent-500 font-bold tracking-wide">James 5:17</span>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
 
    </div>
  );
}
