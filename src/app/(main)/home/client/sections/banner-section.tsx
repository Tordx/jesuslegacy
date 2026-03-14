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

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BannerSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // More movement range for larger image
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={ref}
      className="relative w-full h-150 overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-185 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
          y,
        }}
      />
    </section>
  );
};

export default BannerSection;