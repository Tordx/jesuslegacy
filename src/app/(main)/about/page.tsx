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

import AboutServices from "@/app/services/about-services";
import AboutClient from "./client";
import { Metadata } from "next";
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const title = "Jesus Legacy Church to All Generations - About";
  const description = "Know more about us, who we are, and what we do";
  const image = "https://jesus-legacy.vercel.app/assets/god-loves-you.jpg";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://jesus-legacy.vercel.app/about`,
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

async function About() {
  const data = await AboutServices.getAll();
  return <AboutClient {...data} />
}

export default About;
