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

import { ActivitiesData } from "../../../index.types";
import BaseContainer from "@/components/containers/base-container";
import AnimatedImageContainer from "@/components/containers/animated-image-container";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  data: ActivitiesData;
  url: string;
  slug?: string;
};

const ActivitiesSlugClient = (props: Props) => {
  const { data, url, slug } = props;
  const router = useRouter();

  useEffect(() => {
    if (slug) {
      router.push(slug);
    }
  }, [slug, router]);

  return (
    <BaseContainer>
      <AnimatedImageContainer imageSrc={`${url}${data.path}`}>
        <div className="z-10 w-full max-w-7xl px-10">
          <div className="flex flex-col text-white mb-10">
            <span className="text-2xl font-medium">{data.description}</span>
          </div>
        </div>
      </AnimatedImageContainer>
    </BaseContainer>
  );
};

export default ActivitiesSlugClient;
