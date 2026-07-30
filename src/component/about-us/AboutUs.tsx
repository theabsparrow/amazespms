"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Building2,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu,
  Globe2,
} from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    year: "2012",
    title: "Company Founding",
    description: "Established as an electromechanical maintenance & HVAC engineering contractor with 15 initial engineers.",
  },
  {
    year: "2016",
    title: "Smart Command Telemetry",
    description: "Launched our 24/7 central dispatch hub and integrated IoT sensors for real-time chiller telemetry.",
  },
  {
    year: "2020",
    title: "ISO 9001 & 45001 Certification",
    description: "Achieved international quality management and health & safety certifications across all operating regions.",
  },
  {
    year: "2024",
    title: "Technical Recruitment Division",
    description: "Expanded manpower recruitment operations to source, test, and deploy certified MEP talent regionally.",
  },
  {
    year: "2026",
    title: "AI-Powered Predictive PMS",
    description: "Managing over 1,200 commercial, residential, and healthcare properties with a 99.8% SLA compliance rate.",
  },
];

const leadershipTeam = [
  {
    name: "Alexander Mercer",
    role: "Chief Executive Officer & Founder",
    bio: "20+ years of executive real estate and electromechanical facility management experience.",
    expertise: "Property Operations Strategy, Asset Lifecycle Optimization",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Technology Officer",
    bio: "Former IoT systems architect specializing in predictive AI maintenance and smart building automation.",
    expertise: "IoT Sensors, CAFM Software Architecture, Predictive Analytics",
  },
  {
    name: "Marcus Vance",
    role: "Vice President of Field Operations",
    bio: "Oversees 500+ certified engineers and 24/7 emergency dispatch command operations.",
    expertise: "Rapid SLA Response, HVAC Engineering, ISO Safety Compliance",
  },
  {
    name: "Sophia Chen",
    role: "Director of Technical Recruitment",
    bio: "Heads global talent sourcing, trade testing, and workforce deployment for facility contracts.",
    expertise: "Global Manpower Recruitment, Skill Certification, Onboarding",
  },
];

export default function AboutUs() {
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
          <span>Corporate Legacy & Leadership</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          Engineering Reliability, <span className="text-gradient-emerald">Safeguarding Assets</span>
        </h1>
        <p className="text-emerald-100/70 text-sm sm:text-base max-w-3xl mx-auto">
          Over 12 years of operational excellence. Amaze PMS is the trusted facility management partner for multi-billion dollar commercial, residential, and healthcare real estate.
        </p>
      </motion.section>

      {/* Key Metric Highlights Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "12+", label: "Years Operational Supremacy" },
            { num: "1,200+", label: "Managed Properties" },
            { num: "500+", label: "Certified Engineers" },
            { num: "99.8%", label: "SLA Response Rate" },
          ].map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(52, 211, 153, 0.5)" }}
              className="glass-card p-6 rounded-2xl border border-emerald-500/20 text-center space-y-1 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                {st.num}
              </div>
              <div className="text-xs text-emerald-100/70 font-semibold">{st.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Corporate Mission & Vision Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl border border-emerald-500/25 space-y-5 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Corporate Vision</h3>
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
              To be the premier multi-national property management and technical services provider by fusing IoT telemetry, skilled engineering, and environmental stewardship across all managed assets.
            </p>
            <ul className="space-y-2 text-xs text-emerald-100/90 pt-2 border-t border-emerald-500/15">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Digital CAFM Work Order Traceability</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Predictive AI Maintenance vs Reactive Breakdowns</span>
              </li>
            </ul>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl border border-emerald-500/25 space-y-5 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
              Empowering property owners, facility directors, and tenants through 24/7 technical dispatch, transparent SLA guarantees, and certified workforce recruitment.
            </p>
            <ul className="space-y-2 text-xs text-emerald-100/90 pt-2 border-t border-emerald-500/15">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sub-15 Minute Emergency Dispatch SLA</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 9001 & ISO 45001 Quality Framework</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Corporate Journey Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Our Journey
          </div>
          <h2 className="text-3xl font-extrabold text-white">Milestones of Innovation</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-5 rounded-2xl border border-emerald-500/20 space-y-3 relative flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-2xl font-black text-emerald-400 font-mono">{m.year}</span>
                <h4 className="text-sm font-bold text-white">{m.title}</h4>
                <p className="text-emerald-100/70 text-[11px] leading-relaxed">{m.description}</p>
              </div>
              <div className="pt-2 border-t border-emerald-500/15">
                <span className="text-[10px] font-mono text-emerald-400">PASSED VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership & Executive Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Executive Leadership
          </div>
          <h2 className="text-3xl font-extrabold text-white">Guided By Industry Pioneers</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: "rgba(52, 211, 153, 0.45)" }}
              className="glass-card p-6 rounded-2xl border border-emerald-500/20 space-y-4 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-0.5 shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-emerald-400 font-black text-xl">
                  {member.name.charAt(0)}
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white">{member.name}</h4>
                <p className="text-xs text-emerald-400 font-semibold mt-0.5">{member.role}</p>
              </div>

              <p className="text-emerald-100/70 text-xs leading-relaxed">{member.bio}</p>

              <div className="pt-3 border-t border-emerald-500/15 text-[10px] text-emerald-200/60 font-mono">
                <span className="text-white font-bold block mb-0.5">Core Domain:</span>
                <span>{member.expertise}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ISO Certifications & Quality Commitment Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 rounded-3xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>International ISO Certifications</span>
            </div>
            <h3 className="text-2xl font-bold text-white">ISO 9001:2015 & ISO 45001 Safety Audited</h3>
            <p className="text-emerald-100/70 text-xs sm:text-sm max-w-xl">
              Every maintenance procedure, field dispatch, and technician recruitment workflow is strictly governed by global ISO safety and quality protocols.
            </p>
          </div>

          <Link
            href="/services"
            className="px-6 py-3.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition cursor-pointer shrink-0 shadow-lg"
          >
            Explore AMC Contracts
          </Link>
        </motion.div>
      </section>
    </div>
  );
}