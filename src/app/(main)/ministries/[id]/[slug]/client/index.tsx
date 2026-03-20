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

import { MinistriesData } from "../../../index.types";
import BaseContainer from "@/components/containers/base-container";
import AnimatedImageContainer from "@/components/containers/animated-image-container";
import Button from "@/components/buttons/button";

type Props = {
  data: MinistriesData;
  url: string;
};

const MinistriesSlugClient = (props: Props) => {
  const { data, url } = props;
  return (
    <BaseContainer>
      <AnimatedImageContainer imageSrc={`${url}${data.path}`}>
        <div className="z-10 w-full max-w-7xl px-10">
          <div className="flex flex-col text-white">
            <span className="text-5xl font-semibold">{data.name}</span>
            <span className="text-2xl font-medium">{data.description}</span>
          </div>
          <Button className="nowrap mt-10">Join {data.name} </Button>
        </div>
      </AnimatedImageContainer>
    </BaseContainer>
  );
};

export default MinistriesSlugClient;
