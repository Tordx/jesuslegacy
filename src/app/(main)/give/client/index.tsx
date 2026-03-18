"use client";

import AnimatedImageContainer from "@/components/containers/animated-image-container";
import BaseContainer from "@/components/containers/base-container";
import { useIsMobile } from "@/hooks/use-is-mobile";
import Button from "@/components/buttons/button";
import { useState } from "react";

const donationTypes = [
  { id: "giving", label: "Giving Box", content: "This is the Giving Box content." },
  { id: "transport", label: "Transport Box", content: "This is the Transport Box content." },
  { id: "kitchen", label: "Kitchen Box", content: "This is the Kitchen Box content." },
  // add more donation types here if needed
];

const GiveClient = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState(donationTypes[0].id);

  return (
    <BaseContainer>
      <AnimatedImageContainer
        position={isMobile ? "35% 100%" : "center"}
        imageSrc={`/assets/give.jpg`}
        height={"150%"}
      >
        <div className="z-10 w-full max-w-7xl px-10">
          <div className="flex flex-col text-left text-white font-bold text-7xl mb-10">
            <span className="text-5xl">xdfgkgks qp</span>
            <span>aqerlg qwelf f</span>
          </div>
          <Button
            onClick={() => {
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
          >
            asdktne qwe gfobks
          </Button>
        </div>
      </AnimatedImageContainer>

      <section
        id="give"
        className="w-full px-6 md:px-20 py-24 bg-white flex flex-col items-center gap-16 z-30"
      >
        {/* Section Header */}
        <div className="text-xl md:text-4xl text-amber-600 font-bold text-start w-full">
          xkgo qwegnb
          <div className="text-start flex flex-col w-full">
            <p className="text-neutral-600 text-lg">
              odfgpoerjq iofjfvjvb pweklsvcb erignqwrl qwoejoqg vjnv dfofbjd cvicivjerlw wejwkr
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full max-w-4xl flex gap-4 border-b border-neutral-200">
          {donationTypes.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-semibold transition-colors duration-200 ${
                activeTab === tab.id
                  ? "border-b-4 border-amber-600 text-amber-600"
                  : "text-neutral-600 hover:text-amber-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="w-full max-w-4xl mt-8 p-6 border rounded-lg shadow-sm bg-gray-50 text-neutral-800">
          {donationTypes.find((tab) => tab.id === activeTab)?.content}
        </div>
      </section>
    </BaseContainer>
  );
};

export default GiveClient;