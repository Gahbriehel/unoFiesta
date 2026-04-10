"use client";

import { CalendarHeart, Clock, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { config } from "@/data/config";

export function EventDetails() {
  const details = [
    { icon: CalendarHeart, title: "When", content: config.details.date },
    { icon: Clock, title: "Time", content: config.details.time },
    { icon: MapPin, title: "Where", content: config.details.venue },
    { icon: Phone, title: "RSVP", content: config.details.rsvp.map(c => c.name).join(" or ") },
  ];

  return (
    <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20 max-md:-mt-10 md:-mt-10 pb-12 ">
      {details.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="flex flex-col items-center text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-white hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-500 group"
          >
            <div className="h-12 w-12 rounded-full bg-[var(--color-brand-champagne)] flex items-center justify-center mb-6 text-[var(--color-brand-gray)] group-hover:scale-110 group-hover:bg-[var(--color-brand-gold)] group-hover:text-white transition-colors duration-500">
              <Icon size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-xl text-[var(--color-brand-dark)] mb-3">{item.title}</h3>
            <p className="text-sm text-[var(--color-brand-gray)] whitespace-pre-line leading-relaxed">
              {item.content}
            </p>
          </div>
        );
      })}
    </Section>
  );
}
