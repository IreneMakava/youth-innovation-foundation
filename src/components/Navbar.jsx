import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logoBlue from "../assets/logo1.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Innovations", href: "/innovations" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Events", href: "/#our-events" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={isScrolled ? logo : logoBlue}
            alt="Youth Innovation Foundation"
            className={`h-12 w-[180px] sm:h-16 sm:w-[240px] lg:h-20 lg:w-[320px] object-contain object-left ${isScrolled ? "[mix-blend-mode:multiply] dark:[mix-blend-mode:screen]" : ""}`}
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-black">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                to={href}
                className={`transition hover:text-primary ${isScrolled ? "text-gray" : "text-white/90 hover:text-white"}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            className={`text-sm font-semibold transition ${isScrolled ? "text-gray hover:text-primary" : "text-white/90 hover:text-white"}`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`text-sm font-semibold transition ${isScrolled ? "text-gray hover:text-primary" : "text-white/90 hover:text-white"}`}
          >
            Register
          </Link>
          <Link
            to="/get-involved"
            className="px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition shadow-sm"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="block py-2 text-gray font-medium hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/login" className="block py-2 text-gray font-medium hover:text-primary" onClick={() => setMobileOpen(false)}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="block py-2 text-gray font-medium hover:text-primary" onClick={() => setMobileOpen(false)}>
                Register
              </Link>
            </li>
            <li className="pt-2">
              <Link
                to="/get-involved"
                className="block w-full text-center py-3 bg-accent text-white font-semibold rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
