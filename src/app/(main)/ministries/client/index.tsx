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
import BaseContainer from "@/components/containers/base-container";
import Image from "next/image";
import { MinistriesProp } from "../index.types";
import { useRouter } from "next/navigation";
function MinistriesClient(props: MinistriesProp) {
  const { data, url } = props;
  const router = useRouter();
  return (
    <BaseContainer>
      {/* HERO */}
      <div className="relative w-full h-screen overflow-hidden">
        <AnimatedImageContainer imageSrc="/assets/banner.jpg">
          <div className="flex flex-col text-left text-white font-bold text-7xl mb-10">
            <span className="text-5xl">Welcome to</span>
            <span>Jesus Legacy Church</span>
          </div>
        </AnimatedImageContainer>
      </div>

      {/* MINISTRIES SECTION */}
      <section
        id="ministries"
        className="w-full px-6 md:px-20 py-24 bg-white flex flex-col items-center gap-16 z-30"
      >
        {/* Section Header */}
        <div className="text-xl md:text-4xl text-amber-600 font-bold text-start w-full">
          OUR MINISTRIES
          <div className="text-start flex flex-col w-full">
            <p className="text-neutral-600 text-lg">
              Each ministry serves as a place where believers grow in faith,
              fellowship, and service to God and the community.
            </p>
          </div>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {data.map((ministry) => (
            <div
              key={ministry.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-72">
                <Image
                  src={`${url}${ministry.path}`}
                  alt={ministry.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                  onError={(e) => {
                    e.currentTarget.src = "/assets/fallback.jpg";
                  }}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white flex flex-col gap-2">
                <button 
                  onClick={() => router.push(`ministries/${ministry.id}/${ministry.slug}`)}
                  className="text-left text-2xl font-semibold hover:underline cursor-pointer">
                  {ministry.name}
                </button>
                {ministry.description && (
                  <p className="text-sm text-white/90 line-clamp-2">
                    {ministry.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </BaseContainer>
  );
}

export default MinistriesClient;
