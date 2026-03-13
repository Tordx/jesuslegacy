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
import { images, nav_items } from "@/constants";
import Image from "next/image";
import { redirect } from "next/navigation"; 
type Props = {};

function Header({}: Props) {
  return (
    <header className="fixed top-0 w-full h-18 z-30">
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
    </header>
  );
}

export default Header;
