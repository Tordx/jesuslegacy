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

import Button from "@/components/buttons/button";
import VideoContainer from "@/components/containers/video-container";

const HeroSection = () => {
  return (
    <VideoContainer
      cover="100% 150%"
      position="center 30%"
      videoSrc="/assets/video/background.mp4"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="z-10 w-full max-w-7xl px-10">
        <div className="flex flex-col text-left text-white font-bold text-7xl mb-10">
          <span className="text-5xl">Welcome to</span>
          <span>Jesus Legacy Church</span>
        </div>
        <Button
          onClick={() => {
            const section = document.getElementById("what-we-do");
            if (section) {
              const yOffset = -80;
              const y =
                section.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        >
          Learn more about us
        </Button>
      </div>
    </VideoContainer>
  );
};

export default HeroSection;
