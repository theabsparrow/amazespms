"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Clock,
  Smartphone,
  CheckCircle2,
  XCircle,
  Sparkles,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "24/7 Smart Command Dispatch",
    description: "Centralized GPS fleet tracking dispatches the nearest mobile technical unit to emergency calls in under 15 minutes.",
    stat: "< 15 Mins",
    statLabel: "Emergency Dispatch",
  },
  {
    icon: Cpu,
    title: "IoT Predictive Maintenance",
    description: "Real-time vibration and temperature telemetry flag mechanical anomalies before costly chiller or generator breakdowns.",
    stat: "99.8%",
    statLabel: "System Uptime",
  },
  {
    icon: ShieldCheck,
    title: "100% Certified & Vetted Staff",
    description: "Every engineer and technician undergoes rigorous background checks, ISO 45001 safety training, and quarterly skill audits.",
    stat: "500+",
    statLabel: "Certified Engineers",
  },
  {
    icon: TrendingUp,
    title: "Proven Energy Savings",
    description: "Automated HVAC balancing and power factor optimization reduce monthly commercial electricity bills by up to 28%.",
    stat: "-28%",
    statLabel: "Energy Overhead",
  },
  {
    icon: Clock,
    title: "Zero-Penalties SLA Commitment",
    description: "Transparent, contractually guaranteed response times backed by financial rebate SLA commitments.",
    stat: "100%",
    statLabel: "SLA Accountability",
  },
  {
    icon: Smartphone,
    title: "CAFM Mobile Tenant Portal",
    description: "Full visibility over work orders, preventive schedules, technician locations, and energy logs on any device.",
    stat: "Real-Time",
    statLabel: "Digital Dashboard",
  },
];

const comparisonData = [
  {
    feature: "Emergency SLA Response",
    traditional: "4 to 24 Hours",
    amaze: "< 15 Minutes Rapid Dispatch",
  },
  {
    feature: "Equipment Monitoring",
    traditional: "Reactive Breakdown Calls",
    amaze: "24/7 IoT Sensor Telemetry",
  },
  {
    feature: "Workorder Transparency",
    traditional: "Paper Work Orders & Delays",
    amaze: "Instant Mobile CAFM Portal",
  },
  {
    feature: "Energy Overhead Management",
    traditional: "Unmonitored Utility Spikes",
    amaze: "18% - 28% Energy Guarantee",
  },
  {
    feature: "Staff Certification",
    traditional: "Unverified Subcontractors",
    amaze: "100% In-House ISO Certified",
  },
];

export default function WhyChooseUs() {
  const [activeComparison, setActiveComparison] = useState(true);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>The Amaze PMS Advantage</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Why Enterprises Trust <span className="text-gradient-emerald">Amaze PMS</span>
        </h2>
        <p className="text-emerald-100/70 text-sm sm:text-base">
          We combine physical engineering mastery with AI cloud telemetry, zero-risk SLAs, and 100% certified technical staff to deliver unprecedented property performance.
        </p>
      </motion.div>

      {/* 6 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, borderColor: "rgba(52, 211, 153, 0.45)" }}
              className="glass-card p-6 rounded-2xl border border-emerald-500/20 flex flex-col justify-between transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-emerald-400 font-mono">{feat.stat}</div>
                    <div className="text-[10px] text-emerald-200/60 uppercase tracking-wider">{feat.statLabel}</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
                  {feat.title}
                </h3>

                <p className="text-emerald-100/70 text-xs leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-emerald-500/15 flex items-center space-x-2 text-[11px] text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified SLA Standard</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* INTERACTIVE COMPARISON MATRIX */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/25 space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-500/20 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Performance Benchmark
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Traditional Maintenance vs Amaze PMS
            </h3>
          </div>
          <div className="flex items-center space-x-2 bg-emerald-950/80 p-1.5 rounded-xl border border-emerald-500/20">
            <span className="text-xs text-emerald-300 font-medium px-2">ISO Standard Audit</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-emerald-500/20 text-emerald-300 font-semibold uppercase tracking-wider">
                <th className="pb-3 px-2">Operational Vector</th>
                <th className="pb-3 px-2 text-slate-400">Traditional Vendors</th>
                <th className="pb-3 px-2 text-emerald-400">Amaze PMS Smart Standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-500/15">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-emerald-950/30 transition">
                  <td className="py-3.5 px-2 font-bold text-white">{row.feature}</td>
                  <td className="py-3.5 px-2 text-slate-400 flex items-center space-x-1.5">
                    <XCircle className="w-4 h-4 text-rose-500/80 shrink-0" />
                    <span>{row.traditional}</span>
                  </td>
                  <td className="py-3.5 px-2 text-emerald-300 font-semibold flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{row.amaze}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
