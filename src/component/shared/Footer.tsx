"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Award,
} from "lucide-react";

const navGroup1 = [
  { name: "Home", href: "/" },
  { name: "Services & AMC", href: "/services" },
  { name: "About Amaze PMS", href: "/about-us" },
  { name: "Our Strengths & Tech", href: "/our-strength" },
  { name: "Client Portfolio", href: "/our-clients" },
];

const navGroup2 = [
  { name: "Project Gallery", href: "/gallery" },
  { name: "Manpower Recruitment", href: "/recruitment" },
  { name: "Career Opportunities", href: "/careers" },
  { name: "Contact & Support", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="glass-footer text-emerald-100/70 relative overflow-hidden mt-auto">
      {/* Background Animated Emerald Glowing Orbs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.25, 1, 1.25], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[130px] pointer-events-none"
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12"
        >
          {/* Column 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-400 to-emerald-300 p-0.5 shadow-lg shadow-emerald-500/25"
              >
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <span className="text-xl font-black tracking-tight text-white">AMAZE</span>
                  <span className="text-xl font-bold text-gradient-emerald">PMS</span>
                </div>
                <span className="text-[10px] tracking-widest text-emerald-400/80 uppercase font-semibold">
                  Property & Facility Services
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed max-w-sm">
              Amaze PMS is an enterprise property and facility service management company delivering 24/7 technical operations, IoT HVAC control, electrical engineering, janitorial soft services, and certified technical manpower recruitment.
            </p>

            {/* ISO Certification Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <motion.span
                whileHover={{ y: -2 }}
                className="flex items-center space-x-1.5 bg-emerald-950/80 border border-emerald-500/20 px-3 py-1.5 rounded-xl text-xs text-emerald-200 shadow-sm"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>ISO 9001:2015 Quality</span>
              </motion.span>
              <motion.span
                whileHover={{ y: -2 }}
                className="flex items-center space-x-1.5 bg-emerald-950/80 border border-emerald-500/20 px-3 py-1.5 rounded-xl text-xs text-emerald-200 shadow-sm"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>ISO 45001 Safety</span>
              </motion.span>
            </div>
          </div>

          {/* Column 2: Navigation Group 1 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-500/20 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navGroup1.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-emerald-300 transition flex items-center space-x-1.5 text-emerald-100/70 group"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Group 2 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-500/20 pb-2">
              Solutions & Talent
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navGroup2.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-emerald-300 transition flex items-center space-x-1.5 text-emerald-100/70 group"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Emergency Command */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-500/20 pb-2">
              Command Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-emerald-100/80">100 Financial District Tower, Suite 450, NY 10005</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-white">+1 (800) 555-AMAZE</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-emerald-100/80">dispatch@amazepms.com</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-emerald-100/80">Operations: 24 Hours / 365 Days</span>
              </div>

              <div className="pt-2">
                <div className="p-3 bg-emerald-950/80 border border-emerald-500/20 rounded-xl text-[11px] text-emerald-200/80 space-y-1">
                  <div className="flex items-center justify-between text-white font-semibold">
                    <span>SLA Dispatch Commitment</span>
                    <span className="text-emerald-400 font-bold font-mono">99.8%</span>
                  </div>
                  <p>Guaranteed on-site technician dispatch within 15 minutes for emergency tickets.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Copyright */}
        <div className="border-t border-emerald-500/20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-200/50">
          <p>© {new Date().getFullYear()} Amaze Property Management Services (Amaze PMS). All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="hover:text-emerald-300 cursor-pointer transition">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-emerald-300 cursor-pointer transition">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-emerald-300 cursor-pointer transition">Security SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}