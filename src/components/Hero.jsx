import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import bulbImage from "../assets/bulb.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start sm:items-center overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-blue-900">
      {/* Subtle tech background pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full pt-[7.25rem] pb-6 sm:pt-10 sm:pb-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left: copy */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
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

          {/* Right: woman + bulb — compact on small screens, full on lg */}
          <div className="flex justify-center lg:justify-end items-end lg:items-end mt-4 sm:mt-6 lg:mt-0">
            <div
              className="relative w-[200px] h-[160px] sm:w-[260px] sm:h-[200px] md:w-[320px] md:h-[240px] lg:w-full lg:max-w-xl lg:min-h-[380px] xl:min-h-[420px] bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              {/* Bulb: smaller on mobile, full size on lg */}
              <div className="absolute right-0 top-0 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-44 lg:h-44 xl:w-52 xl:h-52 bg-white rounded-full shadow-xl flex items-center justify-center p-1.5 sm:p-2 lg:p-4">
                <img
                  src={bulbImage}
                  alt="Innovation bulb"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Soft glow on desktop */}
              <div className="absolute right-6 bottom-0 w-64 h-64 bg-primary/40 rounded-full blur-3xl hidden lg:block" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
