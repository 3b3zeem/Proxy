import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Details | Proxy",
  description: "Explore the details of our work at Proxy Media Studio.",
};

const DetailsPage = () => {
  return (
    <div className="relative h-[300vh] text-white font-[ARLRDBD]">
      <Image
        src="/workId.webp"
        alt="Work Background"
        fill
        priority
        className="object-cover md:object-[center_20%] object-[50%_center] -z-10"
      />

      <div className="relative z-10 max-w-4xl mx-auto pt-50 px-6 flex flex-col items-center">
        <div className="md:w-[800px] md:h-[500px] w-[300px] h-[300px] border border-white mb-12"></div>

        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-2xl font-bold mb-6 self-start">Project Name</h1>

          <p className="text-sm leading-6 mb-8 self-start">
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text
          </p>

          <div className="text-sm self-start space-y-1">
            <p>
              <span className="font-bold">VFX, photoshop, after effect</span>
            </p>
            <p>
              <span className="font-bold">Date</span> : 15 June 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
