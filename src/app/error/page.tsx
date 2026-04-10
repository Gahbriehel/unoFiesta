"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldAlert, RefreshCw, LogOut } from "lucide-react";

export default function ErrorPage() {
  const router = useRouter();

  const handleRetry = () => {
    router.push("/password");
  };

  const handleLeave = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="min-h-screen bg-[var(--color-brand-light)] flex flex-col items-center justify-center p-6 bg-red-50/10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-red-100 text-center"
      >
        <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-red-200">
          <ShieldAlert size={28} />
        </div>

        <h1 className="font-heading text-3xl text-[var(--color-brand-dark)] mb-4">Access Denied</h1>
        <p className="font-body text-[var(--color-brand-gray)] mb-10">
          The password you entered is incorrect. Access to this invitation is restricted to invited guests only.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleRetry}
            className="flex items-center justify-center gap-3 py-4 bg-[var(--color-brand-dark)] text-white rounded-2xl font-body tracking-wider uppercase text-sm hover:bg-[var(--color-brand-gold)] transition-all duration-300 shadow-xl"
          >
            <RefreshCw size={18} />
            <span>Try Again</span>
          </button>

          <button
            onClick={handleLeave}
            className="flex items-center justify-center gap-3 py-4 bg-white text-[var(--color-brand-gray)] border border-[var(--color-brand-champagne)] rounded-2xl font-body tracking-wider uppercase text-sm hover:bg-gray-50 transition-all duration-300"
          >
            <LogOut size={18} />
            <span>Leave Website</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
