import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start sm:items-center overflow-x-hidden bg-gradient-to-br from-primary via-blue-700 to-blue-900">
      {/* Hero image: cover whole section on all screen sizes */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden
      />
      {/* Faded overlay where the text sits — keeps text readable on all screens */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(37, 99, 235, 0.92) 0%, rgba(30, 64, 175, 0.5) 40%, transparent 70%)",
        }}
        aria-hidden
      />
      {/* Subtle tech background pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full pt-[9rem] pb-1 sm:pt-20 sm:pb-10 lg:pt-28 lg:pb-16">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug">
            Empowering youth innovators.
          </h1>
          <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-blue-100">
            Science and technology for community development.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-wrap gap-4">
            <Link
              to="/get-involved"
              className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Get involved
            </Link>
            <a
              href="#smart-incubator"
              className="px-6 py-3 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition inline-block"
            >
              Explore projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
