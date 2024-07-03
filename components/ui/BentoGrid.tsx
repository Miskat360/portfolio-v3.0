"use client";
import { useState } from "react";
import { IoCheckboxOutline, IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import MagicButton from "./MagicButton";
import animationData from "@/data/confetti.json";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 lg:grid-rows-4 md:grid-rows-5 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
// interface socialMedia {
//   icon: String;
//   link: String;
// }
export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  bgImg,
  imgClassName,
  titleClassName,
  spareImg,
}: // socialMedia
{
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  bgImg?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  // socialMedia?: Array<socialMedia>;
}) => {
  const leftLists = ["ReactJS", "TypeScript", "PHP"];
  const rightLists = ["Laravel", "NextJS", "Tailwind CSS"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "bitwield@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        `row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none justify-between flex flex-col space-y-4 bg-[rgb(4,7,29)]`,
        className
      )}
    >
      <div
        className={`h-full ${id === 1 && "md:block flex"} ${
          id === 2 && "bg-bentoGrid2 bg-cover bg-bottom md:pb-14"
        } ${id === 6 && "md:block flex justify-center"}`}
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation />
        )}
        <div
          className={cn(
            titleClassName,
            `group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10`
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 ${
              id === 5 && "max-w-[25rem]"
            } font-bold z-10`}
          >
            {title}
          </div>
          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-4">
              <div className="flex flex-col gap-3 lg:gap-6 -mb-2">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 lg:gap-6 -mt-3">
                <span className="py-4 px-3 rounded-lg bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute right-0 -bottom-5 ${
                  copied ? "hidden" : "block"
                }`}
              >
                <img src="/confetti.gif" alt="confetti" />
              </div>
              <div className={`absolute -bottom-5 right-0 block`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                buttonText={
                  copied ? "Email is Copied!" : "Copy my email address"
                }
                icon={!copied ? <IoCopyOutline /> : <IoCheckboxOutline />}
                position="left"
                handleClick={handleCopy}
                className="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
