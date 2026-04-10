"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { config } from "@/data/config";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = config.photos.gallery;

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <Section className="py-32 max-w-7xl">
        <div className="text-center mb-20 md:mb-28">
          <motion.h2 
            className="font-heading text-5xl md:text-6xl text-[var(--color-brand-dark)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Moments
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, index) => {
            // Create a pseudo-masonry feel by making some images span slightly differently
            // We use simple conditionals here for demonstration aesthetics
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div
                key={index}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm group",
                  isLarge ? "aspect-[4/5] md:col-span-2 md:row-span-2" : "aspect-square"
                )}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                onClick={() => openLightbox(index)}
              >
                <div className="absolute inset-0 border-[6px] md:border-[12px] border-white z-10 pointer-events-none rounded-xl" />
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-90"
                />
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Lightbox Modal Focus */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-[var(--color-brand-gray)] hover:text-black transition-colors z-10 p-2"
              onClick={closeLightbox}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <button
              className="absolute left-2 md:left-12 text-[var(--color-brand-gray)]/50 hover:text-[var(--color-brand-gray)] transition-colors z-10 p-4"
              onClick={prevImage}
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>
            
            <motion.div 
              className="relative w-full max-w-5xl h-[70vh] md:h-[85vh] mx-16 shadow-2xl bg-white rounded-sm overflow-hidden p-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[selectedImage]}
                  alt={`Lightbox image ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            <button
              className="absolute right-2 md:right-12 text-[var(--color-brand-gray)]/50 hover:text-[var(--color-brand-gray)] transition-colors z-10 p-4"
              onClick={nextImage}
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
