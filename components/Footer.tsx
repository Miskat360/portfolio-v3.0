import React from "react";
import MagicButton from "./ui/MagicButton";
import { GoArrowUpRight } from "react-icons/go";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="w-full pb-7 pt-16 md:pb-10 md:pt-28 relative overflow-hidden">
      <div className="w-full absolute left-0 -bottom-40">
        <img src="/footer-grid.svg" alt="grid" className="w-full xl:w-[90%]" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading max-w-[90vw] md:max-w-[75vw] lg:max-w-[60vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next lavel?
        </h1>
        <p className="text-white-200 my-5 md:mt-6 md:mb-8">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:bitwield@gmail.com">
          <MagicButton
            buttonText="Contact Me Now"
            icon={<GoArrowUpRight />}
            position="right"
          ></MagicButton>
        </a>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-between items-center mt-16 md:mt-28 gap-4">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          Copyright &copy;2024 Miskat Hasan
        </p>
        <div className="flex items-center gap-6">
          {socialMedia.map(({ id, img, link }) => (
            <div
              key={id}
              className="bg-black-200 w-10 h-10 flex items-center justify-center rounded-lg border border-black-300 backdrop-filter backdrop-blur-lg bg-opacity-75 saturate-150"
            >
              <a href={link} target="_blank">
                <img src={img} alt={img} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
