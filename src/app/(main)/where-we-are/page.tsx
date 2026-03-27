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

import BaseContainer from "@/components/containers/base-container";
import { useState } from "react";

export interface Location {
  name: string;
  src: string;
  address: string;
  schedule: string[];
}

export const maps: Location[] = [
  {
    name: "Santa Barbara, Pangasinan",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.855595150114!2d120.38838977519177!3d16.01758418465446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339143004b76b0af%3A0x10e7b2efd52dc58c!2sJesus%20Legacy%20Church!5e1!3m2!1sen!2sph!4v1774022065132!5m2!1sen!2sph",
    address: "Magno/Farmville Subdivision, Tuliao, Santa Barbara, Pangasinan 2419",
    schedule: ["2:00 PM - onwards"]
  },
  {
    name: "Baguio City, Benguet",
    src: "https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d187.3709345306193!2d120.5925982403455!3d16.41379298527266!2m2!1f159.26262337237247!2f0!3m2!1i1024!2i768!4f35.265812489884105!5e1!3m2!1sen!2sph!4v1774022220655!5m2!1sen!2sph",
    address: "MS Florendo Building, Abanao Corner, Baguio City, Benguet 2600",
    schedule: ["11:00 AM - onwards"]
  },
];

// components/MapViewer.tsx
import React from "react";

interface MapViewerProps {
  name: string;
  src: string;
}

const MapViewer: React.FC<MapViewerProps> = ({ name, src }) => (
  <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-139 w-full mx-12">
    <iframe
      title={name}
      src={src}
      className="w-full h-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

function Page() {
  const [selectedMap, setSelectedMap] = useState<Location>(maps[0]);

  return (
    <BaseContainer>
      <section
        id="locations"
        className="w-full px-6 md:px-20 py-20 bg-white flex flex-col items-center gap-16 z-30"
      >
        <div className="text-xl md:text-4xl text-amber-600 font-bold w-full text-left">
          Our Church Locations
          <p className="text-neutral-600 text-lg mt-2">
            We warmly invite you to join us in worship and fellowship at any of our locations.
          </p>
        </div>
        <div id={String(selectedMap.name)} className="w-full h-0.5 bg-gray-200" />

        <div className="flex flex-row gap-4 w-full p-6 rounded-lg">
          {/* Location List */}
          <div className="w-full relative">
            <div className="flex flex-wrap gap-4 w-full">
              <div className="py-6 flex flex-col gap-4 w-full">
                {maps.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => setSelectedMap(loc)}
                    className={`text-black h-16 cursor-pointer active:scale-100 hover:scale-102 flex items-center gap-3 p-3 rounded-md transition-all duration-150 ${
                      selectedMap.name === loc.name
                        ? "bg-amber-100 shadow-md font-bold"
                        : "hover:bg-gray-100 font-medium"
                    }`}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Map */}
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <MapViewer name={selectedMap.name} src={selectedMap.src} />
            <div className="text-left w-full font-medium">
              <strong>Service Time:</strong> {selectedMap.schedule.join(", ")}
            </div>
            <div className="text-left w-full font-medium">
              <strong>Address:</strong> {selectedMap.address}
            </div>
          </div>
        </div>
      </section>
    </BaseContainer>
  );
}

export default Page;