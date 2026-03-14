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

import React from "react";
import {motion} from 'framer-motion';
import { NavItems } from "@/types";
import Link from "next/link";

type Props = {
  drawerOpen: boolean;
  setDrawerOpen(e: boolean): void;
  menu: NavItems[]

};

const MobileDrawer = (props: Props) => {
  const {drawerOpen, setDrawerOpen, menu} = props;
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: drawerOpen ? "0%" : "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 flex flex-col p-6 gap-6"
    >
      <button
        onClick={() => setDrawerOpen(false)}
        className="self-end text-2xl font-bold"
      >
        ×
      </button>

      <nav className="flex flex-col gap-4">
        {menu.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => setDrawerOpen(false)}
            className="text-lg font-medium hover:text-orange-500 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
};

export default MobileDrawer;
