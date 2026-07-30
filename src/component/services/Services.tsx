"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wind,
  Zap,
  Droplets,
  Sparkles,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Search,
  ArrowRight,
  Layers,
  Award,
  Clock,
  PhoneCall,
  Sliders,
} from "lucide-react";
import ServiceModal from "@/component/shared/ServiceModal";

const categories = ["All", "Hard Services (MEP)", "Soft Services", "Civil & Fit-Out", "Security & Tech"];

const servicesList = [
  {
    id: "hvac",
    title: "HVAC & Chillers Maintenance",
    category: "Hard Services (MEP)",
    icon: Wind,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    description: "Complete HVAC lifecycle management including water chillers, air handling units (AHU), fan coil units (FCU), duct cleaning, and IoT thermostatic optimization.",
    sla: "< 15 Mins Emergency",
    features: [
      "Chilled Water Pump Servicing",
      "Ductwork Hygiene & Sanitization",
      "VFD & Compressor Overhauls",
      "Refrigerant Leak Diagnostics & Audit",
    ],
  },
  {
    id: "electrical",
    title: "Electrical & High Voltage Power",
    category: "Hard Services (MEP)",
    icon: Zap,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    description: "High and low voltage switchgear maintenance, transformer insulation testing, diesel generator synchronization, UPS battery banks, and thermographic scans.",
    sla: "< 15 Mins Emergency",
    features: [
      "Thermal Infrared Panel Scanning",
      "Emergency Generator Load Bank Test",
      "Main Distribution Board (MDB) Testing",
      "LED Lighting & Automation Retrofits",
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing & Water Engineering",
    category: "Hard Services (MEP)",
    icon: Droplets,
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    description: "Pumping station servicing, backflow prevention, water storage tank disinfection, acoustic pipe leak detection, and high-pressure sewer jetting.",
    sla: "< 30 Mins Dispatch",
    features: [
      "Domestic & Fire Water Tank Chlorination",
      "Booster & Submersible Pump Overhauls",
      "Grease Trap Maintenance & Cleaning",
      "Acoustic Leak Pinpointing",
    ],
  },
  {
    id: "janitorial",
    title: "Janitorial & Commercial Deep Cleaning",
    category: "Soft Services",
    icon: Sparkles,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    description: "Daily office janitorial staffing, high-rise window facade rope cleaning, marble honing and crystallization, carpet shampooing, and pest control.",
    sla: "Daily / Scheduled",
    features: [
      "Rope Access High-Rise Window Cleaning",
      "Hospital-Grade Disinfection & Sanitization",
      "Marble & Terrazzo Floor Crystallization",
      "Integrated Eco-Friendly Pest Control",
    ],
  },
  {
    id: "security",
    title: "CCTV & Access Control",
    category: "Security & Tech",
    icon: ShieldCheck,
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    description: "Installation and maintenance of IP CCTV surveillance, facial recognition barriers, turnstiles, fire alarm panels, and automated sprinkler networks.",
    sla: "< 20 Mins Dispatch",
    features: [
      "AI Video Analytics & Intrusion Alert",
      "Biometric & RFID Access Management",
      "Fire Suppression & Sprinkler Testing",
      "24/7 Security Operations Staffing",
    ],
  },
  {
    id: "civil",
    title: "Civil Works & Structural Repairs",
    category: "Civil & Fit-Out",
    icon: Building2,
    color: "text-emerald-300",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    description: "Masonry repair, waterproof membrane installation, interior painting, drywall partitioning, epoxy floor coating, and joinery repairs.",
    sla: "< 24 Hours",
    features: [
      "Roof & Basement Waterproofing",
      "Epoxy Industrial Floor Coating",
      "Gypsum Partitioning & Ceilings",
      "Masonry & Facade Patch Repairs",
    ],
  },
];

const amcPlans = [
  {
    name: "Silver Maintenance",
    badge: "Essential",
    popular: false,
    description: "Ideal for small to medium residential complexes and standard commercial offices.",
    features: [
      "Bi-Monthly MEP Inspections",
      "24/7 Emergency Dispatch Helpline",
      "4 Hour On-Site SLA Response",
      "Basic Filter & Fluid Replacements",
      "Annual Water Tank Sanitization",
    ],
  },
  {
    name: "Gold Enterprise",
    badge: "Most Popular",
    popular: true,
    description: "Comprehensive coverage for commercial towers, shopping malls, and mixed-use developments.",
    features: [
      "Monthly Preventive Maintenance (PPM)",
      "15-Minute Rapid SLA Response",
      "Dedicated Resident Engineer Team",
      "IoT Sensor & CAFM Mobile Portal",
      "Unlimited Emergency Service Calls",
      "Spare Parts Discount (15%)",
    ],
  },
  {
    name: "Platinum Premier",
    badge: "Tailored Facility",
    popular: false,
    description: "Full facility management taking over 100% hard & soft operations with zero downtime SLA.",
    features: [
      "24/7 On-Site Stationed Engineers",
      "100% Parts & Consumables Included",
      "Zero Downtime Financial Guarantee",
      "Energy Efficiency KPI Rebate",
      "Executive CAFM Dashboard & Analytics",
      "Dedicated Facility Director",
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("HVAC & Chillers Maintenance");

  const filteredServices = servicesList.filter((srv) => {
    const matchesCat = activeCategory === "All" || srv.category === activeCategory;
    const matchesSearch = srv.title.toLowerCase().includes(searchQuery.toLowerCase()) || srv.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const openModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="py-12 space-y-20 relative z-10 overflow-hidden">
      {/* Background Ambient Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
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
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          <span>Integrated Property Service Catalog</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          Our Comprehensive <span className="text-gradient-emerald">Service Portfolio</span>
        </h1>
        <p className="text-emerald-100/70 text-sm sm:text-base max-w-3xl mx-auto">
          From preventive electromechanical engineering to 24/7 emergency dispatch, soft sanitation, and structured AMC contracts, Amaze PMS maximizes property performance.
        </p>
      </motion.section>

      {/* Category Filter and Search Bar */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-card border border-emerald-500/25 shadow-xl">
          {/* Category Tabs with Framer Spring Pill */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer"
                >
                  {isActive && (
                    <motion.div
                      layoutId="servicesTabPill"
                      className="absolute inset-0 bg-emerald-400 text-slate-950 rounded-xl shadow-md shadow-emerald-400/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-slate-950 font-bold" : "text-emerald-100/80 hover:text-white"}`}>
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search service title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-emerald-950/80 border border-emerald-500/20 rounded-xl pl-10 pr-4 py-2 text-xs text-emerald-100 focus:outline-none focus:border-emerald-400"
            />
          </div>
        </div>
      </motion.section>

      {/* Services Grid with AnimatePresence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <motion.div
                  key={srv.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8, borderColor: "rgba(52, 211, 153, 0.5)" }}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between transition-all group border border-emerald-500/20 shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className={`w-12 h-12 rounded-xl ${srv.bgColor} border ${srv.borderColor} flex items-center justify-center ${srv.color}`}
                      >
                        <IconComp className="w-6 h-6" />
                      </motion.div>
                      <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 font-mono font-bold border border-emerald-500/20">
                        {srv.sla}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition">
                      {srv.title}
                    </h3>

                    <p className="text-emerald-100/70 text-xs leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="pt-2 border-t border-emerald-500/15">
                      <div className="text-[11px] font-semibold text-white uppercase tracking-wider mb-2">
                        Key Scope Deliverables:
                      </div>
                      <ul className="space-y-1.5 text-xs text-emerald-100/80">
                        {srv.features.map((feat, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-emerald-500/15 flex items-center justify-between">
                    <span className="text-xs text-emerald-400/60 font-medium">{srv.category}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openModal(srv.title)}
                      className="px-4 py-2 rounded-xl bg-emerald-400 text-slate-950 text-xs font-bold transition cursor-pointer shadow-md"
                    >
                      Request Service
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* AMC MAINTENANCE PLANS MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Annual Maintenance Contracts (AMC)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Structured AMC Plans for Every Facility
          </h2>
          <p className="text-emerald-100/70 text-sm sm:text-base">
            Fixed annual maintenance packages with guaranteed SLA response times, preventive maintenance visits, and complete cost predictability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {amcPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition ${
                plan.popular
                  ? "glass-card border-2 border-emerald-400 shadow-2xl shadow-emerald-500/20"
                  : "glass-card border border-emerald-500/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                  Recommended Plan
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    {plan.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">{plan.name}</h3>
                  <p className="text-emerald-100/70 text-xs mt-2 leading-relaxed">{plan.description}</p>
                </div>

                <div className="border-t border-emerald-500/20 pt-4">
                  <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                    Contract Deliverables:
                  </div>
                  <ul className="space-y-3 text-xs text-emerald-100/90">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-emerald-500/20">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openModal(`AMC Contract - ${plan.name}`)}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition cursor-pointer ${
                    plan.popular
                      ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-lg shadow-emerald-400/25"
                      : "bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-white"
                  }`}
                >
                  Request AMC Proposal
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}