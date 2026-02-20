import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UpcomingEventsBanner from "../components/home/UpcomingEventsBanner";
import Footer from "../components/Footer";
import MissionVisionSection from "../components/home/MissionVisionSection";
import FeaturedInnovationsSection from "../components/home/FeaturedInnovationsSection";
import ImpactStatsSection from "../components/home/ImpactStatsSection";
import ProgramsOverviewSection from "../components/home/ProgramsOverviewSection";
import CallToActionBanner from "../components/home/CallToActionBanner";
import YouthTestimoniesSection from "../components/home/YouthTestimoniesSection";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#smart-incubator" || hash === "#our-events" || hash === "#testimonies") {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <Hero />
      <UpcomingEventsBanner />
      <MissionVisionSection />
      <FeaturedInnovationsSection />
      <ImpactStatsSection />
      <YouthTestimoniesSection />
      <ProgramsOverviewSection />
      <CallToActionBanner />
      <Footer />
    </>
  );
}
