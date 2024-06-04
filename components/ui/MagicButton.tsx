import React from "react";

const MagicButton = ({
  className,
  buttonText,
  icon,
  position,
  handleClick
}: {
  className?: string;
  buttonText: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void 
}) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-lg p-[1px] my-4 focus:outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-gradient-to-l dark:to-[#04071D] dark:from-[#0C0E23] md:px-[30px] px-[24px] md:py-[14px] py-[12px] text-sm lg:text-base font-medium text-white backdrop-blur-3xl gap-2 ${className}`}>
        {position === 'left' && icon}
        {buttonText}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
