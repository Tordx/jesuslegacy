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
import { ActivitiesProp } from "../index.types";
import { useRouter } from "next/navigation";
import HeroButton from "@/components/buttons/hero-button";
function ActivitiesClient(props: ActivitiesProp) {
  const { data, url } = props;
  const router = useRouter();
  return (
    <BaseContainer>
      <AnimatedImageContainer imageSrc="/assets/activities_banner.jpg">
        <div className="z-10 w-full max-w-7xl px-10">
          <div className="flex flex-col text-left text-white font-bold text-7xl mb-10">
            <span className="text-5xl">Come, see or join</span>
            <span>our Church Activities</span>
          </div>
          <HeroButton
            onClick={() => {
              const section = document.getElementById("Activities");
              if (section) {
                const yOffset = -80;
                const y =
                  section.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            label="Check our Church Activities"
          />
        </div>
      </AnimatedImageContainer>

      {/* Activities SECTION */}
      <section
        id="Activities"
        className="w-full px-6 md:px-20 p-10 bg-neutral-950 flex flex-col items-center gap-10 z-30"
      >
        {/* Section Header */}
        <div className="text-xl md:text-4xl text-amber-100 font-bold text-start w-full uppercase">
          Activities
          <div className="text-start flex flex-col w-full"></div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[140px] gap-2 w-full max-w-7xl">
          {data.map((activity, index) => {
            const spanPattern = [
              "row-span-2", // 1
              "row-span-3", // 2
              "row-span-4", // 3
              "row-span-6", // 5
            ];

            const span = spanPattern[index % spanPattern.length];

            return (
              <button
                key={activity.id}
                className={`group relative overflow-hidden shadow-md ${span} cursor-pointer rounded-lg`}
                onClick={() => {
                  router.push(`/activities/${activity.id}/${activity.slug}`)
                }}
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={`${url}${activity.path}`}
                    alt={activity.title}
                    onError={(e) => {
                      e.currentTarget.src = "/assets/fallback.jpg";
                    }}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-300" />

                {/* Content (Hover only) */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-white text-left">
                  {/* Title */}
                  <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-xl font-semibold">{activity.title}</h3>
                  </div>

                  {/* Description */}
                  {activity.description && (
                    <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      <p className="text-sm text-white/90 line-clamp-2">
                        {activity.description}
                      </p>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </BaseContainer>
  );
}

export default ActivitiesClient;
