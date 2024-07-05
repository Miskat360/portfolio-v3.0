"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { workExperience } from "@/data";
import { cn } from "@/utils/cn";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <section>
      <TextGenerateEffect
        words="My Work Experince"
        className="text-2xl md:text-3xl lg:text-4xl text-center"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:px-5">
        {workExperience.map(({ id, title, desc, className, thumbnail }) => (
          <Button key={id} duration={Math.floor(Math.random() * 10000) + 10000} className="border-slate-800 cursor-default">
            <div
              className={cn(
                "flex flex-col md:flex-row items-center px-6 md:px-10 py-5 md:py-8 gap-6 border border-[#182235] rounded-[1.75rem] w-full h-full",
                className
              )}
            >
              <div className="self-start md:self-center">
                <img
                  src={thumbnail}
                  alt={thumbnail}
                  className="lg:w-36 md:w-20 w-16"
                />
              </div>
              <div className="text-start">
                <h1 className="text-xl md:text-2xl font-semibold mb-2">
                  {title}
                </h1>
                <p className="text-sm text-white-100">{desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
