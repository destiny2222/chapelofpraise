const ministries = [
  {
    name: "Youth Ministry",
    description: "A dynamic environment for teenagers and young adults to discover their identity in Christ, build lasting friendships, and serve their community.",
    meetingTime: "Fridays at 7:00 PM",
    contactPerson: "Michael Jones",
  },
  {
    name: "Children's Ministry",
    description: "Providing a safe, fun, and engaging atmosphere where kids can learn about God's love through interactive lessons and activities.",
    meetingTime: "Sundays during 9:00 AM & 11:00 AM services",
    contactPerson: "Lisa Adams",
  },
  {
    name: "Men's Fellowship",
    description: "Equipping men to be godly leaders in their homes, workplaces, and communities through biblical teaching and accountability.",
    meetingTime: "Every 2nd Saturday at 8:00 AM",
    contactPerson: "Robert Brown",
  },
  {
    name: "Women's Fellowship",
    description: "A nurturing space for women of all ages to grow in their faith, share their journeys, and support one another in love.",
    meetingTime: "Every 3rd Saturday at 10:00 AM",
    contactPerson: "Sarah Smith",
  },
  {
    name: "Choir/Worship Team",
    description: "Leading the congregation in worship through music, creating an atmosphere where people can encounter the presence of God.",
    meetingTime: "Thursdays at 6:30 PM",
    contactPerson: "Emily White",
  }
];

export default function Ministries() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-serif">Our Ministries</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Find your place to belong, grow, and serve. We have ministries tailored for every age and stage of life.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {ministries.map((ministry) => (
            <div key={ministry.name} className="flex flex-col bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-brand-900 font-serif mb-4">{ministry.name}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{ministry.description}</p>
              <div className="pt-6 border-t border-slate-100 text-sm">
                <p className="mb-2"><strong className="text-slate-900">Meeting Time:</strong> {ministry.meetingTime}</p>
                <p><strong className="text-slate-900">Contact:</strong> {ministry.contactPerson}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
