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

import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

const TabButton = ({
  children,
  active = false,
  disabled = false,
  className = '',
  ...rest
}: Props) => {
  // Base styles
  const baseStyles =
    'px-6 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer focus:outline-none hover:scale-105 active:scale-100';

  // Variant styles
  const variantStyles = active
    ? 'bg-primary text-white hover:bg-primary-hover text-white shadow-md hover:bg-amber-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed'
    : 'bg-gray-100 text-neutral-700 hover:bg-amber-50 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed';

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TabButton;