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

'use client'
import HeroButton from '@/components/buttons/hero-button'

type Props = {
  onClick(e: string): void
}

const HeroSection = ({onClick}: Props) => {
  return (
    <section className='hidden md:flex w-full h-full items-center justify-between max-w-4/5'>
        <HeroButton animated onClick={() => onClick('purpose')} label="our purpose"/>
        <HeroButton animated onClick={() => onClick('where-we-are')} label="our locations"/>
    </section>
  )
}

export default HeroSection