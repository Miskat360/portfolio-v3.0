import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative pb-8 md:pb-14 lg:pb-16">
      <TextGenerateEffect
        words="Kind words from satisfied clients"
        className="text-xl md:text-3xl lg:text-4xl text-center"
      />
      <div>
        <div className="flex"></div>
      </div>
    </section>
  );
};

export default Testimonials;
