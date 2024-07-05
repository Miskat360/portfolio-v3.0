import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { companies, testimonials } from "@/data";
import { TestimonialCards } from "./ui/TestimonialCards";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative pb-8 md:pb-14 lg:pb-16">
      <TextGenerateEffect
        words="Kind words from satisfied clients"
        className="text-2xl md:text-3xl lg:text-4xl text-center"
      />
        <div className="flex">
          {<TestimonialCards items={testimonials} speed="slow" direction="right"/>}
        </div>
        <div className="flex items-center justify-center gap-6 md:gap-14 flex-wrap mt-5 md:mt-12">
          {companies.map(({id, name, img, nameImg})=>(
            <div key={id} className="flex items-center gap-1">
              <img src={img} alt={name} className="w-5 md:w-10"/>
              <img src={nameImg} alt={nameImg} className="w-20 md:w-24"/>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Testimonials;
