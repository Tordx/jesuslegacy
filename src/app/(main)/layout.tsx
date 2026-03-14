"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";
import Footer from "@/navigation/footer";
import WebHeader from "@/navigation/web-header";
import React, { useState } from "react";
import MobileDrawer from "@/navigation/mobile-drawer";
import { nav_items } from "@/constants";
import MenuButton from "@/components/buttons/menu-button";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Readonly<Props>) {
  const mobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white relative">
      {/* Desktop Header */}
      {!mobile && <WebHeader menu={nav_items} />}
      {mobile && (
        <>
          <MenuButton onClick={() => setDrawerOpen(true)} />
          <MobileDrawer
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            menu={nav_items}
          />
        </>
      )}

      {children}
      <Footer />
    </main>
  );
}

export default Layout;
