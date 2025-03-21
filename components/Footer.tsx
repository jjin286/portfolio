import React from 'react'
import  MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from  "@/data/index"


const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 bg-[url(/footer-grid.svg)]' id='contact'>
        <div className='flex flex-col items-center' >
            <h1 className='heading lg:max-w-[45vw]'>Have any <span className='text-purple'>thoughts</span> or <span className='text-purple'>questions</span>?</h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Feel free to reach out to me through email in the button below.</p>
            <a href="mailto:j1jin286@gmail.com">
                <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 JaeWon</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturatee-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <a href={profile.link}>
                            <img src={profile.img} alt={profile.img} width={20} height={20}/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer