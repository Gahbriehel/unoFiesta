"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { config } from "@/data/config";

export function StorySection() {
  const { story } = config;

  return (
    <div className="w-full bg-[var(--color-brand-champagne)]/40 relative overflow-hidden">
      <Section className="py-28 md:py-36 px-6 md:px-12 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center mb-20 relative z-10">
          <motion.h2 
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[var(--color-brand-dark)] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {story.heading}
          </motion.h2>
          <motion.p 
            className="font-body text-lg md:text-xl text-[var(--color-brand-gray)] leading-loose text-balance uppercase tracking-widest text-opacity-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {story.paragraph}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl relative z-10 mt-10">
          {story.milestones.map((milestone, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 + 0.4 }}
            >
              <div className="relative mb-8">
                <span className="absolute inset-0 w-4 h-4 rounded-full bg-[var(--color-brand-gold)] opacity-30 group-hover:scale-150 transition-transform duration-500 blur-[2px] mx-auto" />
                <span className="relative block w-3 h-3 rounded-full bg-[var(--color-brand-gold)] mx-auto" />
              </div>
              <span className="text-sm tracking-widest text-[var(--color-brand-taupe)] uppercase mb-3 block">
                {milestone.date}
              </span>
              <h4 className="font-heading text-2xl text-[var(--color-brand-dark)]">
                {milestone.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
