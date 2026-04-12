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

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

import BaseContainer from "@/components/containers/base-container";
import HeroSection from "./sections/hero-section";
import DonationInfo from "./sections/connect-info";
import GivingBanner from "./sections/connect-banner";
import ChatButton from "@/components/buttons/chat-button";
import { ConnectFormData, FormTypes } from "../index.types";
import ConnectForm from "./components/connect-form";

const ConnectClient = () => {

  const [form, setForm] = useState<ConnectFormData>({
    name: "",
    email: "",
    contact_number: "",
    message: "",
    type: null,
  });
  const [chatOpen, setChatOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const toggleTawk = () => {
    const tawk = (window as any).Tawk_API;
    if (tawk && typeof tawk.maximize === "function") {
      tawk.maximize();
      setChatOpen(true);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const typeFromHash = form.type === hash;
    if (!typeFromHash) return;
  const TypesData: FormTypes[] = ["prayer", "volunteer", "general", null];
    const hashData = TypesData.find((t) => t === hash);
    if(hashData === undefined) return;

    setForm({ ...form, type: hashData });

    const scrollToSection = () => {
      const section = document.getElementById(hash);
      if (section) {
        const yOffset = -80;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    // Use a short delay to ensure DOM updated
    setTimeout(scrollToSection, 50);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Initialize Tawk script and callbacks
  useEffect(() => {
    if (typeof window === "undefined") return;

    (window as any).Tawk_API = window.Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    (window as any).Tawk_API.onLoad = function () {
      (window as any).Tawk_API.hideWidget();
      const unread = (window as any).Tawk_API.getUnreadCount();
      if (unread > 0) setUnreadCount(unread);
    };

    (window as any).Tawk_API.onChatMessageAgent = () =>
      setUnreadCount((prev) => (prev > 0 ? prev : 1));
    (window as any).Tawk_API.onChatMessageReceived = () => {
      const unread = (window as any).Tawk_API.getUnreadCount();
      setUnreadCount(unread > 0 ? unread : 1);
    };
    (window as any).Tawk_API.onChatMaximized = () => {
      setChatOpen(true);
      setUnreadCount(0);
    };
    (window as any).Tawk_API.onChatMinimized = () => {
      setChatOpen(false);
      (window as any).Tawk_API.hideWidget();
    };

    if (!document.getElementById("tawk-script")) {
      const s1 = document.createElement("script");
      s1.id = "tawk-script";
      s1.async = true;
      s1.src = "https://embed.tawk.to/69bc402f6b81021c34520db7/1jk3llemh";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      const s0 = document.getElementsByTagName("script")[0];
      s0.parentNode?.insertBefore(s1, s0);
    }
  }, []);

  return (
    <BaseContainer>
      <HeroSection
        onConnectNowClick={() => {
          const section = document.getElementById("give");
          if (section) {
            const yOffset = -80;
            const y =
              section.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }}
      />
      <DonationInfo />
      <section
        id="give"
        className="w-full px-6 md:px-20 py-20 bg-white flex flex-col items-center gap-16 z-30"
      >
        <div className="text-xl md:text-4xl text-amber-600 font-bold w-full text-left">
          Select Your Giving
          <p className="text-neutral-600 text-lg mt-2">
            Choose a ministry area and your preferred payment method to
            contribute.
          </p>
        </div>

        <div className="w-full h-0.5 bg-gray-200" />
          <div className="flex items-center justify-center w-full">
            <ConnectForm form={form} setForm={setForm} />
          </div>
      </section>

      <GivingBanner />
      <ChatButton
        chatOpen={chatOpen}
        toggleTawk={toggleTawk}
        unreadCount={unreadCount}
      />
    </BaseContainer>
  );
};

export default ConnectClient;
