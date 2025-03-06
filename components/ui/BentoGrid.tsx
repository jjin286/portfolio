"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react"
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import { SparklesCore } from "./sparkles";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from 'next/dynamic';
import { FlipWords } from "@/components/ui/flip-words"
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars"

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

/**
 * Display Bento grid
 *
 * @param {object} props
 * @param {string} props.className Any additional className
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 *
 * Hero -> BentoGrid
 */
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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};


/**
 * Display BentoGridItem
 *
 * @param {object} props
 * @param {string} props.className Any additional className
 * @param {string} props.title Title of BentoGridItem
 * @param {string} props.description Descript of BentoGridItem
 * @param {string} props.img Url of image
 * @param {string} props.imgClassName Any additional className for image
 * @param {string} props.spareImg Url of space image
 * @param {number} props.id Id of BentoGridItem
 *
 *
 */
export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string,
  imgClassName?: string,
  titleClassName?: string,
  spareImg?: string,
  id: number
}) => {
  const [copied, setCopied] = useState(false);
  const [opened, setOpened] = useState(false);

  const flipWords = ["development", "learning", "coding", "creating", "innovating", "solving"]

  const handleCopy = () => {
    navigator.clipboard.writeText("j1jin286@gmail.com");

    setCopied(true);
  }

  const handleOpen = () => {
    let fileName = 'Jaewon Jin Resume.pdf';
    window.open(`${fileName}`)

    setOpened(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center items-center'} h-full`}>
        {id === 1 && (
          <div className="flex items-center justify-center antialiased absolute h-full w-full top-0 bottom-0">
            <GlowingStarsBackgroundCard/>
          </div>
        )}
        <div className="w-full h-full absolute">
            {img && (
                <img
                    src={img}
                    alt={img}
                    className={cn(imgClassName, 'object-cover, object-center')}
                />
            )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
            {spareImg && (
                <img
                    src={spareImg}
                    alt={spareImg}
                    className={'object-cover, object-center w-full h-full'}
                />
            )}
        </div>
        {id === 6 && (
            <BackgroundGradientAnimation>
                  <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </BackgroundGradientAnimation>
        )}


        <div className={cn(
            titleClassName, `group-hover/
            bento: translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`
        )}>
          {id === 2 &&
          (
            <div className="h-full w-full flex flex-col items-center justify-center">
              <div className="w-[40rem] h-40 relative mb-5 -mt-10">

                <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
        )}
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                {title}
                {id === 4 && <FlipWords words={flipWords}/>}
            </div>
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ">
                {description}
            </div>
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              {['React.js', 'Next.js', 'Typescript'].map(
                (item => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-50 lg:opacity-100 rounded-lg text-center bg=[#10123e]">
                    {item}
                  </span>
                ))
                )}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
            </div>
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
              {['React.js', 'Next.js', 'Typescript'].map(
                (item => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-50 lg:opacity-100 rounded-lg text-center bg=[#10123e]">
                    {item}
                  </span>
                ))
                )}
            </div>
          </div>
        )}
        {id === 6 && (
          <div className="mt-5 relative">
            <div className={`absolute -bottom-5 right-0`}>
              <Lottie options={{
                loop: copied,
                autoplay: copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio : 'xMidYMid slice',
                }
              }}
                height={200}
                width={400}
              />
            </div>
            <MagicButton
              title = {copied ? 'Email copied' : "Copy my email"}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
            />
            <MagicButton
              title = {opened ? 'CV Opened' : "Open CV"}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleOpen}
            />
          </div>
        )}
        {id === 2 &&
          (
            <div className="h-full w-full flex flex-col items-center justify-center ">
              <div className="w-[40rem] h-40 relative mt-5 -mb-12">

                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
        )}
      </div>
    </div>
        </div>
  );
};
