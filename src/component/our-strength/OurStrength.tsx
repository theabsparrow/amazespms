"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  ShieldCheck,
  Smartphone,
  Clock,
  Zap,
  CheckCircle2,
  Award,
  Sparkles,
  TrendingUp,
  Radio,
  Server,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const strengths = [
  {
    icon: Activity,
    title: "24/7 Smart Command Center",
    category: "Operations Infrastructure",
    description: "Centralized operations hub equipped with real-time GPS fleet tracking and AI ticket dispatching to deploy mobile engineers in under 15 minutes.",
    metrics: "< 15 Mins SLA Dispatch",
    highlights: [
      "GPS Fleet Telemetry Tracking",
      "Automated Technician Dispatch",
      "24/7 Direct Emergency Line",
    ],
  },
  {
    icon: Cpu,
    title: "IoT Sensor & Predictive Maintenance",
    category: "Technology Suite",
    description: "Over 4,800 active IoT vibration and temperature sensors installed across client facilities flagging mechanical anomalies before costly breakdowns occur.",
    metrics: "99.8% Equipment Uptime",
    highlights: [
      "Chiller Vibration Diagnostics",
      "High-Voltage Heat Scans",
      "Automated Power Factor Audit",
    ],
  },
  {
    icon: ShieldCheck,
    title: "500+ Certified In-House Technicians",
    category: "Human Capital",
    description: "Every engineer and technician is directly employed, background-verified, and regularly audited under ISO 9001 and ISO 45001 safety guidelines.",
    metrics: "100% Certified Engineers",
    highlights: [
      "Quarterly Safety & Skill Recertification",
      "Zero-Subcontractor Guarantee",
      "Rigorous On-Site Audits",
    ],
  },
  {
    icon: Smartphone,
    title: "CAFM Mobile Tenant Portal",
    description: "Property managers and tenants receive total transparency through our cloud CAFM mobile app—track work orders, SLA logs, and energy metrics live.",
    category: "Digital Transparency",
    metrics: "Real-Time Mobile Portal",
    highlights: [
      "Instant Tenant Workorder Creation",
      "Live Engineer Arrival Tracking",
      "Digital SLA & Financial Audits",
    ],
  },
  {
    icon: TrendingUp,
    title: "Guaranteed Energy Overhead Reduction",
    category: "Sustainability",
    description: "Our HVAC balancing and VFD power optimization programs consistently deliver between 18% to 28% reduction in monthly electricity and water bills.",
    metrics: "18% - 28% Cost Savings",
    highlights: [
      "Water Tank & Pump Balancing",
      "Automated Building Management System",
      "Net-Zero Carbon Alignment",
    ],
  },
  {
    icon: Clock,
    title: "Zero-Penalties SLA Accountability",
    category: "Client Protection",
    description: "We back our work with contractual SLA guarantees—if emergency dispatch times or repair standards fail to meet agreed KPIs, financial rebates apply.",
    metrics: "100% Contractual Protection",
    highlights: [
      "Zero Penalties Contract Guarantee",
      "Transparent Audit Reports",
      "98.9% Client Renewal Rate",
    ],
  },
];

const techStack = [
  { name: "IoT Sensor Mesh", icon: Radio, desc: "Real-time vibration, moisture, & thermal sensors" },
  { name: "Cloud CAFM Platform", icon: Server, desc: "Centralized work order & asset lifecycle engine" },
  { name: "Mobile Field Tech App", icon: Smartphone, desc: "GPS route optimization & instant digital sign-offs" },
  { name: "Smart BMS Integration", icon: Cpu, desc: "Building automation & chiller load balancing" },
];

export default function OurStrength() {
  return (
    <div className="py-12 space-y-24 relative z-10 overflow-hidden">
      {/* Background Ambient Glow */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
          <span>Operational Capabilities & Infrastructure</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          Pillars of Technical <span className="text-gradient-emerald">Excellence & Strength</span>
        </h1>
        <p className="text-emerald-100/70 text-sm sm:text-base max-w-3xl mx-auto">
          Combining 24/7 physical engineering mastery with AI cloud telemetry, zero-risk SLAs, and 100% certified technical staff to protect enterprise assets.
        </p>
      </motion.section>

      {/* Core Strength Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -8, borderColor: "rgba(52, 211, 153, 0.5)" }}
                className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between transition-all group border border-emerald-500/20 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400"
                    >
                      <IconComp className="w-6 h-6" />
                    </motion.div>
                    <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-300 font-mono font-bold border border-emerald-500/30">
                      {item.metrics}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5 group-hover:text-emerald-300 transition">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-emerald-100/70 text-xs leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-emerald-500/15">
                    <ul className="space-y-2 text-xs text-emerald-100/90">
                      {item.highlights.map((point, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-emerald-500/15 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold">ISO Certified Operations</span>
                  <Award className="w-4 h-4 text-amber-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Technology Stack Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 sm:p-10 border border-emerald-500/25 space-y-8 shadow-2xl"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Technology Infrastructure
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              Powered By Next-Gen Technical Software
            </h2>
            <p className="text-emerald-100/70 text-xs sm:text-sm">
              We bridge traditional electromechanical servicing with cloud telemetry, mobile apps, and predictive IoT algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-5 rounded-2xl bg-emerald-950/80 border border-emerald-500/20 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <TechIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{tech.name}</h4>
                  <p className="text-emerald-100/70 text-xs leading-relaxed">{tech.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Experience Zero Downtime Property Management</h3>
            <p className="text-emerald-100/70 text-xs sm:text-sm max-w-xl">
              Connect with a senior technical consultant to evaluate your facility's current MEP and AMC performance metrics.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="px-6 py-3.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition cursor-pointer shrink-0 shadow-lg flex items-center space-x-2"
          >
            <span>Request Operational Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}