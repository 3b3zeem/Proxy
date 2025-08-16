import React from "react";
import { Aperture, Box, Brush, Code, Film, PlaySquare } from "lucide-react";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 h-[100vh]">
      <h1 className="md:text-4xl text-3xl mb-10 font-[Lelevien]">Our Services</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 text-xl font-[GIL]">
        <div className="flex flex-col items-center">
          <PlaySquare className="text-amber-500 mb-2" size={40} />
          <span className="text-cyan-400">Motion Graphic</span>
        </div>
        <div className="flex flex-col items-center">
          <Box className="text-amber-500 mb-2" size={40} />
          <span className="text-cyan-400">3D Animations</span>
        </div>
        <div className="flex flex-col items-center">
          <Aperture className="text-amber-500 mb-2" size={40} />
          <span className="text-cyan-400">Visual Effects</span>
        </div>
        <div className="flex flex-col items-center">
          <Code className="text-amber-500 mb-2" size={40} />
          <span className="text-cyan-400">Programming</span>
        </div>
        <div className="flex flex-col items-center">
          <Film className="text-amber-500 mb-2" size={40} />
          <span className="text-cyan-400">Animation</span>
        </div>
        <div className="flex flex-col items-center">
          <Brush className="text-amber-500 mb-2" size={40} />
          <span className="text-cyan-400">Color correction</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
