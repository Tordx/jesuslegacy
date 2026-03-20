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

export const scrollToElement = (id: string, offset: number = -80) => {
  if (typeof window === "undefined") return;
  if (!id) return;

  const section = document.getElementById(id);
  if (section) {
    const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};