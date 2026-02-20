import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { events, upcomingEvents } from "../data/events";

export default function Events() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("our-events");

  useEffect(() => {
    if (location.hash === "#upcoming") {
      setActiveTab("upcoming");
      const el = document.getElementById("upcoming");
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [location.hash]);

  return (
    <Layout title="Events">
      <Link to="/#our-events" className="inline-block text-sm font-semibold text-primary hover:underline mb-6">
        ← Back to home
      </Link>

      <div className="flex border-b border-gray-200 mb-8">
        <button
          type="button"
          onClick={() => setActiveTab("our-events")}
          className={`px-6 py-3 font-semibold text-sm border-b-2 transition ${
            activeTab === "our-events"
              ? "border-primary text-primary"
              : "border-transparent text-gray-500 hover:text-black"
          }`}
        >
          Our events
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("upcoming")}
          className={`px-6 py-3 font-semibold text-sm border-b-2 transition ${
            activeTab === "upcoming"
              ? "border-primary text-primary"
              : "border-transparent text-gray-500 hover:text-black"
          }`}
        >
          Upcoming events
        </button>
      </div>

      <p className="text-gray leading-relaxed mb-10">
        {activeTab === "our-events"
          ? "Highlights from our community and partnership activities."
          : "Events coming up — join us at our next activities."}
      </p>

      {activeTab === "our-events" ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((ev) => (
            <Link
              key={ev.slug}
              to={`/events/${ev.slug}`}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition group"
            >
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                {ev.coverImage ? (
                  <img
                    src={ev.coverImage}
                    alt=""
                    className="w-full h-full object-cover group-hover:opacity-95 transition"
                  />
                ) : (
                  <span className="text-gray-400 text-sm font-medium">Event</span>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs text-primary font-semibold mb-1">{ev.date}</p>
                <h2 className="text-lg font-bold text-black group-hover:text-primary transition line-clamp-3">
                  {ev.title}
                </h2>
                <span className="inline-block mt-3 text-primary font-semibold text-sm">
                  See more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div id="upcoming">
          {upcomingEvents.length === 0 ? (
            <div className="bg-light-gray rounded-xl border border-gray-100 p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Stay tuned</h3>
              <p className="text-gray max-w-md mx-auto">
                New events will be listed here. Check back later or follow us for announcements.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((ev) => (
                <Link
                  key={ev.slug}
                  to={`/events/${ev.slug}`}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition group"
                >
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    {ev.coverImage ? (
                      <img src={ev.coverImage} alt="" className="w-full h-full object-cover group-hover:opacity-95 transition" />
                    ) : (
                      <span className="text-gray-400 text-sm font-medium">Event</span>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-primary font-semibold mb-1">{ev.date}</p>
                    <h2 className="text-lg font-bold text-black group-hover:text-primary transition line-clamp-3">
                      {ev.title}
                    </h2>
                    <span className="inline-block mt-3 text-primary font-semibold text-sm">See more →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </Layout>
  );
}
