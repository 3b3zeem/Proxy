import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Details | Proxy",
  description: "Explore the details of our work at Proxy Media Studio.",
};

const DetailsPage = () => {
  return (
    <div className="relative h-[300vh] text-white flex flex-col items-center justify-between mx-auto font-[ARLRDBD] pt-20">
      {/* Background */}
      <Image
        src="/workId.webp"
        alt="Work Background"
        fill
        priority
        className="object-cover md:object-[center_18%] object-center -z-10"
      />

      {/* Content */}
      <div className="text-3xl">DetailsPage</div>
    </div>
  );
};

export default DetailsPage;
