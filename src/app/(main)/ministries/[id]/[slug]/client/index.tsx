import React from "react";
import { MinistriesData } from "../../../index.types";
import BaseContainer from "@/components/containers/base-container";
import AnimatedImageContainer from "@/components/containers/animated-image-container";
import Button from "@/components/buttons/button";
import BackgroundOverlay from "@/components/containers/background-overlay";

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
