import { Link } from "react-router-dom";
import { events } from "../../data/events";

export default function ProgramsOverviewSection() {
  return (
    <section id="our-events" className="py-16 sm:py-20 bg-light-gray scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-4">
          Our Events
        </h2>
        <p className="text-gray text-center max-w-2xl mx-auto mb-10">
          Highlights from our community and partnership activities.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(0, 3).map((ev) => (
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
                <h3 className="text-lg font-bold text-black group-hover:text-primary transition line-clamp-3">
                  {ev.title}
                </h3>
                <span className="inline-block mt-3 text-primary font-semibold text-sm">
                  See more →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link to="/events" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            View our events
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </p>
      </div>
    </section>
  );
}
