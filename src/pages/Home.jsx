import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MissionVisionSection from "../components/home/MissionVisionSection";
import FeaturedInnovationsSection from "../components/home/FeaturedInnovationsSection";
import ImpactStatsSection from "../components/home/ImpactStatsSection";
import ProgramsOverviewSection from "../components/home/ProgramsOverviewSection";
import CallToActionBanner from "../components/home/CallToActionBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionVisionSection />
      <FeaturedInnovationsSection />
      <ImpactStatsSection />
      <ProgramsOverviewSection />
      <CallToActionBanner />
      <Footer />
    </>
  );
}
