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
import AnimatedImageContainer from "@/components/containers/animated-image-container";
import { TestimonyData } from "../../../index.types";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroButton from "@/components/buttons/hero-button";
import { scrollToElement } from "@/helpers/scroll-to-element";

type Props = {
  data: TestimonyData;
  url: string;
  slug: string;
};

const TestimoniesSlugClient = (props: Props) => {
  const { data, url, slug } = props;
  const router = useRouter();
  useEffect(() => {
    if (slug) {
      router.push(slug);
    }
  }, [slug, router]);
  const firstName = data.name.split(" ")[0];
  const possessiveName = firstName.endsWith("s")
    ? `${firstName}'`
    : `${firstName}'s`;
  return (
    <BaseContainer>
      <AnimatedImageContainer imageSrc={`${url}${data.image_slug}`}>
        <div className="z-10 w-full max-w-7xl px-10">
          <div className="flex flex-col text-white mb-10 gap-4">
            <span className="text-5xl font-semibold">{data.name}</span>
            <span className="text-2xl w-1/2 italic font-light">
              {data.description[0]}
            </span>
          </div>
          <HeroButton
            onClick={() => scrollToElement("testimonies")}
            label={`Read ${possessiveName} Testimony`}
          />
        </div>
      </AnimatedImageContainer>
      <div
        id="testimonies"
        className="flex flex-col gap-6 bg-gray-950 z-10 p-20"
      >
        {data.description.map((item, index) => {
          const isRight = index % 2 !== 0;

          return (
            <div
              key={item + index}
              className={`h-1/3 flex w-full ${isRight ? "justify-end" : "justify-start"}`}
            >
              <p
                className={`
            max-w-3xl
            text-xl md:text-2xl
            text-white
            italic
            leading-relaxed
            opacity-90
            ${isRight ? "text-right border-r-4 pr-6" : "text-left border-l-4 pl-6"}
            border-white/40
          `}
              >
                “{item}”
              </p>
            </div>
          );
        })}
      </div>
      <section
        className="relative w-full h-100 flex justify-start items-center"
        style={{ backgroundImage: `url('/assets/golden-hour.png')`, backgroundSize: 'cover', backgroundPosition: '50% 100%' }}
      >
        <div className="px-6 md:px-20">
          <div className="z-50 text-shadow-md w-full text-left text-white font-bold font-sans text-2xl md:text-4xl leading-snug tracking-tight max-w-4xl wrap-break-word mb-10">
            What God has done in your life can inspire others. Share your
            testimony below.
          </div>
          <HeroButton label="Share your testimony" onClick={() => {}} />
        </div>
      </section>
    </BaseContainer>
  );
};

export default TestimoniesSlugClient;
