import React from 'react'

const Hero = () => {
  return (
    <div className={`flex items-start justify-end p-8 pb-20 gap-16 sm:p-20 text-white h-[100vh] font-[Lelevien]`}>
      <div className="">
        <div className="md:text-4xl text-3xl">WE ARE THE PROXY</div>
        <div className="md:text-3xl text-xl mt-2 flex flex-col gap-2">
          <span>MOTION GRAPHICS</span>
          <span>VISUAL EFFECTS</span>
          <span>PROGRAMMING</span>
        </div>
        <div className="md:text-xl text-lg mt-4">WITH INNOVATION</div>
      </div>
    </div>
  )
}

export default Hero
