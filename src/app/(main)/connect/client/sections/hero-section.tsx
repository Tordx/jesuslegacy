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

import AnimatedImageContainer from "@/components/containers/animated-image-container";
import { useIsMobile } from "@/hooks/use-is-mobile";
import HeroButton from "@/components/buttons/hero-button";

interface HeroSectionProps {
  onConnectNowClick: () => void;
}

const HeroSection = ({ onConnectNowClick }: HeroSectionProps) => {
  const isMobile = useIsMobile();

  return (
    <AnimatedImageContainer
      position={isMobile ? "35% 100%" : "center"}
      imageSrc={`/assets/give.jpg`}
      height="150%"
    >
      <div className="z-10 w-full max-w-7xl px-10">
        <div className="flex flex-col text-left text-white font-bold text-7xl mb-10">
          <span className="text-5xl">In prayer, in faith.</span>
          <span className="">Let’s connect</span>
        </div>
        <HeroButton onClick={onConnectNowClick} label="Learn how you can Connect"/>
      </div>
    </AnimatedImageContainer>
  );
};

export default HeroSection;