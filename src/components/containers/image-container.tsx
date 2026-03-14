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
import { useIsMobile } from '@/hooks/use-is-mobile';
import React from 'react'

type Props = {
  children: React.ReactNode;
  backgroundImage: string;
  cover?: string;
  position?: string;
}

const ImageContainer = ({children, backgroundImage, cover = "cover", position = 'center'}: Props) => {
  const isMobile = useIsMobile();
  return (
    <div className='flex w-full h-screen justify-center items-center'
      style={{
          backgroundImage,
          backgroundSize: cover,
          backgroundPosition: position,
          backgroundRepeat: 'no-repeat'
        }}
    >{children}</div>
  )
}

export default ImageContainer