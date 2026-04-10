"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import { config } from "@/data/config";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === config.security.password) {
      localStorage.setItem("event_auth", "true");
      router.push("/");
    } else {
      router.push("/error");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-brand-light)] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-champagne)] rounded-full -mr-48 -mt-48 opacity-30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-brand-gold)] rounded-full -ml-40 -mb-40 opacity-10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white relative z-10 text-center"
      >
        <div className="w-16 h-16 bg-[var(--color-brand-dark)] text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <Lock size={28} />
        </div>

        <h1 className="font-heading text-3xl text-[var(--color-brand-dark)] mb-4">Event Entry</h1>
        <p className="font-body text-[var(--color-brand-gray)] mb-10 text-pretty">
          This is a private event. Please enter the general password to view the invitation details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 bg-white border border-[var(--color-brand-champagne)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] transition-all text-center tracking-widest"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full group flex items-center justify-center gap-3 py-4 bg-[var(--color-brand-dark)] text-white rounded-2xl font-body tracking-wider uppercase text-sm hover:bg-[var(--color-brand-gold)] transition-all duration-300 shadow-xl"
          >
            <span>Enter Gallery</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </motion.div>
      
      <footer className="absolute bottom-8 text-[var(--color-brand-gray)] text-sm font-body tracking-widest uppercase opacity-50">
        &copy; {new Date().getFullYear()} {config.hero.title}
      </footer>
    </div>
  );
}
