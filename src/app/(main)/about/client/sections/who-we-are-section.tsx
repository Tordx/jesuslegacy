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

import {motion} from 'framer-motion'
import Image from 'next/image';
import { AboutSectionData } from '../../index.types';

type Props = {
  data: AboutSectionData[];
  url?: string;
};

const WhoWeAreSection = (props: Props) => {
  const { data, url } = props;
  return (
  <div
        id="what-we-do"
        className="w-full px-4 md:px-20 mx-auto py-20 flex flex-col gap-20 justify-center items-center bg-white z-10"
      >
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl md:text-4xl text-amber-600 font-bold text-start w-full"
        >
          WHO WE ARE AND WHAT WE DO
        </motion.div>
        {data.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={section.id}
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`w-full flex flex-col md:flex-row items-center justify-between gap-10 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`md:w-1/2 w-full flex  ${isEven ? "justify-start" : "justify-end"}`}
              >
                <Image
                  src={`${url}${section.path}`}
                  alt={section.title}
                  width={600}
                  height={400}
                  className="w-125 h-100 rounded-lg object-cover"
                  unoptimized
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col gap-4">
                <h2 className="text-4xl font-bold">{section.title}</h2>
                <p className="text-gray-700 text-lg">{section.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
  )
}

export default WhoWeAreSection