"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Wind,
  Droplets,
  Users,
  CheckCircle2,
  Sliders,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Hero from "./Hero";
import AboutUsSection from "./AboutUsSection";
import WhyChooseUs from "./WhyChooseUs";
import ContactSection from "./ContactSection";
import ServiceModal from "@/component/shared/ServiceModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState("HVAC & Climate Control");

  // SLA Calculator State
  const [facilityType, setFacilityType] = useState("Commercial Tower");
  const [areaSize, setAreaSize] = useState(50000);
  const [serviceScope, setServiceScope] = useState("Comprehensive (Hard & Soft Services)");

  const openServiceModal = (serviceName: string) => {
    setModalDefaultService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* 1. ROBUST HERO SLIDER & TRUSTED PARTNERS MARQUEE */}
      <Hero />

      {/* 2. ABOUT US SECTION */}
      <AboutUsSection />

      {/* 3. CORE SERVICES GRID WITH FRAMER REVEALS */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Comprehensive Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            End-to-End Property & Service Management
          </h2>
          <p className="text-emerald-100/70 text-sm sm:text-base">
            From heavy electromechanical maintenance to soft janitorial services and technical workforce recruitment, we keep your property operating at peak efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: HVAC & Chillers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-6 rounded-2xl transition-all group shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition">
              HVAC & Chillers
            </h3>
            <p className="text-emerald-100/70 text-xs leading-relaxed mb-4">
              Preventative and corrective maintenance for chillers, AHUs, FCUs, cooling towers, and IoT intelligent thermostat controls.
            </p>
            <ul className="space-y-2 mb-6 text-xs text-emerald-100/80">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>24/7 Temperature & Air Flow Balancing</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Refrigerant Leak Diagnostics & Overhauls</span>
              </li>
            </ul>
            <button
              onClick={() => openServiceModal("HVAC & Climate Control")}
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 cursor-pointer"
            >
              <span>Request HVAC Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Card 2: Electrical Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-6 rounded-2xl transition-all group shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition">
              Electrical & Power
            </h3>
            <p className="text-emerald-100/70 text-xs leading-relaxed mb-4">
              High & low voltage switchgear, transformer maintenance, UPS backup systems, diesel generator servicing, and thermal imaging.
            </p>
            <ul className="space-y-2 mb-6 text-xs text-emerald-100/80">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Switchgear & Breaker Audit</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Emergency Backup Generator Testing</span>
              </li>
            </ul>
            <button
              onClick={() => openServiceModal("Electrical & Power Maintenance")}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center space-x-1 cursor-pointer"
            >
              <span>Request Electrical Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Card 3: Plumbing & Water */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-6 rounded-2xl transition-all group shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-5 group-hover:scale-110 transition">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition">
              Plumbing & Water Tech
            </h3>
            <p className="text-emerald-100/70 text-xs leading-relaxed mb-4">
              Pumping station maintenance, water tank sanitization, greywater recycling, hydro-jetting drain lines, and leak detection.
            </p>
            <ul className="space-y-2 mb-6 text-xs text-emerald-100/80">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Booster & Transfer Pump Servicing</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Acoustic Pipe Leak Detection</span>
              </li>
            </ul>
            <button
              onClick={() => openServiceModal("Plumbing & Sanitation Systems")}
              className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center space-x-1 cursor-pointer"
            >
              <span>Request Plumbing Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Card 4: Soft Services & Janitorial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-6 rounded-2xl transition-all group shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition">
              Janitorial & Soft Services
            </h3>
            <p className="text-emerald-100/70 text-xs leading-relaxed mb-4">
              Commercial deep cleaning, high-rise facade window washing, marble polishing, pest control, and landscaping upkeep.
            </p>
            <ul className="space-y-2 mb-6 text-xs text-emerald-100/80">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Daily Commercial Soft Cleaning</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Rope Access Facade Cleaning</span>
              </li>
            </ul>
            <button
              onClick={() => openServiceModal("Janitorial & Deep Soft Cleaning")}
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 cursor-pointer"
            >
              <span>Request Soft Cleaning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Card 5: Security & Access Control */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-6 rounded-2xl transition-all group shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-5 group-hover:scale-110 transition">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition">
              Security & Access Control
            </h3>
            <p className="text-emerald-100/70 text-xs leading-relaxed mb-4">
              CCTV surveillance management, biometric access control systems, visitor gate barriers, and 24/7 security guard staffing.
            </p>
            <ul className="space-y-2 mb-6 text-xs text-emerald-100/80">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Biometric & RFID Access Integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>AI Video Analytics Monitoring</span>
              </li>
            </ul>
            <button
              onClick={() => openServiceModal("Security & Access Control")}
              className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center space-x-1 cursor-pointer"
            >
              <span>Request Security Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Card 6: Technical Workforce Recruitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.36 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-6 rounded-2xl transition-all group border border-emerald-500/30 shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition">
              Technical Workforce Recruitment
            </h3>
            <p className="text-emerald-100/70 text-xs leading-relaxed mb-4">
              Overseas and domestic recruitment of certified MEP technicians, HVAC engineers, facility supervisors, and safety officers.
            </p>
            <ul className="space-y-2 mb-6 text-xs text-emerald-100/80">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Rigorous Practical Skill Testing</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Complete Visa & Onboarding Handling</span>
              </li>
            </ul>
            <Link
              href="/recruitment"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1"
            >
              <span>Explore Recruitment Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 4. INTERACTIVE SLA ESTIMATOR WITH ANIMATED CALCULATION */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="p-8 sm:p-10 rounded-3xl bg-emerald-950/80 border border-emerald-500/20 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <Sliders className="w-3.5 h-3.5" />
                <span>Interactive Cost & Response Estimator</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white">
                Customize Your Property Service Plan
              </h3>
              <p className="text-emerald-100/70 text-xs sm:text-sm leading-relaxed">
                Select your facility size and service scope to estimate response time guarantees, dispatch coverage, and AMC plan recommendation.
              </p>
              <div className="pt-2 space-y-2">
                <div className="flex items-center space-x-2 text-xs text-emerald-100/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dedicated On-Site Technical Supervisor</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-emerald-100/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Computer-Aided Facility Management (CAFM) App</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-emerald-100/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero Penalties SLA Commitment Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-emerald-500/20 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-emerald-100 mb-2">
                    Facility Type
                  </label>
                  <select
                    value={facilityType}
                    onChange={(e) => setFacilityType(e.target.value)}
                    className="w-full bg-emerald-950/90 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                  >
                    <option>Commercial Tower</option>
                    <option>Shopping Mall / Retail Center</option>
                    <option>Luxury Residential Complex</option>
                    <option>Healthcare & Hospital Facility</option>
                    <option>Industrial Logistics Hub</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-emerald-100 mb-2">
                    Area Size: <span className="text-emerald-400 font-bold">{areaSize.toLocaleString()} sq.ft.</span>
                  </label>
                  <input
                    type="range"
                    min={10000}
                    max={500000}
                    step={10000}
                    value={areaSize}
                    onChange={(e) => setAreaSize(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer mt-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100 mb-2">
                  Service Scope Level
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {["Hard Services (MEP Only)", "Soft Services (Cleaning)", "Comprehensive (Hard & Soft Services)"].map(
                    (scope) => (
                      <button
                        key={scope}
                        type="button"
                        onClick={() => setServiceScope(scope)}
                        className={`p-2.5 rounded-xl text-xs font-medium border text-center transition ${
                          serviceScope === scope
                            ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                            : "bg-emerald-950/40 border-emerald-500/15 text-emerald-200/60 hover:text-emerald-100"
                        }`}
                      >
                        {scope.split(" ")[0]} {scope.split(" ")[1]}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Calculated Summary Box */}
              <motion.div
                layout
                className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-4"
              >
                <div>
                  <div className="text-[11px] text-emerald-200/60 uppercase tracking-wider">
                    Recommended SLA Package
                  </div>
                  <div className="text-base font-bold text-white">
                    Amaze Enterprise {areaSize > 150000 ? "Gold Platinum" : "Gold AMC"}
                  </div>
                  <div className="text-xs text-emerald-400 font-mono">
                    Guaranteed Dispatch &lt; {areaSize > 150000 ? "15 Mins" : "30 Mins"}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openServiceModal(`AMC Proposal - ${facilityType}`)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition cursor-pointer shadow-md"
                >
                  Get Full Proposal
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. WHY CHOOSE US SECTION */}
      <WhyChooseUs />

      {/* 6. CONTACT SECTION (Placed directly before Footer) */}
      <ContactSection />

      {/* Reusable Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={modalDefaultService}
      />
    </div>
  );
}
