"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  CheckCircle2,
  Send,
  FileCheck,
  Globe2,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Briefcase,
  UserCheck,
} from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "In-depth audit of facility staffing needs, required certifications, shift coverage, and technical skill matrices.",
  },
  {
    step: "02",
    title: "Practical Trade Testing",
    description: "Candidates undergo hands-on practical testing in HVAC chillers, electrical switchgear, and plumbing assemblies at certified training centers.",
  },
  {
    step: "03",
    title: "Background & Medical Audit",
    description: "Comprehensive criminal background checks, ISO 45001 safety orientation, and international fitness verifications.",
  },
  {
    step: "04",
    title: "Visa & Mobility Handling",
    description: "Complete handling of work visas, flight logistics, accommodation, and legal employment compliance.",
  },
  {
    step: "05",
    title: "On-Site Facility Deployment",
    description: "Deploying fully equipped, uniform-ready technicians with dedicated supervisory oversight and CAFM app training.",
  },
];

const candidateCategories = [
  {
    title: "MEP & Electrical Engineers",
    count: "150+ Candidates Ready",
    skills: ["High-Voltage Switchgear", "Transformer Maintenance", "UPS & Generator Load Testing"],
  },
  {
    title: "HVAC & Chiller Specialists",
    count: "200+ Candidates Ready",
    skills: ["Centrifugal Chiller Overhauls", "AHU / FCU Balancing", "IoT Thermostat Integration"],
  },
  {
    title: "Plumbing & Drainage Engineers",
    count: "120+ Candidates Ready",
    skills: ["Booster Pump Servicing", "Hydro-Jetting Drain Lines", "Acoustic Leak Detection"],
  },
  {
    title: "Janitorial & Soft Service Staff",
    count: "300+ Candidates Ready",
    skills: ["Commercial Deep Cleaning", "Rope Access Facade Washing", "Marble Crystallization"],
  },
  {
    title: "Facility Managers & Supervisors",
    count: "80+ Candidates Ready",
    skills: ["CAFM Software Supervision", "Tenant SLA Compliance", "SLA Cost Management"],
  },
];

export default function Recruitment() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    roleCategory: "MEP & Electrical Engineers",
    quantity: "5 - 10 Staff",
    location: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <Users className="w-3.5 h-3.5 text-emerald-400" />
          <span>Technical Manpower Recruitment & Staffing</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          Certified Technical <span className="text-gradient-emerald">Workforce Solutions</span>
        </h1>
        <p className="text-emerald-100/70 text-sm sm:text-base max-w-3xl mx-auto">
          Sourcing, trade testing, and deploying certified MEP technicians, HVAC engineers, janitorial supervisors, and facility managers for enterprise property owners.
        </p>
      </motion.section>

      {/* 5-Step Sourcing & Deployment Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            End-to-End Staffing Process
          </div>
          <h2 className="text-3xl font-extrabold text-white">Our 5-Step Recruitment Workflow</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: "rgba(52, 211, 153, 0.45)" }}
              className="glass-card p-6 rounded-3xl border border-emerald-500/20 space-y-3 relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-3xl font-black text-emerald-400 font-mono">{step.step}</span>
                <h4 className="text-base font-bold text-white">{step.title}</h4>
                <p className="text-emerald-100/70 text-xs leading-relaxed">{step.description}</p>
              </div>

              <div className="pt-3 border-t border-emerald-500/15 text-[10px] text-emerald-400 font-mono flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>QUALIFIED STEP</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Candidate Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Talent Pool Categories
          </div>
          <h2 className="text-3xl font-extrabold text-white">Certified Trades Ready For Deployment</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {candidateCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 rounded-3xl border border-emerald-500/20 space-y-4 transition-all shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/25 font-bold">
                  {cat.count}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
              </div>

              <div className="pt-2 border-t border-emerald-500/15 space-y-2">
                <span className="text-[11px] font-semibold text-white uppercase tracking-wider block">Verified Practical Competencies:</span>
                <ul className="space-y-1.5 text-xs text-emerald-100/80">
                  {cat.skills.map((skill, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Manpower Request Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-emerald-500/25 relative overflow-hidden shadow-2xl"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Enterprise Workforce Placement
              </span>
              <h2 className="text-3xl font-black text-white">Submit Manpower Request Form</h2>
              <p className="text-emerald-100/70 text-xs sm:text-sm">
                Request certified technical staff or full facility operations teams. Our recruitment desk will provide candidate profiles within 24 hours.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-8 text-center space-y-4 bg-emerald-950/80 p-6 rounded-2xl border border-emerald-500/30"
              >
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Staffing Requisition Received!</h3>
                <p className="text-emerald-100/80 text-xs max-w-md mx-auto">
                  Thank you, <strong className="text-emerald-300">{formData.companyName || "Client Company"}</strong>. Requisition Ticket #MPRS-{Math.floor(100000 + Math.random() * 900000)} has been assigned to our recruitment manager.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition cursor-pointer"
                >
                  Submit Another Requisition
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Apex Property Management Group"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith (HR / Director)"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@apex.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                      Required Role *
                    </label>
                    <select
                      value={formData.roleCategory}
                      onChange={(e) => setFormData({ ...formData, roleCategory: e.target.value })}
                      className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                    >
                      <option>MEP & Electrical Engineers</option>
                      <option>HVAC & Chiller Specialists</option>
                      <option>Plumbing & Drainage Engineers</option>
                      <option>Janitorial & Soft Service Staff</option>
                      <option>Facility Managers & Supervisors</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                      Staff Quantity *
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                    >
                      <option>1 - 4 Staff</option>
                      <option>5 - 10 Staff</option>
                      <option>11 - 25 Staff</option>
                      <option>25+ Large Contract Team</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                    Deployment Location & Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify project site, shift requirements, or special trade certifications..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs shadow-lg hover:shadow-emerald-500/30 transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Submit Manpower Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}