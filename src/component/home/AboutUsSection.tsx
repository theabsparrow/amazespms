"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    id: "vision",
    label: "Our Vision",
    icon: Eye,
    title: "Redefining Property & Facility Intelligence",
    description: "To be the premier multi-national property management and technical services provider by fusing IoT telemetry, skilled engineering, and environmental stewardship.",
    highlights: [
      "100% Digital CAFM Work Order Traceability",
      "Net-Zero Carbon Building Operations Strategy",
      "Predictive AI Maintenance vs Reactive Breakdowns",
    ],
  },
  {
    id: "mission",
    label: "Our Mission",
    icon: Target,
    title: "Delivering Uncompromised Uptime & Value",
    description: "Empowering property owners, facility directors, and tenants through 24/7 technical dispatch, transparent SLA guarantees, and certified workforce recruitment.",
    highlights: [
      "Sub-15 Minute Emergency Dispatch SLA",
      "ISO 9001 & ISO 45001 Quality & Safety Framework",
      "Custom AMC Plans Tailored to Every Asset Class",
    ],
  },
  {
    id: "values",
    label: "Core Values",
    icon: Award,
    title: "Engineering Excellence & Safety First",
    description: "Our culture is rooted in rigorous technical standards, zero-tolerance safety protocols, continuous engineer training, and unyielding client accountability.",
    highlights: [
      "Continuous Skill Certification & Safety Audits",
      "100% Transparent Financial & Energy Reporting",
      "Client-Centric Rapid Response Culture",
    ],
  },
];

const stats = [
  { number: "12+", label: "Years Operational Supremacy" },
  { number: "1,200+", label: "Managed Enterprise Facilities" },
  { number: "500+", label: "Certified MEP Engineers" },
  { number: "99.8%", label: "SLA Response Guarantee" },
];

export default function AboutUsSection() {
  const [activeTab, setActiveTab] = useState("vision");
  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const PillarIcon = currentPillar.icon;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14 space-y-3"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>About Amaze PMS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Pioneering Smart <span className="text-gradient-emerald">Property Operations</span>
        </h2>
        <p className="text-emerald-100/70 text-sm sm:text-base">
          Over a decade of engineered reliability. We safeguard multi-billion dollar real estate assets through 24/7 technical dispatch and IoT facility automation.
        </p>
      </motion.div>

      {/* Main Grid: Interactive Tab Container & Interactive Console Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        {/* Left Column: Interactive Pillar Navigation */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Strategic Pillars
            </span>
            <div className="space-y-2.5">
              {pillars.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className="relative w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="aboutUsTabActive"
                        className="absolute inset-0 bg-emerald-950/90 border-2 border-emerald-400 rounded-2xl shadow-lg shadow-emerald-500/20"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center space-x-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
                          isActive
                            ? "bg-emerald-400 text-slate-950 font-bold shadow-md"
                            : "bg-emerald-500/10 text-emerald-400"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`font-bold text-sm ${isActive ? "text-white" : "text-emerald-200/70"}`}>
                        {item.label}
                      </span>
                    </div>
                    <ArrowRight
                      className={`relative z-10 w-4 h-4 transition-transform ${
                        isActive ? "translate-x-1 text-emerald-400" : "text-emerald-500/40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Learn More Link Pill */}
          <div className="pt-4">
            <Link
              href="/about-us"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-semibold text-xs transition group"
            >
              <span>Read Our Full Corporate Legacy</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Dynamic Content Box with AnimatePresence */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/25 h-full flex flex-col justify-between relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id}
                initial={{ opacity: 0, x: 25, filter: "blur(2px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -25, filter: "blur(2px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6 relative z-10"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <PillarIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                      {currentPillar.label} Overview
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-0.5">
                      {currentPillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
                  {currentPillar.description}
                </p>

                <div className="pt-2 border-t border-emerald-500/20 space-y-3">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Core Operations Focus:
                  </div>
                  <ul className="space-y-2.5 text-xs text-emerald-100/90">
                    {currentPillar.highlights.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom ISO Badges Inside Box */}
            <div className="pt-6 mt-6 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center space-x-2 text-emerald-300 font-medium">
                <Award className="w-4 h-4 text-amber-400" />
                <span>ISO 9001:2015 Quality Management Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISO 45001 Occupational Safety Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* STATS COUNTER GRID WITH STAGGERED REVEAL & SPRING HOVER */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((st, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6, scale: 1.03, borderColor: "rgba(52, 211, 153, 0.5)" }}
            className="glass-card p-6 rounded-2xl border border-emerald-500/20 text-center space-y-1 transition-all"
          >
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
              {st.number}
            </div>
            <div className="text-xs text-emerald-100/70 font-semibold">
              {st.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
