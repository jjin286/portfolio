import React from 'react'
import { PinContainer } from "@/components/ui/3d-pin";
import { projects } from "@/data/index";
import { FaLocationArrow } from 'react-icons/fa6';

/**
 * Displays the project section
 *
 * @returns {JSX.Element}
 *
 * Hero -> Projects -> PinContainer
 */
const Projects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            A small selection of projects
            <span className='text-purple'>

            </span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src='/bg.png' alt='bg-img'/>
                            </div>
                            <img src={img} alt={title} className='z-10 absolute -bottom-28 w-3/5 rounded-xl rotate-[15deg]'/>
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index *2} px)`}}>
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                                <FaLocationArrow  className='ms-3' color='#CBACF9'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects