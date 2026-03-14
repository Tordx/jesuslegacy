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

type Variant = 'primary' | 'secondary' | 'outline';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  className = '',
  ...rest
}: Props) => {
  // Base styles
  const baseStyles =
    'px-6 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer hover:scale-105';

  // Variant styles
  const variantStyles: Record<Variant, string> = {
    primary:
      'bg-primary text-white hover:bg-primary-hover disabled:bg-gray-50 disabled:cursor-not-allowed',
    secondary:
      'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed',
    outline:
      'border border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;