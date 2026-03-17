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

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
  imageSrc: string;
  cover?: string;
  position?: string;
};

const AnimatedImageContainer = ({
  children,
  imageSrc,
  cover,
  position,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div
      data-testid="image-container"
      ref={ref}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Fixed image with parallax */}
      <motion.img
        src={imageSrc}
        alt=""
        className="fixed top-1/2 left-1/2 w-full h-[250%] max-w-none max-h-none -translate-x-1/2 -translate-y-1/2 object-cover"
        style={{
          objectFit: (cover as React.CSSProperties["objectFit"]) ?? "cover",
          objectPosition:
            (position as React.CSSProperties["objectPosition"]) ?? "center",
          y,
        }}
      />

      {/* Children overlay */}
      <div className="relative z-10 flex w-full h-full justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AnimatedImageContainer;