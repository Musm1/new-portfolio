import React from 'react'
import {motion} from "framer-motion"
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props= {
    pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div 
    initial={{
        x:200,
        opacity:0,
    }}
    transition={{
        duration:1.2
    }}
    whileInView={{
        x:0,
        opacity:1
    }}
    className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
        <h3 className='absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        
        <motion.img 
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        viewport={{
            once: true
        }}
        className="hidden sm:inline-flex -mb-20 md:mb-0 mt-[20px] md:mt-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
        src={urlFor(pageInfo?.heroImage).url()}
        />
        <div className='px-0 space-y-10 md:px-10'>
            <h4 className='text-lg font-semibold md:text-4xl'>Here is a <span className='underline decoration-[#49f70a]/50'>little</span> background</h4>
            <p className='text-sm'>
               {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}

export default About