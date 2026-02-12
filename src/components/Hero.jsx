import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import bulbImage from "../assets/bulb.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-blue-900">
      {/* Subtle tech background pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Empowering youth innovators.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-blue-100">
              Science and technology for community development.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
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

          {/* Right: main image + bulb */}
          <div className="flex justify-center lg:justify-end items-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-xl lg:max-w-2xl flex items-end">
              {/* White circle for bulb in the corner */}
              <div className="absolute -right-8 -top-8 w-36 h-36 bg-white rounded-full shadow-xl flex items-center justify-center">
                <img
                  src={bulbImage}
                  alt="Innovation bulb"
                  className="w-20 h-20 object-contain"
                />
              </div>
              {/* Soft blue glow behind main image */}
              <div className="absolute right-6 bottom-0 w-64 h-64 bg-primary/40 rounded-full blur-3xl" />
              <img
                src={heroImage}
                alt="Youth innovators building solutions for community development"
                className="relative w-full h-auto object-contain lg:-mb-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
