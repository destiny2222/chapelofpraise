export default function Donate() {
  const givingCategories = [
    { name: "Tithe", description: "The biblical standard of giving 10% of our income." },
    { name: "Offering", description: "Free-will gifts given above and beyond the tithe." },
    { name: "Building Fund", description: "Contributions towards our facility expansion and maintenance." },
    { name: "Missions", description: "Supporting local and global outreach initiatives." }
  ];

  return (
    <div className="bg-white py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-serif">Giving & Donations</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Your generosity helps us continue our mission of transforming lives and spreading the Gospel. 
            Thank you for partnering with us.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Online Giving */}
          <div className="bg-brand-50 p-8 sm:p-10 rounded-3xl border border-brand-100">
            <h3 className="text-2xl font-bold text-slate-900 font-serif mb-6">Give Online</h3>
            <p className="text-slate-600 mb-8">
              Securely give online using your credit/debit card. You can choose to set up a one-time gift or a recurring donation.
            </p>
            
            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-slate-900">Giving Categories:</h4>
              <ul className="space-y-3">
                {givingCategories.map(cat => (
                  <li key={cat.name} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-slate-900">{cat.name}:</strong> {cat.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full rounded-md bg-green-500 px-3.5 py-3 text-center text-lg font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
              Proceed to Online Giving Gateway
            </button>
          </div>

          {/* Bank Transfer */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 font-serif mb-6">Bank Transfer</h3>
            <p className="text-slate-600 mb-8">
              You can transfer directly to our church bank accounts. Please specify your giving category in the transfer description.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Primary Account (Tithe & Offering)</h4>
                <dl className="space-y-1 text-sm">
                  <div className="flex justify-between"><dt className="text-slate-500">Bank Name:</dt><dd className="font-medium text-slate-900">Grace City Bank</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500">Account Name:</dt><dd className="font-medium text-slate-900">Chapel of Praise</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500">Account Number:</dt><dd className="font-medium text-slate-900">1234567890</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500">Routing Number:</dt><dd className="font-medium text-slate-900">098765432</dd></div>
                </dl>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Projects Account (Building & Missions)</h4>
                <dl className="space-y-1 text-sm">
                  <div className="flex justify-between"><dt className="text-slate-500">Bank Name:</dt><dd className="font-medium text-slate-900">Grace City Bank</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500">Account Name:</dt><dd className="font-medium text-slate-900">Chapel of Praise Projects</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500">Account Number:</dt><dd className="font-medium text-slate-900">0987654321</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500">Routing Number:</dt><dd className="font-medium text-slate-900">098765432</dd></div>
                </dl>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
