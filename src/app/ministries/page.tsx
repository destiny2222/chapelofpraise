import PageHeader from "../../components/PageHeader";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "../../components/ui/fade-in";

const ministries = [
  {
    name: "Men of Honor",
    description: "A brotherhood of men committed to living with integrity, purpose, and strength in Christ. Join us as we sharpen one another and grow as leaders in our homes, church, and community.",
    meetingTime: "Open To All Men",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80"
  },
  {
    name: "Diamond Ladies",
    description: "A sisterhood of women discovering their God-given brilliance. Through fellowship, prayer, and the word, we encourage one another to shine brightly in every season of life.",
    meetingTime: "Open To All Women",
    image: "https://images.unsplash.com/photo-1521120413309-42e7eada0334?auto=format&fit=crop&q=80"
  },
  {
    name: "Young Couples Fellowship",
    description: "Building strong foundations for marriages in their first decade. Connect with other young couples navigating the joys and challenges of early marriage through biblical wisdom and community.",
    meetingTime: "Young Marriages 1-10 Years",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80"
  },
  {
    name: "God's Armor Girls Quest",
    description: "Equipping young women with the full armor of God. Through mentorship, fellowship, and discipleship, our GQ ministry helps girls grow in faith, confidence, and purpose.",
    meetingTime: "GQ Ministry",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80"
  },
  {
    name: "NextGen Ministry",
    description: "Our next generation is the future of the church. Through worship, teaching, and fellowship, we're raising up leaders who will impact the world for Christ.",
    meetingTime: "Upper Room: First Thursday • 7:30 - 9:00 PM",
    image: "https://images.unsplash.com/photo-1523580494112-071d16211101?auto=format&fit=crop&q=80"
  },
  {
    name: "Children's Ministry",
    description: "Age-appropriate programs for children to learn about God's love in a fun, safe, and nurturing environment. Every child matters at Chapel of Praise.",
    meetingTime: "Every Sunday during Worship Service",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80"
  },
  {
    name: "Worship & Choir Ministry",
    description: "Our worship team leads the congregation into God's presence every Sunday. If you have a heart for worship and a desire to serve through music, we'd love to have you join us for rehearsal.",
    meetingTime: "Fridays • 7:30 PM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80"
  }
];

export default function Ministries() {
  return (
    <div className="bg-[#FAF9F6] selection:bg-[#C8102E] selection:text-white pb-32">
      <PageHeader 
        title="Our Ministries" 
        subtitle="At Chapel of Praise, we believe in growing together through fellowship, discipleship, and community. Find your place in one of our ministries."
        breadcrumbs={[{ label: "Ministries", href: "/ministries" }]} 
        // backgroundImage="https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&q=80"
      />

      <section className="mt-40 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-sm font-bold tracking-widest text-accent-500 uppercase mb-3 block">
              Get Connected
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-900 mb-6">
              Find Your Place
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you’re looking for fellowship, growth, or a way to serve, there’s a ministry for you at Chapel of Praise.
            </p>
          </FadeIn>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {ministries.map((ministry, index) => (
            <FadeIn key={ministry.name} delay={index * 0.1}>
              <div className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] flex flex-col justify-between p-8 text-center cursor-pointer shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${ministry.image}')` }}
                ></div>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 group-hover:bg-black/70 transition-colors duration-500"></div>
                
                <div className="relative z-10 transform transition-transform duration-500 group-hover:translate-y-2">
                  <h3 className={`text-3xl font-bold font-serif ${ministry.name === 'Outreach & Missions' ? 'text-accent-500' : 'text-white'}`}>
                    {ministry.name}
                  </h3>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="opacity-0 h-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 mb-6 text-white/90 px-2">
                    <p className="mb-4 text-sm leading-relaxed">{ministry.description}</p>
                    <p className="text-xs font-semibold tracking-wider text-accent-500">{ministry.meetingTime.toUpperCase()}</p>
                  </div>
                   
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
