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

const GivingBanner = () => {
  return (
    <section
      className="relative w-full h-100 flex justify-start items-center z-20 bg-black"
      style={{ backgroundImage: `url('/assets/give_banner.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <div className="absolute w-full h-full bg-black/15" />
      <div className="z-30 text-shadow-md w-full text-left text-white font-bold font-sans text-2xl md:text-4xl leading-snug tracking-tight px-6 md:px-20 max-w-4xl wrap-break-word">
        Giving goes beyond finances. You can serve, support, and make an
        impact in many ways—reach out to us to find how you can give.
      </div>
    </section>
  );
};

export default GivingBanner;