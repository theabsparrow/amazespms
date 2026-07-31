"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  X,
  MapPin,
  CheckCircle2,
  Search,
  Filter,
} from "lucide-react";

const categories = ["All", "HVAC & Electrical", "High-Rise & Facade", "Soft Services", "Command Center"];

const galleryItems = [
  {
    id: 1,
    title: "Chiller Plant Overhaul & VFD Diagnostics",
    category: "HVAC & Electrical",
    location: "Apex Financial Towers, NY",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    description: "Preventative overhaul of 500-ton water-cooled centrifugal chillers and variable frequency drives.",
  },
  {
    id: 2,
    title: "High-Voltage Switchgear & Thermal Scanning",
    category: "HVAC & Electrical",
    location: "Metro Logistics Hub, NJ",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    description: "Infrared thermal imaging and main distribution board load balancing to eliminate fire risks.",
  },
  {
    id: 3,
    title: "Rope Access Glass Facade Cleaning",
    category: "High-Rise & Facade",
    location: "Skyline Corporate Hub, NY",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
    description: "IRATA certified rope access team performing 45-story exterior glass washing and sealant inspection.",
  },
  {
    id: 4,
    title: "Commercial Deep Cleaning & Marble Polish",
    category: "Soft Services",
    location: "Horizon Luxury Residences, NY",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    description: "Hospital-grade disinfection and terrazzo marble crystallization for luxury residential lobby.",
  },
  {
    id: 5,
    title: "24/7 Smart Command Dispatch Desk",
    category: "Command Center",
    location: "Amaze PMS Headquarters, NY",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    description: "Centralized GPS fleet tracking and AI work order dispatch desk operating 365 days a year.",
  },
  {
    id: 6,
    title: "Booster Pump Station & Leak Audits",
    category: "HVAC & Electrical",
    location: "HealthPlus Medical City, NY",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    description: "Acoustic pipe leak detection and transfer pump servicing for critical hospital water supply.",
  },
  {
    id: 7,
    title: "CCTV Security Operations & Biometrics",
    category: "Command Center",
    location: "Grand Central Plaza Mall, NY",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    description: "IP surveillance matrix management and RFID barrier integration for high-footfall retail center.",
  },
  {
    id: 8,
    title: "Rooftop Solar & BMS Energy Balancing",
    category: "HVAC & Electrical",
    location: "Cybertech Software Park, NJ",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    description: "Solar inverter synchronization and automated Building Management System power optimization.",
  },
  {
    id: 9,
    title: "Enterprise Commercial High-Rise Property",
    category: "High-Rise & Facade",
    location: "Financial Bay Tower A, NY",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Comprehensive Hard & Soft AMC contract protecting 3.2 million square feet of premium space.",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

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
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Operations & Project Gallery</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          Field Operations In <span className="text-gradient-emerald">Action</span>
        </h1>
        <p className="text-emerald-100/70 text-sm sm:text-base max-w-3xl mx-auto">
          Explore real-world technical operations, HVAC chiller overhauls, high-rise facade cleaning, and 24/7 command dispatch across our client properties.
        </p>
      </motion.section>

      {/* Category Filter Tabs */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 p-3 rounded-2xl glass-card border border-emerald-500/25 shadow-xl max-w-4xl mx-auto">
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
                    layoutId="galleryTabPill"
                    className="absolute inset-0 bg-emerald-400 text-slate-950 rounded-xl shadow-md shadow-emerald-400/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive ? "text-slate-950 font-bold" : "text-emerald-100/80 hover:text-white"
                  }`}
                >
                  {cat}
                </span>
              </button>
            );
          })}
        </div>
      </motion.section>

      {/* Image Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedItem(item)}
                className="glass-card rounded-3xl overflow-hidden border border-emerald-500/20 group cursor-pointer shadow-xl flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold">
                    {item.category}
                  </div>

                  {/* Zoom Icon Button */}
                  <div className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/70 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-3 left-3 right-3 space-y-1">
                    <div className="flex items-center space-x-1.5 text-emerald-400 text-[11px] font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-emerald-300 transition">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Footer details */}
                <div className="p-4 bg-emerald-950/60 border-t border-emerald-500/15 flex items-center justify-between text-xs text-emerald-100/70">
                  <span className="truncate max-w-[220px] text-[11px]">{item.description}</span>
                  <span className="text-emerald-400 font-bold font-mono text-[10px]">VIEW</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl glass-card rounded-3xl border border-emerald-500/30 overflow-hidden shadow-2xl space-y-4"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between p-4 border-b border-emerald-500/20 bg-slate-950/90">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                    {selectedItem.category}
                  </span>
                  <span className="text-xs text-emerald-100/70 font-semibold flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{selectedItem.location}</span>
                  </span>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-xl bg-slate-900 text-emerald-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Large Image Box */}
              <div className="relative h-[400px] w-full bg-slate-950">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description Footer */}
              <div className="p-6 bg-slate-950/95 space-y-2">
                <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                  {selectedItem.description}
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>ISO 9001:2015 Verified Operation</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}