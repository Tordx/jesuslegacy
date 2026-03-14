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

import Footer from "@/navigation/footer";
import Header from "@/navigation/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default layout;
