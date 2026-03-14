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
import ImageContainer from "@/components/containers/image-container";
import HeroSection from "./sections/hero-section";
import BaseContainer from "@/components/containers/base-container";
import ChurchSummarySection from "./sections/church-summary-section";
import GallerySection from "./sections/gallery-section";
import { GetGalleryData } from "../index.types";
import BannerSection from "./sections/banner-section";

type Props = {
  data: GetGalleryData[];
};

function HomeClient({ data }: Readonly<Props>) {
  return (
    <BaseContainer>
      <ImageContainer backgroundImage="url('assets/cover.jpg')">
        <HeroSection />
      </ImageContainer>
      <ChurchSummarySection />
      <GallerySection images={data} />
      <BannerSection />
    </BaseContainer>
  );
}

export default HomeClient;
