/*
 * Jesus Legacy Church Project
 * Copyright (c) 2026 Jesus Legacy Church.
 *
 * This work is created for the ministry and mission of Jesus Legacy Church.
 * Redistribution, modification, or commercial use of any portion of this
 * project without written permission from Jesus Legacy Church leadership
 * is not permitted.
 *
 * All rights reserved.
 */

"use client";

import { useRef, useState } from "react";
import AnimatedImageContainer from "@/components/containers/animated-image-container";
import BaseContainer from "@/components/containers/base-container";
import Image from "next/image";
import { TestimoniesProp } from "../index.types";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import HeroButton from "@/components/buttons/hero-button";

function TestimoniesClient(props: TestimoniesProp) {
  const { data, url } = props;
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const GAP = 24;
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (index < 0 || index >= data.length) return;

    // 1. LARGE FIRST: Update state to trigger CSS expansion
    setCurrentIndex(index);

    // 2. THEN SCROLL: Wait for the expansion animation (500ms)
    // to finish before calculating the scroll position.
    setTimeout(() => {
      const container = containerRef.current;
      const target = itemRefs.current[index];

      if (!container || !target) return;

      const paddingLeft = parseInt(getComputedStyle(container).paddingLeft, 10);

      // Now that the item is LARGE, target.offsetLeft is the accurate
      // final position in the expanded layout.
      const targetOffset = target.offsetLeft;

      container.scrollTo({
        left: targetOffset - paddingLeft,
        behavior: "smooth",
      });
    }, 500); // This matches the 'duration-500' in your Tailwind classes
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) scrollToIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  };

  return (
    <BaseContainer>
      <AnimatedImageContainer imageSrc="/assets/testimonies_banner.jpg">
        <div className="z-10 w-full max-w-7xl px-10">
          <div className="flex flex-col text-left text-white font-bold text-4xl md:text-7xl mb-10">
            <span className="text-2xl md:text-5xl opacity-80">
              Stories of faith in
            </span>
            <span>Testimonies</span>
          </div>

          <HeroButton
            onClick={() => {
              const section = document.getElementById("Testimonies");
              if (section) {
                const yOffset = -80;
                const y =
                  section.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            label="Read Testimonies"
          />
        </div>
      </AnimatedImageContainer>
      <section className="w-full py-16 px-6 flex justify-center max-h-75 z-30 bg-white">
        <motion.div
          className="text-black flex flex-col gap-4 text-center md:text-center w-full md:leading-12 text-lg md:text-3xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hear how lives have been transformed through faith.
        </motion.div>
      </section>
      <section
        id="Testimonies"
        className="w-full flex flex-col items-center z-30 pt-4 pb-21 bg-neutral-950"
      >
        <div className="relative w-full  overflow-hidden">
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl text-amber-100 font-bold p-8"
          >
            TESTIMONIES
          </motion.div>
          {/* Controls */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute w-15 h-15 left-6 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 disabled:opacity-0 text-white p-4 rounded-full backdrop-blur-md transition-all"
          >
            ←
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === data.length - 1}
            className="absolute w-15 h-15 right-6 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 disabled:opacity-0 text-white p-4 rounded-full backdrop-blur-md transition-all"
          >
            →
          </button>

          {/* Scroll Track */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={containerRef}
            className="flex overflow-x-hidden"
            style={{
              gap: `${GAP}px`,
              paddingLeft: "1.75vw",
              paddingRight: "60vw",
            }}
          >
            {data.map((ministry, index) => {
              const isActive = index === currentIndex;

              return (
                <div
                  key={ministry.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`shrink-0 transition-all duration-500 ease-in-out origin-left 
                    ${isActive ? "" : "hover:cursor-pointer "}
                    ${isActive ? "w-[70vw] md:w-[50vw] z-20" : "w-[40vw] md:w-[30vw] z-10"}`}
                  onClick={() => scrollToIndex(index)}
                >
                  <div
                    className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
                      isActive ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative transition-all duration-500 ${isActive ? "h-125" : "h-95"}`}
                    >
                      <Image
                        src={`${url}${ministry.image_slug}`}
                        alt={ministry.title}
                        fill
                        className="object-cover"
                        unoptimized
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/assets/fallback.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(
                            `testimonies/${ministry.id}/${ministry.slug}`,
                          );
                        }}
                        className="text-xl md:text-3xl font-bold hover:underline transition-colors block text-left"
                      >
                        {ministry.title}
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-32 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                      >
                        {ministry.description && (
                          <p className="text-sm md:text-base text-white/80 line-clamp-2 text-left font-light">
                            {ministry.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </BaseContainer>
  );
}

export default TestimoniesClient;
