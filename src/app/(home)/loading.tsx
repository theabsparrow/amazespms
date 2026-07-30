"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 space-y-8 relative overflow-hidden">
      {/* Ambient Pulsing Background Light */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Pulsing Logo Spinner */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-400 to-emerald-300 p-0.5 shadow-2xl shadow-emerald-500/40 relative z-10"
      >
        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
          <ShieldCheck className="w-9 h-9 text-emerald-400 animate-pulse" />
        </div>
      </motion.div>

      <div className="text-center space-y-2 relative z-10">
        <h3 className="text-lg font-bold text-white tracking-wide">AMAZE PMS</h3>
        <p className="text-xs text-emerald-400/80 font-mono tracking-wider">
          LOADING OPERATIONS DATA...
        </p>
      </div>

      {/* Glass Loading Skeleton Cards Preview */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 relative z-10">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="glass-card p-6 rounded-2xl border border-emerald-500/15 space-y-4 animate-pulse"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15" />
            <div className="h-5 bg-emerald-500/20 rounded-lg w-3/4" />
            <div className="space-y-2">
              <div className="h-3 bg-emerald-500/10 rounded w-full" />
              <div className="h-3 bg-emerald-500/10 rounded w-5/6" />
            </div>
            <div className="h-8 bg-emerald-500/15 rounded-xl w-1/2 pt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
