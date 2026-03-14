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
import BaseContainer from "@/components/containers/base-container";
import HeroSection from "./sections/hero-section";
import WhoWeAreSection from "./sections/who-we-are-section";
import { AboutProps } from "../index.types";

function AboutClient(props: Readonly<AboutProps>) {
  const { data } = props;
  const url = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL;

  return (
    <BaseContainer>
      {/* Video section */}
      <div className="relative w-full h-screen overflow-hidden">
        <HeroSection />
        <div className="h-screen"></div>
      </div>
      {/* Alternating sections */}
      <WhoWeAreSection data={data}  url={url} />
    </BaseContainer>
  );
}

export default AboutClient;
