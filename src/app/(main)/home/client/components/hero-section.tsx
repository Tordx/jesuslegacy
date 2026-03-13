'use client'
import HeroButton from '@/components/buttons/hero-button'
import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className='flex w-full h-full items-center justify-between max-w-4/5'>
        <HeroButton  onClick={() => {}} label="our legacy"/>
        <HeroButton  onClick={() => {}} label="our locations"/>
    </div>
  )
}

export default HeroSection