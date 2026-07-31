"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  Sparkles,
  Star,
  Quote,
  TrendingUp,
  Award,
  ArrowRight,
  Search,
} from "lucide-react";
import Link from "next/link";

const sectors = [
  "All",
  "Commercial Towers",
  "Shopping Malls",
  "Luxury Residential",
  "Healthcare & Hospitals",
  "Industrial Logistics",
];

const clientCaseStudies = [
  {
    id: 1,
    name: "Apex Financial Towers",
    sector: "Commercial Towers",
    logo: "🏢",
    sqft: "3.2 Million sq.ft.",
    challenge: "High energy consumption and frequent chiller downtime during peak summer months.",
    solution: "Deployed 24/7 IoT temperature balancing & automated VFD chiller overhauls.",
    result: "-28% Energy Bills & 99.9% Uptime",
    quote: "Amaze PMS transformed our property's energy efficiency and eliminated emergency HVAC breakdowns completely.",
    author: "Robert Sterling, Managing Director of Property",
  },
  {
    id: 2,
    name: "HealthPlus Medical City",
    sector: "Healthcare & Hospitals",
    logo: "🏥",
    sqft: "1.8 Million sq.ft.",
    challenge: "Strict medical sanitization requirements and zero tolerance for power interruptions.",
    solution: "Stationed dedicated on-site MEP team with dual-backup generator load synchronization.",
    result: "100% Power Uptime & Zero Penalties",
    quote: "In a hospital environment, downtime is unacceptable. Amaze PMS provides flawless technical execution around the clock.",
    author: "Dr. Sarah Jenkins, Operations Director",
  },
  {
    id: 3,
    name: "Grand Central Plaza",
    sector: "Shopping Malls",
    logo: "🏬",
    sqft: "2.5 Million sq.ft.",
    challenge: "High foot traffic causing frequent elevator and soft janitorial issues.",
    solution: "Integrated mobile CAFM ticket portal with rapid 15-minute technician dispatch.",
    result: "99.4% Tenant & Visitor Satisfaction",
    quote: "Their rapid response team handles any issue before our retail tenants even notice.",
    author: "David Vance, Asset Manager",
  },
  {
    id: 4,
    name: "Horizon Luxury Residences",
    sector: "Luxury Residential",
    logo: "🏙️",
    sqft: "1.2 Million sq.ft.",
    challenge: "Demanding high-net-worth resident requests requiring personalized 24/7 helpdesk.",
    solution: "Customized tenant app integration for instant plumbing, electrical, and deep cleaning bookings.",
    result: "98.9% Annual AMC Renewal Rate",
    quote: "Resident satisfaction has reached an all-time high since Amaze PMS took over full facility operations.",
    author: "Claire Dupont, HOA Board President",
  },
  {
    id: 5,
    name: "Metro Logistics Hub",
    sector: "Industrial Logistics",
    logo: "🏭",
    sqft: "4.5 Million sq.ft.",
    challenge: "Massive industrial warehouse space needing fire suppression audits and heavy pump maintenance.",
    solution: "Implemented acoustic pipe leak detection and quarterly high-voltage breaker testing.",
    result: "Zero Fire & Safety Hazards Logged",
    quote: "Their technical rigor and ISO safety compliance give our industrial tenants complete confidence.",
    author: "Michael Thorne, Facility Logistics Lead",
  },
];

export default function OurClients() {
  const [activeSector, setActiveSector] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = clientCaseStudies.filter((client) => {
    const matchesSector = activeSector === "All" || client.sector === activeSector;
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.result.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  return (
    <div className="py-12 space-y-24 relative z-10 overflow-hidden">
      {/* Background Ambient Glow */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Header Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Client Portfolio & Case Studies</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          Trusted By Industry <span className="text-gradient-emerald">Leaders & Portfolios</span>
        </h1>
        <p className="text-emerald-100/70 text-sm sm:text-base max-w-3xl mx-auto">
          Over 1,200 commercial, residential, healthcare, and industrial properties trust Amaze PMS for 24/7 technical dispatch and zero downtime facility operations.
        </p>
      </motion.section>

      {/* Sector Filter Tabs & Search Bar */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-card border border-emerald-500/25 shadow-xl">
          {/* Sector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {sectors.map((sec) => {
              const isActive = activeSector === sec;
              return (
                <button
                  key={sec}
                  onClick={() => setActiveSector(sec)}
                  className="relative px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer"
                >
                  {isActive && (
                    <motion.div
                      layoutId="clientTabPill"
                      className="absolute inset-0 bg-emerald-400 text-slate-950 rounded-xl shadow-md shadow-emerald-400/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive ? "text-slate-950 font-bold" : "text-emerald-100/80 hover:text-white"
                    }`}
                  >
                    {sec}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search property or metric..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl pl-10 pr-4 py-2 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
            />
          </div>
        </div>
      </motion.section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, borderColor: "rgba(52, 211, 153, 0.5)" }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 flex flex-col justify-between space-y-6 shadow-xl transition-all"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{client.logo}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{client.name}</h3>
                        <span className="text-[11px] text-emerald-400 font-semibold">{client.sector}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono bg-emerald-950/90 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 font-bold">
                      {client.sqft}
                    </span>
                  </div>

                  {/* Problem vs Solution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                    <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/15 space-y-1">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Operational Challenge</span>
                      <p className="text-emerald-100/70">{client.challenge}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/15 space-y-1">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Amaze PMS Solution</span>
                      <p className="text-emerald-100/70">{client.solution}</p>
                    </div>
                  </div>

                  {/* Outcome Metric Box */}
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Proven Outcome:</span>
                    <span className="text-xs font-black text-emerald-300 font-mono flex items-center space-x-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400 inline mr-1" />
                      {client.result}
                    </span>
                  </div>

                  {/* Quote Block */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/15 space-y-2 relative">
                    <Quote className="w-5 h-5 text-emerald-400/40 absolute right-3 top-3" />
                    <p className="text-xs italic text-emerald-100/90 leading-relaxed">
                      "{client.quote}"
                    </p>
                    <div className="text-[11px] font-semibold text-emerald-400 font-mono pt-1">
                      — {client.author}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-emerald-500/15">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                    <span className="text-white font-bold ml-1">5.0 SLA Rating</span>
                  </div>
                  <span className="text-emerald-400/70 text-[11px]">ISO 9001 Audited</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Trust Statistics Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Join 1,200+ Enterprise Property Portfolios</h3>
            <p className="text-emerald-100/70 text-xs sm:text-sm max-w-xl">
              Elevate your property's operational standards with guaranteed 15-minute emergency SLAs and smart CAFM monitoring.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="px-6 py-3.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition cursor-pointer shrink-0 shadow-lg flex items-center space-x-2"
          >
            <span>Partner With Amaze PMS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}