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

import { footer_elements, images } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Transition } from "framer-motion";

function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // ✅ Correct transition type
  const transition: Transition = { duration: 0.8, ease: [0.42, 0, 0.58, 1] }; // easeOut cubic-bezier

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition },
  };

  return (
    <footer ref={ref} className="h-auto w-full flex flex-col bg-gray-800">
      <motion.div
        id="footer_links"
        className="w-full h-full flex items-start justify-between p-10 bg-gray-800"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <div className="w-1/4 flex items-center justify-center">
          <Image
            className="invert"
            src={images.app_logo}
            alt=""
            width={250}
            height={250}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-1/3 min-h-62.5">
          {footer_elements.social_links.map((link, index) => {
            const Icon = link.icon;

            return (
              <Link
                key={index}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 capitalize text-footer-link"
              >
                <Icon />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="w-1/3 flex justify-center items-start gap-12">
          {footer_elements.footer_links.map(({ header, links }) => (
            <div key={header}>
              <h4 className="font-bold text-xl text-white mb-4">{header}</h4>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <a
                      href={path}
                      className="text-sm text-white hover:text-orange-500 transition-colors"
                      target={path.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        path.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        id="footer_copyright"
        className="flex flex-row bg-gray-500 w-full h-full items-center justify-between text-xs font-medium text-gray-50 p-10"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <span>
          © {new Date().getFullYear()} All rights reserved - Jesus Legacy Church
        </span>
        <div className="grid grid-cols-2 text-center gap-4">
          <Link className="underline" href={"/terms-and-condition"}>
            Terms and conditions
          </Link>
          <Link className="underline" href={"/terms-and-condition"}>
            Privacy Policy
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
