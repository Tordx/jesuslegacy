"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";
import Footer from "@/navigation/footer";
import WebHeader from "@/navigation/web-header";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const mobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white relative">
      {/* Desktop Header */}
      {!mobile && <WebHeader />}

      {/* Mobile Hamburger */}
      {mobile && (
        <div className="fixed top-0 w-full flex justify-end p-4 bg-transparent z-40">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex flex-col gap-1.5 justify-center items-center w-8 h-8"
          >
            <span className="block w-full h-1 bg-white rounded" />
            <span className="block w-full h-1 bg-white rounded" />
            <span className="block w-full h-1 bg-white rounded" />
          </button>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobile && (
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
            {menuLinks.map((link) => (
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
      )}

      {children}
      <Footer />
    </main>
  );
}

export default Layout;