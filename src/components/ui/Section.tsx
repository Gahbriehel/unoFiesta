"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
  children?: React.ReactNode;
  delay?: number;
}

export function Section({ children, className, delay = 0, ...props }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn("py-20 px-6 md:px-12 max-w-5xl mx-auto", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
