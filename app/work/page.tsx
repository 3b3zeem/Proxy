import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Proxy | Work",
  description: "Explore our projects and creative works at Proxy Media Studio.",
};

const WorkPage = () => {
  return (
    <div className="flex justify-between flex-col mx-auto h-[200vh] xl:max-w-[1440px] lg:max-w-[1300px] px-6 lg:px-20 3xl:px-0 py-12 font-[Lelevien] pt-20">
      <div className="flex items-center justify-center flex-col text-4xl md:mt-20">
        <span>Our</span> Projects
      </div>

      <div className="flex  flex-col text-lg mb-8">
        <div className="flex items-start justify-center flex-wrap mb-8 gap-3 text-sm">
          <i className="border border-amber-300 p-2 rounded-tr-2xl rounded-bl-2xl">
            All Works
          </i>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-1 md:space-x-3">
            <span>2D Motion Graphics</span>
            <span>3D Animations</span>
            <span>3D Motion Graphics</span>
            <span>Commercials</span>
            <span>Infographics</span>
            <span>Intro</span>
            <span>Showreels</span>
            <span>TV Ident</span>
            <span>Visual Effects</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col text-lg mb-8 font-[GIL]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div className="space-y-2">
              <div className="border p-15"></div>
              <p>Lorem</p>
              <span>dolor sit amet</span>
            </div>
            <div className="space-y-2">
              <div className="border p-15"></div>
              <p>Lorem</p>
              <span>dolor sit amet</span>
            </div>
            <div className="space-y-2">
              <div className="border p-15"></div>
              <p>Lorem</p>
              <span>dolor sit amet</span>
            </div>
            <div className="space-y-2">
              <div className="border p-15"></div>
              <p>Lorem</p>
              <span>dolor sit amet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
