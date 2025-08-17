import React from "react";

const AboutPage = () => {
  return (
    <div className="mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] px-6 lg:px-20 3xl:px-0 min-h-screen flex flex-col justify-start text-white font-[GIL] md:h-[200vh] h-[150vh] py-12 pt-20">
      <div className="flex items-center justify-evenly md:flex-row flex-col">
        <h1 className="font-bold flex flex-col md:mb-0 mb-10">
          <span className="md:text-5xl text-4xl font-[Lelevien] tracking-[7px]">PROXY</span>
          <span className="md:text-2xl text-xl tracking-[10px]">Media Studio</span>
        </h1>
        <div className="flex flex-col items-start md:border-l-2 md:pl-10 lg:pl-10 pt-10 border-l-0">
          <p className="text-lg mb-6">Hello There</p>
          <p className="text-md max-w-2xl md:w-[400px] text-wrap">
            At ProxyMedia Studio, we're not just a creative agency — we're a
            team of passionate artists, developers, and storytellers driven by a
            shared vision to craft powerful visual experiences that leave a
            lasting impact. Specializing in motion graphics, VFX, cutting-edge
            digital development, and motion graphics, we transform ideas into
            captivating content. Whether you're launching a new brand, producing
            an ad, or building a custom website or app, we work closely with you
            from concept to final delivery, infusing originality, precision, and
            bold storytelling — because in today's fast-paced world, standing
            out means everything.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
