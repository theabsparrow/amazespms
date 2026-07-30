"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Wind,
  Users,
  Activity,
  ArrowRight,
  Building2,
  Award,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

// Hero Slider Data
const heroSlides = [
  {
    id: 1,
    badge: "Next-Gen Facility Operations",
    badgeIcon: Sparkles,
    title: "Intelligent Property Management & Technical Dispatch",
    description: "Integrating 24/7 smart command centers, IoT electromechanical telemetry, HVAC engineering, and soft janitorial services to maximize property uptime.",
    statNumber: "14.8 Min",
    statLabel: "Avg Emergency Dispatch SLA",
    secondaryStat: "99.8%",
    secondaryLabel: "Equipment Uptime",
    accentColor: "from-emerald-500 via-teal-400 to-emerald-300",
    glowColor: "rgba(16, 185, 129, 0.25)",
  },
  {
    id: 2,
    badge: "Energy & Climate Optimization",
    badgeIcon: Wind,
    title: "Predictive HVAC Control & Energy Reduction",
    description: "Lower monthly utility costs by up to 28% with automated chiller balancing, vibration sensor analytics, and real-time power telemetry.",
    statNumber: "-28%",
    statLabel: "Average Energy Overhead",
    secondaryStat: "1,200+",
    secondaryLabel: "Managed Facilities",
    accentColor: "from-teal-400 via-emerald-400 to-cyan-400",
    glowColor: "rgba(13, 148, 136, 0.25)",
  },
  {
    id: 3,
    badge: "Workforce Recruitment Portal",
    badgeIcon: Users,
    title: "Certified Technical Talent & Manpower Solutions",
    description: "Sourcing, testing, and deploying certified MEP technicians, HVAC engineers, and facility supervisors with complete onboarding management.",
    statNumber: "500+",
    statLabel: "Certified Engineers Deployed",
    secondaryStat: "100%",
    secondaryLabel: "Compliance & Safety",
    accentColor: "from-emerald-400 via-green-300 to-teal-300",
    glowColor: "rgba(52, 211, 153, 0.25)",
  },
  {
    id: 4,
    badge: "SLA Guaranteed Maintenance",
    badgeIcon: ShieldCheck,
    title: "24/7 Command Center & Zero Downtime AMC",
    description: "Structured Annual Maintenance Contracts engineered for commercial high-rises, healthcare hubs, luxury residential towers, and retail centers.",
    statNumber: "24/7",
    statLabel: "Active Monitoring Desk",
    secondaryStat: "ISO 9001",
    secondaryLabel: "Quality Standard",
    accentColor: "from-teal-300 via-emerald-400 to-green-400",
    glowColor: "rgba(16, 185, 129, 0.25)",
  },
];

// Partner Brands Data
const partnerBrands = [
  { name: "Apex Financial Towers", type: "Commercial High-Rise", metric: "3.2M sq.ft Managed", logo: "🏢" },
  { name: "Metro Logistics Hub", type: "Industrial Center", metric: "Zero Downtime SLA", logo: "🏬" },
  { name: "HealthPlus Medical City", type: "Healthcare Center", metric: "100% HVAC Uptime", logo: "🏥" },
  { name: "Horizon Luxury Residences", type: "Residential Towers", metric: "24/7 Resident Helpdesk", logo: "🏙️" },
  { name: "Grand Central Plaza", type: "Shopping Mall", metric: "Energy Reduction -24%", logo: "🏬" },
  { name: "Cybertech Software Park", type: "Corporate Campus", metric: "IoT Telemetry Integration", logo: "🏢" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  // Auto-play slider effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const activeSlide = heroSlides[currentSlide];
  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <div className="relative overflow-hidden space-y-16 pt-6 pb-12">
      {/* Dynamic Ambient Background Light for Slider */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none"
      />

      {/* HERO SLIDER CONTAINER */}
      <section
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="relative min-h-[500px] sm:min-h-[460px] glass-card rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden border border-emerald-500/20 shadow-2xl">
          {/* Animated Background Mesh Accent */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSlide.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Text Content */}
              <div className="lg:col-span-8 space-y-6">
                {/* Badge Tag */}
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-sm">
                  <BadgeIcon className="w-4 h-4 text-emerald-400" />
                  <span>{activeSlide.badge}</span>
                </div>

                {/* Dynamic Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
                  {activeSlide.title.split(" & ")[0]} &{" "}
                  <span className="text-gradient-emerald">
                    {activeSlide.title.split(" & ")[1] || "Operations"}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {activeSlide.description}
                </p>

                {/* Metrics Pills */}
                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <div className="flex items-center space-x-3 bg-emerald-950/80 px-4 py-2.5 rounded-2xl border border-emerald-500/20">
                    <div className="text-2xl font-black text-emerald-400 font-mono">
                      {activeSlide.statNumber}
                    </div>
                    <div className="text-xs text-emerald-100/70 font-medium">
                      {activeSlide.statLabel}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-emerald-950/80 px-4 py-2.5 rounded-2xl border border-emerald-500/20">
                    <div className="text-2xl font-black text-white font-mono">
                      {activeSlide.secondaryStat}
                    </div>
                    <div className="text-xs text-emerald-100/70 font-medium">
                      {activeSlide.secondaryLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual Console Container */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="p-6 rounded-2xl bg-emerald-950/90 border border-emerald-500/30 space-y-4 shadow-xl relative">
                  <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center space-x-1.5">
                      <Activity className="w-4 h-4" />
                      <span>Live Status Monitor</span>
                    </span>
                    <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                      ONLINE
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/15">
                      <span className="text-emerald-100/80">Command Center Dispatch</span>
                      <span className="text-emerald-400 font-bold">100% Active</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/15">
                      <span className="text-emerald-100/80">IoT Sensors Connected</span>
                      <span className="text-emerald-400 font-bold font-mono">4,820 Nodes</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/15">
                      <span className="text-emerald-100/80">Field Engineers Live</span>
                      <span className="text-emerald-400 font-bold font-mono">148 Units</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-emerald-300/80">
                    <span>ISO 9001 & ISO 45001 Compliant</span>
                    <Award className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* SLIDER NAVIGATION CONTROLS */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-emerald-500/15 relative z-20">
            {/* Slide Indicator Dots */}
            <div className="flex items-center space-x-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setDirection(idx > currentSlide ? 1 : -1);
                    setCurrentSlide(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? "w-8 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-md shadow-emerald-400/50"
                      : "w-2.5 bg-emerald-900/60 hover:bg-emerald-700/60"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/20 text-emerald-300 hover:text-white transition cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/20 text-emerald-300 hover:text-white transition cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNERS SECTION (Continuous Slided Marquee) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
        <div className="text-center space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
            Enterprise Client Network
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Trusted By Leading Commercial & Healthcare Portfolios
          </h3>
        </div>

        {/* Marquee Infinite Slider Container */}
        <div className="relative overflow-hidden py-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/15">
          {/* Gradient Blur Fades on Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center space-x-6 w-max"
          >
            {/* Duplicated list for seamless infinite loop */}
            {[...partnerBrands, ...partnerBrands].map((partner, idx) => (
              <div
                key={idx}
                className="glass-card px-5 py-3 rounded-xl flex items-center space-x-3 shrink-0 border border-emerald-500/15 hover:border-emerald-400/40 transition group cursor-default"
              >
                <span className="text-2xl">{partner.logo}</span>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition">
                    {partner.name}
                  </div>
                  <div className="text-[10px] text-emerald-100/60 font-mono">
                    {partner.metric}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
