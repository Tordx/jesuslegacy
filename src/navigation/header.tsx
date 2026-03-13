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
import NavButton from "@/components/buttons/nav-button";
import { nav_items } from "@/constants";
import { useAnimation } from "framer-motion";
import { redirect } from "next/navigation"; 
import React from "react";
import {motion} from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const controls = useAnimation();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    controls.start({
      backdropFilter: isScrolled ? "blur(16px)" : "",
      backgroundColor:
        isScrolled ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0)",
      transition: { duration: 0.6, ease: "easeOut" },
    });
  }, [isScrolled, controls]);
  return (
    <motion.header className="fixed top-0 w-full h-20 z-30" animate={controls}>
      <nav className="w-full h-full flex items-center justify-end gap-6 p-10">
        {nav_items.map((item) => {
          return (
            <NavButton
              key={item.id}
              label={item.label}
              onClick={() => redirect(item.path)}
            />
          );
        })}
          {/* <div>
            <Image
              src={images.app_logo_bold}
              alt=""
              width={50}
              height={50}
              className="invert"
            />
          </div> */}
      </nav>
    </motion.header>
  );
}

export default Header;
