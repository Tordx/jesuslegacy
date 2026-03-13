import ImageContainer from '@/components/containers/image-container'
import React from 'react'
import HeroSection from './components/hero-section'

type Props = {}

function HomeClient({}: Props) {
  return (
    <ImageContainer>
      <HeroSection />
    </ImageContainer>
  )
}

export default HomeClient