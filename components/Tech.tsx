"use client";

import React from "react";

import { techRight, techLeft } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Tech = () => {
  return (
    <section id="tech" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={techRight}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={techLeft}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Tech;