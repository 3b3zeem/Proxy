import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Get App | Proxy",
  description: "Download the Proxy app for the latest updates and features.",
};

const getAppPage = () => {
  return (
    <div className="relative text-white">
      {/* Background */}
      <Image
        src="/app.webp"
        alt="Contact Background"
        fill
        priority
        className="object-cover md:object-[center_18%] object-center -z-10"
      />

      <div className="relative h-[200vh] flex flex-col items-center justify-between mx-auto font-[ARLRDBD] pt-20">
        <div className="px-4 py-10">
          <h1 className="text-2xl font-bold flex flex-col items-center justify-center mb-6">
            <span className="[word-spacing:10px]">
              Stay updated with our latest
            </span>
            <span className="[word-spacing:20px]">
              news Enjoy faster browsing
            </span>
            <span className="[word-spacing:5px]">
              Through our new application
            </span>
          </h1>
        </div>

        <div className="px-4 py-10 text-center">
          <p className="text-lg mb-6">Download the app now</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/appStore.webp"
                alt="Apple Store"
                className="mr-2 hover:scale-105 transition-all duration-200"
                width={170}
                height={24}
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/googlePlay.webp"
                alt="Apple Store"
                className="mr-2 hover:scale-105 transition-all duration-200"
                width={170}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default getAppPage;
