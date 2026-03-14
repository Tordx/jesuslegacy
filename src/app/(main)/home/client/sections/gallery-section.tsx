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

import Image from "next/image";
import { motion } from "framer-motion";
import { GetGalleryData } from "../index.type";

type Props = {
  images: GetGalleryData[];
};
const GallerySection = ({ images }: Props) => {
  const NEXT_PUBLIC_SUPABASE_STORAGE_URL =
    process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL;
  return (
    <div className="w-full overflow-hidden pt-4 pb-21 bg-black">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl text-amber-100 font-bold p-8"
      >
        GALLERY
      </motion.div>
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ opacity: 2 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="relative w-75 h-125 shrink-0 transform  overflow-hidden rounded-lg transition-all duration-500 hover:-translate-y-10 hover:rounded-2xl"
            >
              <Image
                src={`${NEXT_PUBLIC_SUPABASE_STORAGE_URL}/${src.path}`}
                alt={`carousel-${i}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GallerySection;
