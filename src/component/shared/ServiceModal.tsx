"use client";

import { useState } from "react";
import { X, CheckCircle, Send, PhoneCall, ShieldCheck } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ServiceModal({ isOpen, onClose, defaultService = "HVAC & Climate Control" }: ServiceModalProps) {
  const [service, setService] = useState(defaultService);
  const [urgency, setUrgency] = useState("Standard (24h)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto reset after 3s if needed
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Request Service & Quote</h3>
              <p className="text-xs text-slate-400">Amaze PMS 24/7 Smart Service Dispatch</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-white">Dispatch Ticket Created!</h4>
            <p className="text-slate-300 max-w-md mx-auto text-sm">
              Thank you, <span className="text-cyan-400 font-semibold">{formData.name || "valued client"}</span>. Ticket #APMS-{Math.floor(100000 + Math.random() * 900000)} has been assigned to our nearest mobile technical unit.
            </p>
            <div className="p-4 bg-slate-800/60 rounded-xl max-w-md mx-auto text-left text-xs space-y-1.5 border border-slate-700">
              <p className="text-slate-400"><strong className="text-slate-200">Service requested:</strong> {service}</p>
              <p className="text-slate-400"><strong className="text-slate-200">SLA Priority:</strong> {urgency}</p>
              <p className="text-slate-400"><strong className="text-slate-200">Est. Arrival:</strong> Within {urgency.includes("Emergency") ? "15-30 mins" : "2 hours"}</p>
            </div>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Select Required Service *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option>HVAC & Climate Control</option>
                  <option>Electrical & Power Maintenance</option>
                  <option>Plumbing & Sanitation Systems</option>
                  <option>Janitorial & Deep Soft Cleaning</option>
                  <option>Security & Access Control</option>
                  <option>Energy Management & Audit</option>
                  <option>Annual Maintenance Contract (AMC)</option>
                  <option>Manpower Staffing Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Urgency Level / SLA *
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option>Emergency Dispatch (&lt; 30 Mins)</option>
                  <option>Priority Dispatch (Same Day)</option>
                  <option>Standard (24h)</option>
                  <option>Scheduled Maintenance / AMC</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Full Name / Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 019-2834"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Property / Business Location *
              </label>
              <input
                type="text"
                required
                placeholder="Suite 400, Financial Tower, Business Bay"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Issue Description / Scope Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Describe the issue or service requirements in detail..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2 text-xs text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-lg border border-amber-400/20">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>24/7 Rapid Hotline: +1 (800) 555-AMAZE</span>
              </div>

              <button
                type="submit"
                className="flex items-center space-x-2 px-6 py-2.5 bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium rounded-xl shadow-lg hover:shadow-cyan-500/25 transition cursor-pointer"
              >
                <span>Submit & Dispatch</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
