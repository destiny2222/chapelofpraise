export default function AdminDashboard() {
  const stats = [
    { name: "Total Sermons", value: "45" },
    { name: "Upcoming Events", value: "8" },
    { name: "Active Ministries", value: "5" },
    { name: "New Prayer Requests", value: "12" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(stat => (
          <div key={stat.name} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-500 font-medium">{stat.name}</p>
            <p className="text-3xl font-bold text-brand-700 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4 border-b pb-2">Recent Prayer Requests</h3>
          <ul className="space-y-4">
            <li className="text-sm">
              <p className="font-semibold text-slate-900">Jane Doe <span className="text-slate-400 font-normal">2 hours ago</span></p>
              <p className="text-slate-600 truncate">Praying for my family's health this season...</p>
            </li>
            <li className="text-sm">
              <p className="font-semibold text-slate-900">Anonymous <span className="text-slate-400 font-normal">5 hours ago</span></p>
              <p className="text-slate-600 truncate">I need prayer for a job interview tomorrow.</p>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4 border-b pb-2">System Status</h3>
          <ul className="space-y-4">
            <li className="flex justify-between text-sm">
              <span className="text-slate-600">Website Status</span>
              <span className="text-green-600 font-semibold">Online</span>
            </li>
            <li className="flex justify-between text-sm">
              <span className="text-slate-600">Database Connection</span>
              <span className="text-green-600 font-semibold">Mock Data Active</span>
            </li>
            <li className="flex justify-between text-sm">
              <span className="text-slate-600">Storage</span>
              <span className="text-slate-900 font-semibold">24% Used</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
