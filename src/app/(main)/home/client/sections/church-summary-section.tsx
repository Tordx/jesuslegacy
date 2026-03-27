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
import { images } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const ChurchSummarySection = () => {
  return (
    <section className="w-full py-16 px-6 flex justify-center max-h-75">
      <div className="flex max-w-6xl flex-col md:flex-row items-center gap-10">
        <motion.div
          className="hidden md:flex justify-center  md:w-1/4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={images.app_logo}
            alt="Jesus Legacy Church Logo"
            width={250}
            height={250}
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 text-center md:text-left w-full md:leading-12 text-lg md:text-3xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Every path converges here for a reason greater than chance—you’re part
          of a story that didn’t write itself.
        </motion.div>
      </div>
    </section>
  );
};

export default ChurchSummarySection;
