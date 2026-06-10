"use client";

import { useState } from "react";
import SermonCard from "../../components/SermonCard";

// Mock data for MVP
const allSermons = [
  {
    id: "1",
    title: "Walking in Faith",
    preacher: "Pastor John Doe",
    date: "2026-06-07T10:00:00Z",
    excerpt: "Discover what it means to truly walk by faith and not by sight in this challenging modern world.",
    link: "https://youtube.com",
  },
  {
    id: "2",
    title: "The Power of Grace",
    preacher: "Rev. Sarah Smith",
    date: "2026-05-31T10:00:00Z",
    excerpt: "An exploration of God's unmerited favor and how it transforms our daily lives.",
    link: "https://youtube.com",
  },
  {
    id: "3",
    title: "Building Strong Foundations",
    preacher: "Pastor John Doe",
    date: "2026-05-24T10:00:00Z",
    excerpt: "Learn how to build your life on the solid rock of Christ so you can withstand the storms.",
    link: "https://youtube.com",
  },
  {
    id: "4",
    title: "Joy Unspeakable",
    preacher: "Michael Jones",
    date: "2026-05-17T10:00:00Z",
    excerpt: "A message about finding deep, sustaining joy even in the midst of trials.",
    link: "https://youtube.com",
  }
];

export default function Sermons() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSermons = allSermons.filter(sermon => 
    sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Sermon Archive</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Listen to past messages, study series, and guest speakers.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-xl">
          <div className="relative flex items-center">
            <label htmlFor="search" className="sr-only">Search sermons</label>
            <input
              type="text"
              name="search"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full rounded-full border-0 py-3 pl-6 pr-14 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
              placeholder="Search by title or speaker..."
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd className="inline-flex items-center rounded-full border border-slate-200 px-3 font-sans text-xs text-slate-400">
                Search
              </kbd>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredSermons.length > 0 ? (
            filteredSermons.map((sermon) => (
              <SermonCard key={sermon.id} {...sermon} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500 text-lg">No sermons found matching "{searchTerm}".</p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-4 text-brand-600 font-semibold hover:text-brand-800"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
