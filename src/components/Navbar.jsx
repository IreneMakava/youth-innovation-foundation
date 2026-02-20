import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Innovations", href: "/innovations" },
  { label: "Events", href: "/#our-events" },
  { label: "Testimonies", href: "/#testimonies" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top strip: logo | centered title + tagline | spacer (reference-style, compact) */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-0 flex items-center gap-2 sm:gap-2">
          <Link to="/" className="shrink-0 w-36 sm:w-[480px] lg:w-[600px] flex items-center" aria-label="Youth Innovation Foundation home">
            <img src={logo} alt="" className="h-24 sm:h-24 lg:h-32 w-full max-w-[200px] sm:max-w-[480px] lg:max-w-[600px] object-contain object-left [mix-blend-mode:multiply]" />
          </Link>
          <div className="flex-1 min-w-0 flex flex-col items-end sm:items-center justify-center text-right sm:text-center overflow-visible flex py-1">
            <p className="text-sm sm:text-xl lg:text-2xl font-bold text-black leading-tight whitespace-nowrap">Youth Innovation Foundation</p>
            <p className="text-[11px] sm:text-base text-gray mt-px leading-tight whitespace-nowrap">Science and Technology Solutions for Community Development</p>
          </div>
          <div className="hidden sm:block w-[340px] sm:w-[480px] lg:w-[600px] shrink-0" aria-hidden />
        </div>
        <div className="h-px bg-accent w-full" role="presentation" />
      </div>

      {/* Nav bar: solid blue, white links */}
      <nav className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-0">
          <ul className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm font-semibold text-white">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link to={href} className="hover:text-white/90 transition">{label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Link to="/login" className="text-sm font-semibold text-white hover:text-white/90 transition">Login</Link>
            <Link to="/register" className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded hover:bg-red-700 transition">Apply Now</Link>
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
            <li className="pt-2"><Link to="/register" className="block w-full text-center py-3 bg-accent text-white font-semibold rounded-lg" onClick={() => setMobileOpen(false)}>Apply Now</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
