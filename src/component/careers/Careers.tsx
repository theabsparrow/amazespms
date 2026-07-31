"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  X,
  Award,
  Users,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
  Search,
} from "lucide-react";

const departments = ["All", "Engineering & MEP", "Operations & Command", "Helpdesk & Soft Services"];

const jobOpenings = [
  {
    id: "hvac-lead",
    title: "Senior HVAC & Chiller Systems Engineer",
    department: "Engineering & MEP",
    location: "New York Headquarters",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Lead on-site diagnostic and preventive overhaul teams for centrifugal water chillers, AHUs, and IoT thermostat balancing.",
    responsibilities: [
      "Oversee chiller plant maintenance and refrigerant leak audits.",
      "Calibrate VFD drives and automated building management systems.",
      "Ensure 100% compliance with ISO 9001 and ISO 45001 safety guidelines.",
    ],
  },
  {
    id: "elec-spec",
    title: "High-Voltage Switchgear Technician",
    department: "Engineering & MEP",
    location: "New Jersey Regional Hub",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Perform thermal infrared scanning, main distribution board load balancing, and emergency backup generator testing.",
    responsibilities: [
      "Conduct infrared thermal scans on electrical panels.",
      "Execute diesel generator load bank tests and UPS battery audits.",
      "Respond to high-voltage emergency dispatch tickets.",
    ],
  },
  {
    id: "cmd-disp",
    title: "24/7 Command Desk Dispatcher",
    department: "Operations & Command",
    location: "New York Headquarters",
    type: "Full-Time (Shifts)",
    experience: "2+ Years",
    description: "Operate our central GPS fleet telemetry software, assign emergency service tickets, and coordinate mobile units.",
    responsibilities: [
      "Receive incoming emergency service calls and client helpdesk tickets.",
      "Track mobile technician GPS locations for sub-15 minute SLA dispatch.",
      "Log digital work order completions into the CAFM database.",
    ],
  },
  {
    id: "fac-sup",
    title: "Commercial Facility Operations Supervisor",
    department: "Operations & Command",
    location: "Financial District Office",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Manage day-to-day hard and soft service execution for 500,000+ sq.ft. commercial office towers.",
    responsibilities: [
      "Supervise on-site MEP engineers and soft janitorial crews.",
      "Maintain client SLA relationships and financial budget tracking.",
      "Conduct weekly safety inspections and CAFM software audits.",
    ],
  },
  {
    id: "jan-lead",
    title: "Soft Services & Facade Safety Supervisor",
    department: "Helpdesk & Soft Services",
    location: "New York Regional Sites",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Oversee commercial deep cleaning, high-rise rope access window washing, and eco-friendly pest control operations.",
    responsibilities: [
      "Audit high-rise rope access equipment and safety harnesses.",
      "Manage hospital-grade sanitization and marble crystallization schedules.",
      "Ensure eco-friendly chemical compliance across client facilities.",
    ],
  },
];

const benefits = [
  {
    icon: Award,
    title: "Continuous Skill Certification",
    desc: "100% company-funded technical certifications, HVAC overhauls, and safety training courses.",
  },
  {
    icon: HeartHandshake,
    title: "Premium Health & Dental",
    desc: "Comprehensive medical coverage, wellness allowances, and family health benefits.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth Pathways",
    desc: "Structured promotion tracks from field technician to senior facility director.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First Workplace",
    desc: "ISO 45001 certified environment prioritizing zero hazards and top-tier safety gear.",
  },
];

export default function Careers() {
  const [activeDept, setActiveDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<(typeof jobOpenings)[0] | null>(null);

  const [applicantData, setApplicantData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesDept = activeDept === "All" || job.department === activeDept;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleApply = (e: React.FormEvent) => {
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
          <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
          <span>Careers & Talent Opportunities</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          Shape the Future of <span className="text-gradient-emerald">Smart Property Management</span>
        </h1>
        <p className="text-emerald-100/70 text-sm sm:text-base max-w-3xl mx-auto">
          Join 500+ certified engineers, field technicians, and operations specialists delivering 24/7 technical excellence across enterprise real estate.
        </p>
      </motion.section>

      {/* Employee Culture & Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Why Join Amaze PMS?
          </div>
          <h2 className="text-3xl font-extrabold text-white">Culture of Growth & Safety</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const IconComp = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, borderColor: "rgba(52, 211, 153, 0.45)" }}
                className="glass-card p-6 rounded-3xl border border-emerald-500/20 space-y-3 transition-all shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">{b.title}</h4>
                <p className="text-emerald-100/70 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Open Positions Filter & Search Bar */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-card border border-emerald-500/25 shadow-xl">
          {/* Department Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {departments.map((dept) => {
              const isActive = activeDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className="relative px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer"
                >
                  {isActive && (
                    <motion.div
                      layoutId="careersTabPill"
                      className="absolute inset-0 bg-emerald-400 text-slate-950 rounded-xl shadow-md shadow-emerald-400/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive ? "text-slate-950 font-bold" : "text-emerald-100/80 hover:text-white"
                    }`}
                  >
                    {dept}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search job title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl pl-10 pr-4 py-2 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
            />
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, borderColor: "rgba(52, 211, 153, 0.5)" }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 flex flex-col justify-between space-y-6 shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/30 font-bold">
                      {job.department}
                    </span>
                    <span className="text-xs text-emerald-100/70 font-semibold">{job.type}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <div className="flex items-center space-x-3 text-xs text-emerald-400/80 font-medium mt-1">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{job.location}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Exp: {job.experience}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-emerald-100/70 text-xs leading-relaxed">{job.description}</p>

                  <div className="pt-2 border-t border-emerald-500/15 space-y-2">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider block">Key Responsibilities:</span>
                    <ul className="space-y-1.5 text-xs text-emerald-100/80">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-emerald-500/15">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedJob(job)}
                    className="w-full py-3 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition cursor-pointer shadow-md"
                  >
                    Apply For Position
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Apply Modal Drawer */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl glass-card rounded-3xl border border-emerald-500/30 overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                    Job Application
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{selectedJob.title}</h3>
                </div>
                <button
                  onClick={() => {
                    setSelectedJob(null);
                    setSubmitted(false);
                  }}
                  className="p-2 rounded-xl bg-slate-900 text-emerald-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Application Received!</h4>
                  <p className="text-emerald-100/80 text-xs max-w-md mx-auto">
                    Thank you, <strong className="text-emerald-300">{applicantData.name || "Applicant"}</strong>. Application Ticket #JOB-{Math.floor(100000 + Math.random() * 900000)} has been logged into our HR portal.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedJob(null);
                      setSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Miller"
                        value={applicantData.name}
                        onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                        className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={applicantData.email}
                        onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                        className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={applicantData.phone}
                        onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                        className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                        Years of Relevant Experience *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 4 Years HVAC Servicing"
                        value={applicantData.experience}
                        onChange={(e) => setApplicantData({ ...applicantData, experience: e.target.value })}
                        className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                      Cover Letter / Brief Experience Summary
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your technical background, certifications, or licenses..."
                      value={applicantData.coverLetter}
                      onChange={(e) => setApplicantData({ ...applicantData, coverLetter: e.target.value })}
                      className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs shadow-lg hover:shadow-emerald-500/30 transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Submit Job Application</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}