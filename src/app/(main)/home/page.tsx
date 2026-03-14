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

import { Metadata } from "next";
import HomeClient from "./client";
import HomeServices from "@/app/services/home-services";
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Jesus Legacy Church to All Generations";
  const description = "Loving God, Loving People, Making Desciples";
  const image = "https://jesus-legacy.vercel.app/assets/cover.jpg";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://jesus-legacy.vercel.app/home`,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `jesus legacy church banner`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

async function Home() {
  const data = await HomeServices.getGallery();
  return <HomeClient data={data.data} />;
}

export default Home;
