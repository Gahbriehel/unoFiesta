"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { config } from "@/data/config";

export function FooterRSVP() {
  return (
    <div className="bg-[var(--color-brand-light)] w-full border-t border-[var(--color-brand-champagne)]">
      <Section className="text-center flex flex-col items-center py-24">
        <motion.h2 
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-[var(--color-brand-dark)] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {config.footer.message}
        </motion.h2>
        <motion.p 
          className="font-body text-[var(--color-brand-gray)] mb-12 tracking-widest uppercase text-sm md:text-base max-w-xl text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Please let us know if you can make it by {config.details.rsvpDate}
        </motion.p>
        
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl`}>
          {config.details.rsvp.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-3 px-8 py-5 bg-[var(--color-brand-dark)] text-white rounded-full font-body tracking-wider uppercase text-sm hover:bg-[var(--color-brand-gold)] hover:-translate-y-1 transition-all duration-300 shadow-xl w-full ${config.details.rsvp.length > 1 ? 'sm:flex-1' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <MessageCircle size={18} />
              <span>RSVP via {contact.name}</span>
              <ArrowRight size={18} />
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Developer credit — its own clearly separated strip */}
      <div className="bg-[var(--color-brand-champagne)] py-4 text-center">
        <a
          href={config.footer.developer.contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs tracking-widest uppercase text-[var(--color-brand-taupe)] hover:text-[var(--color-brand-gold)] transition-colors duration-300"
        >
          Site by {config.footer.developer.name}
        </a>
      </div>
    </div>
  );
}
