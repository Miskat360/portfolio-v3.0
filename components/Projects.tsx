import React from "react";
import { projects } from "@/data";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { PinContainer } from "./ui/3d-pinCard";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";


const Projects = () => {
  return (
    <section id="projects" className="relative py-8 md:py-14 lg:py-16">
      <TextGenerateEffect
        className="text-2xl md:text-3xl lg:text-4xl text-center"
        words="A small selection of recent projects"
      />
      <div className="relative flex flex-wrap">
        {projects.map(({ id, title, des, img, iconList, link }) => (
          <div key={id} className="md:basis-1/2 md:px-4 py-4">
            <PinContainer title={title} href={link}>
              <div className="w-full">
                <div className="relative bg-[#13162D] rounded-xl overflow-hidden">
                  <img src="./bg.png" alt="" />
                  <Image
                    src={img}
                    alt={img}
                    width={460}
                    height={0}
                    className="absolute top-1 xs:bottom-0 md:top-2 xl:top-auto xl:bottom-0 left-1/2 -translate-x-1/2"
                  />
                </div>
                <h1 className="text-xl md:text-3xl font-semibold mt-6 mb-3">{title}</h1>
                <p className="text-white-100 text-sm md:text-base">{des}</p>
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center">
                    {iconList.map((icon, index) => (
                      <div key={index} className={`border border-white/[0.2] p-1 w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-full ${icon !== iconList[0] && "-ml-2"} bg-[rgb(4,8,30)]`}>
                        <img src={icon} alt={icon} />
                      </div>
                    ))}
                  </div>
                  <div className="text-purple flex items-center gap-2">Check Live Site<GoArrowUpRight className="text-xl" /></div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
