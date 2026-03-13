"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GetGalleryData } from "../index.type";

type Props = {
  images: GetGalleryData[];
}
const GallerySection = ({images}: Props) => {

  const NEXT_PUBLIC_SUPABASE_STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL
  return (
    <div className="w-full overflow-hidden pt-4 pb-21 bg-black">
      <div className="text-4xl text-amber-100 font-bold p-8">GALLERY</div>
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
            className="relative w-75 h-125 shrink-0 transform  overflow-hidden"
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
    </div>
  );
};

export default GallerySection;