export default function About() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl font-serif">About Chapel of Praise</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A diverse community of believers united by a common purpose: to know Christ and make Him known. Learn about our history, our beliefs, and the leadership team that guides our mission.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 font-serif">Our History</h3>
            <p>
              Founded in 2010, Chapel of Praise began as a small prayer meeting in a living room. With a burning desire for authentic community and sound biblical teaching, the fellowship quickly grew. By 2015, we moved into our current sanctuary, and today, we are a vibrant congregation that serves our local community and beyond.
            </p>
            <p>
              Through every season, our focus has remained the same: to be a beacon of hope and a place where lives are transformed by the power of the Gospel.
            </p>

            <h3 className="text-2xl font-bold tracking-tight text-slate-900 font-serif mt-12">Mission & Vision</h3>
            <p>
              <strong>Our Mission:</strong> To lead people into a growing relationship with Jesus Christ through dynamic worship, practical biblical teaching, and intentional community.
            </p>
            <p>
              <strong>Our Vision:</strong> To see our city and our world transformed by the love of Christ, one life at a time.
            </p>
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 font-serif">Core Beliefs</h3>
            <ul className="space-y-4 list-disc pl-5">
              <li><strong>The Bible:</strong> We believe the Bible is the inspired, infallible Word of God and the final authority for all matters of faith and practice.</li>
              <li><strong>The Trinity:</strong> We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit.</li>
              <li><strong>Salvation:</strong> We believe salvation is a gift of God's grace, received through faith in Jesus Christ alone.</li>
              <li><strong>The Church:</strong> We believe the Church is the body of Christ, called to worship, discipleship, fellowship, and mission.</li>
            </ul>

            <h3 className="text-2xl font-bold tracking-tight text-slate-900 font-serif mt-12">Our Leadership</h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex gap-4 items-center">
                <div className="h-16 w-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl">JD</div>
                <div>
                  <h4 className="font-semibold text-slate-900 m-0">John Doe</h4>
                  <p className="text-sm text-brand-600 m-0">Lead Pastor</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="h-16 w-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl">SS</div>
                <div>
                  <h4 className="font-semibold text-slate-900 m-0">Sarah Smith</h4>
                  <p className="text-sm text-brand-600 m-0">Associate Pastor</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="h-16 w-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl">MJ</div>
                <div>
                  <h4 className="font-semibold text-slate-900 m-0">Michael Jones</h4>
                  <p className="text-sm text-brand-600 m-0">Youth Pastor</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="h-16 w-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl">EW</div>
                <div>
                  <h4 className="font-semibold text-slate-900 m-0">Emily White</h4>
                  <p className="text-sm text-brand-600 m-0">Worship Leader</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
