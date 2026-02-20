import { Link } from "react-router-dom";

export default function UpcomingEventsBanner() {
  return (
    <section className="bg-primary py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-white">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold">Upcoming events</h2>
            <p className="text-blue-100 text-sm sm:text-base">Upcoming events — see details below.</p>
          </div>
        </div>
        <Link
          to="/events#upcoming"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition shadow-sm flex-shrink-0"
        >
          See upcoming events
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
