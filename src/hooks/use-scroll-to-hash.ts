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
import { useEffect } from "react";

/**
 * Scrolls smoothly to the element corresponding to the URL hash on mount.
 * @param offset Optional offset for the scroll position (default: -80)
 */
const useScrollToHash = (offset: number = -80) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const scrollToSection = () => {
      const section = document.getElementById(hash);
      if (section) {
        const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    // Use a short delay to ensure DOM is ready
    setTimeout(scrollToSection, 50);

    // Optional: scroll if the hash changes dynamically
    const onHashChange = () => scrollToSection();
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, [offset]);
};

export default useScrollToHash;