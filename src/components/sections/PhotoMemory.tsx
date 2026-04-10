"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { config } from "@/data/config";
import { cn } from "@/lib/utils";

export function PhotoMemory() {
  const images = [...config.photos.featured, ...config.photos.featured];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Section className="py-24 max-w-none px-0 overflow-hidden">
      <div className="relative flex">
        <motion.div
          className="flex gap-6 py-4"
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
          style={{ width: "fit-content" }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={cn(
                "relative flex-shrink-0 w-[280px] md:w-[450px] aspect-[1/1] rounded-xl overflow-hidden shadow-2xl bg-white group transition-transform duration-500 hover:scale-[1.02] z-10",
                index % 2 === 0 ? "rotate-2" : "-rotate-2"
              )}
            >
              <div className="absolute inset-0 border-[10px] md:border-[16px] border-white z-20 rounded-xl pointer-events-none" />
              <Image
                src={src}
                alt={`Memory ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
            </div>
          ))}

          {/* Duplicate for seamlessness */}
          {images.map((src, index) => (
            <div
              key={`extra-${index}`}
              className={cn(
                "relative flex-shrink-0 w-[280px] md:w-[450px] aspect-[1/1] rounded-xl overflow-hidden shadow-2xl bg-white group transition-transform duration-500 hover:scale-[1.02] z-10",
                index % 2 === 0 ? "rotate-2" : "-rotate-2"
              )}
            >
              <div className="absolute inset-0 border-[10px] md:border-[16px] border-white z-20 rounded-xl pointer-events-none" />
              <Image
                src={src}
                alt={`Memory extra ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
