"use client";
import ImageContainer from "@/components/containers/image-container";
import HeroSection from "./sections/hero-section";
import BaseContainer from "@/components/containers/base-container";
import ChurchSummarySection from "./sections/church-summary-section";
import GallerySection from "./sections/gallery-section";
import { GetGalleryData } from "./index.type";
import BannerSection from "./sections/banner-section";

type Props = {
  data: GetGalleryData[];
};

function HomeClient({ data }: Props) {
  return (
    <BaseContainer>
      <ImageContainer>
        <HeroSection />
      </ImageContainer>
      <ChurchSummarySection />
      <GallerySection images={data} />
      <BannerSection />
    </BaseContainer>
  );
}

export default HomeClient;
