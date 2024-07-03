import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({id, title, description, className, imgClassName, titleClassName, spareImg, img, bgImg}) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            className={className}
            img={img}
            bgImg ={bgImg}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
