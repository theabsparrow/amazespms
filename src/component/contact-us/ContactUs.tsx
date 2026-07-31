"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Building2,
} from "lucide-react";

const faqs = [
  {
    question: "What is your emergency SLA response time guarantee?",
    answer: "Our mobile technical dispatch units arrive on-site in under 15 minutes for critical emergencies (power outages, severe pipe bursts, chiller failures) within our primary coverage zones.",
  },
  {
    question: "Do you offer tailored Annual Maintenance Contracts (AMC)?",
    answer: "Yes, we offer Silver Essential, Gold Enterprise, and Platinum Premier AMC contracts customized to your facility size, equipment inventory, and operational budget.",
  },
  {
    question: "Are your technicians and engineers certified?",
    answer: "100% of our engineering workforce is in-house certified, background-verified, and regularly audited under ISO 9001 and ISO 45001 safety guidelines.",
  },
  {
    question: "How do tenants submit work orders?",
    answer: "Tenants and property managers gain access to our cloud CAFM mobile app for instant 1-click workorder submission, live technician GPS tracking, and real-time SLA completion sign-offs.",
  },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "HVAC & Climate Control",
    urgency: "Standard (24h)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>24/7 Command Operations</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          Contact Our <span className="text-gradient-emerald">Dispatch Desk</span>
        </h1>
        <p className="text-emerald-100/70 text-sm sm:text-base max-w-3xl mx-auto">
          Our 24/7 Command Desk is live right now. Request an immediate emergency dispatch, schedule an AMC audit, or inquire about technical manpower staffing.
        </p>
      </motion.section>

      {/* 4 Contact Info Detail Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6 rounded-3xl border border-emerald-500/20 space-y-3 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
              24/7 Emergency Line
            </div>
            <h4 className="text-lg font-bold text-white font-mono">+1 (800) 555-AMAZE</h4>
            <p className="text-emerald-100/70 text-xs">Guaranteed sub-15 minute dispatch for critical tickets.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6 rounded-3xl border border-emerald-500/20 space-y-3 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
              Headquarters
            </div>
            <h4 className="text-sm font-bold text-white">Financial District Tower</h4>
            <p className="text-emerald-100/70 text-xs">100 Financial District Tower, Suite 450, NY 10005</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6 rounded-3xl border border-emerald-500/20 space-y-3 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
              Direct Dispatch Email
            </div>
            <h4 className="text-sm font-bold text-white font-mono">dispatch@amazepms.com</h4>
            <p className="text-emerald-100/70 text-xs">Digital ticketing & RFP proposals.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6 rounded-3xl border border-emerald-500/20 space-y-3 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Clock className="w-6 h-6 text-amber-400" />
            </div>
            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
              Command Hours
            </div>
            <h4 className="text-sm font-bold text-white">24 Hours / 365 Days</h4>
            <p className="text-emerald-100/70 text-xs">Non-stop monitoring and technical support.</p>
          </motion.div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/25 shadow-2xl relative"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Dispatch Ticket Created!</h3>
                <p className="text-emerald-100/80 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-emerald-300">{formData.name || "Valued Client"}</strong>. Ticket #APMS-{Math.floor(100000 + Math.random() * 900000)} has been assigned to our nearest mobile technical unit.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                    >
                      <option>HVAC & Climate Control</option>
                      <option>Electrical & Power Systems</option>
                      <option>Plumbing & Water Engineering</option>
                      <option>Janitorial & Deep Soft Services</option>
                      <option>Security & Access Control</option>
                      <option>Technical Workforce Recruitment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                    Scope Requirements & Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your property needs, square footage, or urgency level..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs shadow-lg hover:shadow-emerald-500/30 transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Submit & Dispatch Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Visual Location Map Container & FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Visual Location Map Graphic Container */}
            <div className="glass-card p-6 rounded-3xl border border-emerald-500/25 space-y-4 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-emerald-500/15 pb-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>Headquarters Location Map</span>
                </span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                  NY HQ
                </span>
              </div>

              {/* Map Graphic Container */}
              <div className="h-44 rounded-2xl bg-emerald-950/90 border border-emerald-500/20 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-400/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto animate-bounce">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="text-xs font-bold text-white">100 Financial District Tower, Suite 450</div>
                  <div className="text-[10px] text-emerald-300 font-mono">GPS Coordinates: 40.7075° N, 74.0113° W</div>
                </div>
              </div>
            </div>

            {/* Quick FAQ Accordion */}
            <div className="glass-card p-6 rounded-3xl border border-emerald-500/25 space-y-4 shadow-xl">
              <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider border-b border-emerald-500/15 pb-3">
                <HelpCircle className="w-4 h-4 text-emerald-400" />
                <span>Frequently Asked Questions</span>
              </div>

              <div className="space-y-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-emerald-500/15 rounded-xl bg-emerald-950/40 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-3.5 text-left text-xs font-semibold text-emerald-100 flex items-center justify-between transition hover:text-emerald-300"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="px-3.5 pb-3 text-[11px] text-emerald-100/70 leading-relaxed border-t border-emerald-500/10 pt-2"
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}