import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full bg-black-100 bg-grid-[#090c22] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20">
        <div className="max-w-[89vw] md:max-w-[79vw] lg:max-w-[70vw] text-center">
          <h2 className="uppercase tracking-widest text-xs md:text-sm text-blue-100">
            dynamic web magic with next.js
          </h2>
          <TextGenerateEffect
            className="text-white text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="md:tracking-wider mb-4 text-blue-100 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Miskat, Full-stack developer
          </p>
          <a href="#about">
            <MagicButton className="" buttonText="See my work" icon={<GoArrowUpRight />} position="right"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
