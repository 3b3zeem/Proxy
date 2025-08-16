"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";
import type { FC } from "react";
import type { Settings } from "react-slick";

const Slider = dynamic(() => import("react-slick"), { ssr: false }) as unknown as FC<any>;

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-[30px] sm:right-[50px] -top-10 -translate-y-1/2 cursor-pointer text-white p-3 rounded border hover:bg-white hover:text-black transition-all z-10"
    >
      <ChevronRight size={18} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-[80px] sm:right-[110px] -top-10 -translate-y-1/2 cursor-pointer text-white p-3 rounded border hover:bg-white hover:text-black transition-all z-10"
    >
      <ChevronLeft size={18} />
    </div>
  );
};

const Projects = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-between p-8 pb-20 gap-16 sm:p-20 h-[130vh]">
      <h1 className="flex flex-col items-center md:text-4xl text-3xl sm:text-5xl font-[Lelevien]">
        <span>Our</span> Projects
      </h1>
      <div className="w-full max-w-sm md:max-w-5xl">
        <Slider {...settings}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i}>
              <div className="border h-32 w-32 cursor-pointer"></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
