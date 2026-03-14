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
import Button from "@/components/buttons/button";
import BaseContainer from "@/components/containers/base-container";
import VideoContainer from "@/components/containers/video-container";
import { AboutProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
function AboutClient(props: AboutProps) {
  const { data } = props;
  const url = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL;

  return (
    <BaseContainer>
      {/* Video section */}
      <div className="relative w-full h-screen overflow-hidden">
        <VideoContainer
          cover="100% 150%"
          position="center 30%"
          videoSrc="/assets/video/background.mp4"
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="z-10 w-full max-w-7xl px-10">
            <div className="flex flex-col text-left text-white font-bold text-7xl mb-10">
              <span className="text-5xl">Welcome to</span>
              <span>Jesus Legacy Church</span>
            </div>
            <Button>Learn more about us</Button>
          </div>
        </VideoContainer>
        {/* Spacer to ensure content below is not hidden */}
        <div className="h-screen"></div>
      </div>

      {/* Alternating sections */}
      <div className="w-full px-4 md:px-20 mx-auto py-20 flex flex-col gap-20 justify-center items-center bg-white z-10">
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl md:text-4xl text-amber-600 font-bold text-start w-full"
        >
          WHO WE ARE AND WHAT WE DO
        </motion.div>
        {data.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={section.id}
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`w-full flex flex-col md:flex-row items-center justify-between gap-10 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`md:w-1/2 w-full flex  ${isEven ? "justify-start" : "justify-end"}`}
              >
                <Image
                  src={`${url}${section.image_src}`}
                  alt={section.title}
                  width={600}
                  height={400}
                  className="w-125 h-100 rounded-lg object-cover"
                  unoptimized
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col gap-4">
                <h2 className="text-4xl font-bold">{section.title}</h2>
                <p className="text-gray-700 text-lg">{section.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </BaseContainer>
  );
}

export default AboutClient;
