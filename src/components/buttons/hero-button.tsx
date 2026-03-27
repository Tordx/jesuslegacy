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

type Props = {
  label: string;
  onClick(): void;
  animated?: boolean;
};

const HeroButton = (props: Props) => {
  const { label, onClick, animated } = props;
  return (
    <button
      className={`border-3 border-white px-4 py-2 text-white font-semibold text-xl uppercase cursor-pointer hover:animate-none hover:scale-102 active:scale-100 ${animated ? "duration-750 animate-pulse" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default HeroButton;
