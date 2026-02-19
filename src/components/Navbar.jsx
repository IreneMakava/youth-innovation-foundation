import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Innovations", href: "/innovations" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Events", href: "/#our-events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top strip: logo + title + tagline */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 sm:py-2 flex items-center justify-between gap-2 sm:gap-4">
          <Link to="/" className="shrink-0">
            <img src={logo} alt="Youth Innovation Foundation" className="h-10 w-[180px] sm:h-16 sm:w-[360px] lg:h-20 lg:w-[420px] object-contain object-left [mix-blend-mode:multiply]" />
          </Link>
          <div className="flex-1 text-center min-w-0 hidden sm:block">
            <p className="text-lg sm:text-xl font-bold text-black leading-tight">Youth Innovation Foundation</p>
            <p className="text-xs text-gray mt-0.5">Science and Technology Solutions for Community Development</p>
          </div>
          <div className="w-[180px] sm:w-[360px] lg:w-[420px] shrink-0 hidden sm:block" aria-hidden />
        </div>
        <div className="h-0.5 bg-accent w-full" role="presentation" />
      </div>

      {/* Nav bar: solid blue, white links */}
      <nav className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-1.5 sm:py-2">
          <ul className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm font-semibold text-white">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link to={href} className="hover:text-white/90 transition">{label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Link to="/login" className="text-sm font-semibold text-white hover:text-white/90 transition">Login</Link>
            <Link to="/register" className="text-sm font-semibold text-white hover:text-white/90 transition">Register</Link>
            <Link to="/get-involved" className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded hover:bg-red-700 transition">Apply Now</Link>
          </div>
          <button type="button" className="lg:hidden p-2 text-white" onClick={() => setMobileOpen((o) => !o)} aria-label="Menu">
            {mobileOpen ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map(({ label, href }) => (
              <li key={href}><Link to={href} className="block py-2 text-gray font-medium hover:text-primary" onClick={() => setMobileOpen(false)}>{label}</Link></li>
            ))}
            <li><Link to="/login" className="block py-2 text-gray font-medium hover:text-primary" onClick={() => setMobileOpen(false)}>Login</Link></li>
            <li><Link to="/register" className="block py-2 text-gray font-medium hover:text-primary" onClick={() => setMobileOpen(false)}>Register</Link></li>
            <li className="pt-2"><Link to="/get-involved" className="block w-full text-center py-3 bg-accent text-white font-semibold rounded-lg" onClick={() => setMobileOpen(false)}>Apply Now</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
