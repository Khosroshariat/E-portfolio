import React from 'react'
import HeroContent from '../sub/HeroContent'
import Nav from '../sub/Nav'



const Hero = () => {
  return (
<>
    <div className='relative flex flex-col w-svw h-svh '>
      <Nav />
        <video
        autoPlay
        muted
        loop
        className='absolute rotate-180  left-0 z-[1] w-svw h-svh object-cover'
        >
            <source src='/video.mp4' type='video/mp4' />
        </video>
        <HeroContent />
    </div>
</>

  )
}

export default Hero