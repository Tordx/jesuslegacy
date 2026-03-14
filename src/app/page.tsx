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
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Jesus Legacy Church to All Generations";
  const description = "Loving God, Loving People, Making Desciples";
  const image = "https://jesuslegacy.vercel.app/assets/cover.jpg";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://jesuslegacy.vercel.app/home`,
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
export default function Home() {
  redirect("/home");
}
