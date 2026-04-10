"use client";

import { motion } from "framer-motion";
import { config } from "@/data/config";
import { Calendar, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-between py-12 px-6 bg-white overflow-hidden">

      {/* Top Header */}
      <motion.div
        className="w-full text-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <span className="uppercase tracking-[0.2em] text-[10px] sm:text-xs font-semibold text-gray-500 block max-w-xs mx-auto text-balance leading-relaxed">
          {config.hero.subtitle}
        </span>
      </motion.div>

      {/* Script Name */}
      <motion.div
        className="w-full text-center mt-8 z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <h1 className="font-script text-9xl md:text-[200px] text-[var(--color-brand-brown)] leading-none -mb-6 md:-mb-16 relative z-10 select-none">
          {config.hero.title.split(' ')[0]}
        </h1>
      </motion.div>

      {/* "ONE" with Photo Masks */}
      <motion.div
        className="flex w-full max-w-4xl justify-center items-center font-heading3 font-black leading-none relative z-0"
        style={{ fontSize: 'clamp(200px, 38vw, 320px)', letterSpacing: '-0.06em' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        {[config.photos.featured[0], config.photos.featured[1], config.photos.featured[2]].map((photo, i) => (
          <div
            key={i}
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url(${photo})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              display: 'inline-block',
              lineHeight: 1,
            }}
          >
            {['O', 'N', 'E'][i]}
          </div>
        ))}
      </motion.div>

      {/* Date & Location Info */}
      <motion.div
        className="flex flex-row items-center justify-center w-full max-w-sm md:max-w-2xl mt-12 gap-8 md:gap-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="flex items-center gap-4 text-[var(--color-brand-brown)]">
          <Calendar className="w-8 h-8 opacity-70" strokeWidth={1.5} />
          <div className="flex flex-col text-sm md:text-base font-bold uppercase tracking-wider">
            <span>{config.details.date.split(',').pop()?.trim()}</span>
            <span>{config.details.time.split('-')[0].trim()}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[var(--color-brand-brown)]">
          <MapPin className="w-8 h-8 opacity-70" strokeWidth={1.5} />
          <div className="flex flex-col text-sm md:text-base font-bold uppercase tracking-wider text-left">
            <span>{config.details.venue.split('\n')[0]}</span>
            <span>{config.details.venue.split('\n')[1]?.split(',')[0]}</span>
          </div>
        </div>
      </motion.div>

      {/* RSVP Info */}
      <motion.div
        className="w-full text-center mt-12 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p className="text-gray-500 text-xs md:text-sm italic">
          Kindly RSVP to Mom or Dad <br className="md:hidden" />
          {/* {config.details.rsvpPhone} */}
        </p>
      </motion.div>

    </section>
  );
}
