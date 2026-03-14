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

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  videoSrc: string;
  cover?: string;
  position?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const VideoContainer = ({
  children,
  videoSrc,
  cover = 'cover',
  position = 'center',
  autoPlay = true,
  loop = true,
  muted = true,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // Initialize scrollYProgress safely; useScroll can accept null refs
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // UseTransform hook called unconditionally
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div data-testid="video-container" ref={ref} className='relative w-full h-screen overflow-hidden'>
      {/* Fixed video always centered in viewport */}
      <motion.video
        className='fixed top-1/2 left-1/2 w-full h-250 max-w-none max-h-none -translate-x-1/2 -translate-y-1/2 object-cover'
        style={{
          objectFit: cover as React.CSSProperties['objectFit'],
          objectPosition: position as React.CSSProperties['objectPosition'],
          y,
        }}
        src={videoSrc}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
      />
      {/* Children overlay */}
      <div className='relative z-10 flex w-full h-full justify-center items-center'>
        {children}
      </div>
    </div>
  );
};

export default VideoContainer;