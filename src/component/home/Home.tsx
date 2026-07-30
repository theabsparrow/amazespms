import Hero from "./Hero";
import AboutUsSection from "./AboutUsSection";
import WhyChooseUs from "./WhyChooseUs";
import ContactSection from "./ContactSection";
import ServiceSection from "./ServiceSection";

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. ROBUST HERO SLIDER & TRUSTED PARTNERS MARQUEE */}
      <Hero />

      {/* 2. ABOUT US SECTION */}
      <AboutUsSection />

      {/* 3. CORE SERVICES GRID */}
      <ServiceSection />

      {/* 5. WHY CHOOSE US SECTION */}
      <WhyChooseUs />

      {/* 6. CONTACT SECTION (Placed directly before Footer) */}
      <ContactSection />

      {/* Reusable Service Modal */}
    </div>
  );
}
