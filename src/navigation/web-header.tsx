"use client";
import NavButton from "@/components/buttons/nav-button";
import { nav_items } from "@/constants";
import { useAnimation, motion } from "framer-motion";
import { redirect, usePathname } from "next/navigation";
import React from "react";

function WebHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const controls = useAnimation();
  const pathname = usePathname(); // get current route

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    controls.start({
      backdropFilter: isScrolled ? "blur(16px)" : "",
      backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0)",
      transition: { duration: 0.6, ease: "easeOut" },
    });
  }, [isScrolled, controls]);

  return (
    <motion.header className="fixed top-0 w-full h-20 z-30" animate={controls}>
      <nav className="w-full h-full flex items-center justify-end gap-6 p-10">
        {nav_items.map((item) => {
          if (pathname === "/home" && item.id === 0) return null;

          if (item.id === 0 && (pathname === "/home")) {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <NavButton
                  label={item.label}
                  onClick={() => redirect(item.path)}
                />
              </motion.div>
            );
          }
          return (
            <NavButton
              key={item.id}
              label={item.label}
              onClick={() => redirect(item.path)}
            />
          );
        })}
      </nav>
    </motion.header>
  );
}

export default WebHeader;
