import Image from "next/image";
import React from "react";

const getAppPage = () => {
  return (
    <div className="min-h-[200vh] text-white flex flex-col items-center justify-between mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] px-6 lg:px-20 3xl:px-0 font-[ARLRDBD]">
      <div className="px-4 py-10">
        <h1 className="text-2xl font-bold flex flex-col items-center justify-center mb-6">
          <span className="[word-spacing:10px]">Stay updated with our latest</span>
          <span className="[word-spacing:20px]">news Enjoy faster browsing</span>
          <span className="[word-spacing:5px]">Through our new application</span>
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
            <Image src="/appStore.webp" alt="Apple Store" className="mr-2 hover:scale-105 transition-all duration-200" width={170} height={24} />
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/googlePlay.webp" alt="Apple Store" className="mr-2 hover:scale-105 transition-all duration-200" width={170} height={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default getAppPage;
