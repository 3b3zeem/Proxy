import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f6a73f] text-black py-6 border-t-8 border-cyan-400">
      <div className="mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] px-6 lg:px-20 3xl:px-0">
        <div className="flex justify-between items-center flex-wrap">
          <div className="md:text-lg text-[15px] font-[Lelevien]">
            <p>+955 5255 4455</p>
            <p className="md:text-xl text-[10px]">INFO@PROXYMED/STUDIO</p>
          </div>
          <div className="flex flex-col items-start justify-center gap-1 font-[Lelevien]">
            <p className="text-md">FOLLOW US AT</p>
            <div className="flex gap-2 justify-end mt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 bg-black text-white rounded-full"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 bg-black text-white rounded-full"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 bg-black text-white rounded-full"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <p className="text-center text-sm mt-1 font-[GIL] font-bold">
              © 2023 - all rights reserved by Proxy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
