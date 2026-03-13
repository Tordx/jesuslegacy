import ImageContainer from "@/components/containers/image-container";
import React from "react";
import HeroSection from "./sections/hero-section";
import BaseContainer from "@/components/containers/base-container";
import ChurchSummarySection from "./sections/church-summary-section";
import GallerySection from "./sections/gallery-section";
import { GetGalleryData } from "./index.type";

type Props = {
  data: GetGalleryData[];
};

function HomeClient({data}: Props) {

  return (
    <BaseContainer>
    <ImageContainer>
      <HeroSection />
    </ImageContainer>
    <ChurchSummarySection />
    <GallerySection images={data} />
    </BaseContainer>
    
  );
}

export default HomeClient;
