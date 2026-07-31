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
} from "lucide-react";

const faqs = [
  {
    question: "What is your emergency SLA response time guarantee?",
    answer:
      "Our mobile technical dispatch units arrive on-site in under 15 minutes for critical emergencies (power outages, severe pipe bursts, chiller failures) within our primary coverage zones.",
  },
  {
    question: "Do you offer tailored Annual Maintenance Contracts (AMC)?",
    answer:
      "Yes, we offer Silver Essential, Gold Enterprise, and Platinum Premier AMC contracts customized to your facility size, equipment inventory, and operational budget.",
  },
  {
    question: "Are your technicians and engineers certified?",
    answer:
      "100% of our engineering workforce is in-house certified, background-verified, and regularly audited under ISO 9001 and ISO 45001 safety guidelines.",
  },
];

export default function ContactSection() {
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>24/7 Command Dispatch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Get In Touch &{" "}
          <span className="text-gradient-emerald">Request Service</span>
        </h2>
        <p className="text-emerald-100/70 text-sm sm:text-base">
          Our dispatch command desk is active right now. Connect with a senior
          property manager or submit an urgent service request.
        </p>
      </motion.div>

      {/* Main Grid: Form & Info Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/25 relative overflow-hidden shadow-2xl"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="py-12 text-center space-y-4"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40"
              >
                <CheckCircle className="w-10 h-10" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">
                Ticket Successfully Dispatched!
              </h3>
              <p className="text-emerald-100/80 text-xs sm:text-sm max-w-md mx-auto">
                Thank you,{" "}
                <strong className="text-emerald-300">
                  {formData.name || "Valued Client"}
                </strong>
                . Ticket #APMS-{Math.floor(100000 + Math.random() * 900000)} has
                been assigned to our nearest mobile technical unit.
              </p>
              <div className="p-4 bg-emerald-950/80 rounded-xl max-w-md mx-auto text-left text-xs space-y-1.5 border border-emerald-500/20 font-mono">
                <p className="text-emerald-200">
                  <strong className="text-white">Service:</strong>{" "}
                  {formData.service}
                </p>
                <p className="text-emerald-200">
                  <strong className="text-white">Priority SLA:</strong>{" "}
                  {formData.urgency}
                </p>
                <p className="text-emerald-200">
                  <strong className="text-white">Est. Arrival:</strong> &lt; 15
                  Mins
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition cursor-pointer"
              >
                Submit Another Request
              </button>
            </motion.div>
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
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-emerald-100 mb-1.5">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
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
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3.5 rounded-xl bg-linear-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs shadow-lg hover:shadow-emerald-500/30 transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Submit & Dispatch Request</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Right Column: Contact Details & FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Emergency Hotline Box */}
          <motion.div
            whileHover={{ y: -3 }}
            className="glass-card p-6 rounded-3xl border border-emerald-500/25 space-y-4 shadow-xl"
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  24/7 Rapid Hotline
                </div>
                <div className="text-xl font-black text-white font-mono">
                  +1 (800) 555-AMAZE
                </div>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-emerald-100/80 pt-2 border-t border-emerald-500/15">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>100 Financial District Tower, Suite 450, NY 10005</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>dispatch@amazepms.com</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Command Operations: 24 Hours / 365 Days</span>
              </div>
            </div>
          </motion.div>

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
  );
}
