import EventCard from "../../components/EventCard";

const allEvents = [
  {
    id: "1",
    title: "Sunday Worship Service",
    date: "2026-06-14T09:00:00Z",
    time: "9:00 AM - 11:30 AM",
    location: "Main Auditorium",
    description: "Join us for our weekly Sunday worship service full of praise, worship, and an inspiring message."
  },
  {
    id: "2",
    title: "Midweek Bible Study",
    date: "2026-06-17T18:30:00Z",
    time: "6:30 PM - 8:00 PM",
    location: "Fellowship Hall",
    description: "Dive deeper into the Word of God with our interactive midweek Bible study sessions."
  },
  {
    id: "3",
    title: "Youth Conference 2026",
    date: "2026-06-20T10:00:00Z",
    time: "10:00 AM - 4:00 PM",
    location: "Youth Center",
    description: "A day of games, worship, and teaching specifically designed for teenagers and young adults."
  },
  {
    id: "4",
    title: "Community Outreach",
    date: "2026-06-27T08:00:00Z",
    time: "8:00 AM - 12:00 PM",
    location: "Downtown City Square",
    description: "Serving our local community by distributing food, clothes, and sharing the love of Christ."
  }
];

export default function Events() {
  return (
    <div className="bg-white py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-serif">Upcoming Events</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            There's always something happening at Chapel of Praise. Find out what's coming up and how you can get involved.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {allEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}
