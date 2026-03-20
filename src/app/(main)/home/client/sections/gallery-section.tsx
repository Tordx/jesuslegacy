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
import { GetGalleryData } from "../../index.types";
import { useIsMobile } from "@/hooks/use-is-mobile";

type Props = {
  images: GetGalleryData[];
};

const GallerySection = ({ images }: Props) => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL;

  const isMobile = useIsMobile();

  const loopImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden pt-4 pb-21 bg-black">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl text-amber-100 font-bold p-8"
      >
        GALLERY
      </motion.div>

      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: isMobile ? 8 : 50,
            repeat: Infinity,
          }}
        >
          {loopImages.map((src, i) => (
            <div
              key={src.id + i}
              className="relative w-75 h-125 shrink-0 overflow-hidden rounded-lg transition-all duration-500 hover:-translate-y-10 hover:rounded-2xl"
            >
              <Image
                src={`${url}/${src.path}`}
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
