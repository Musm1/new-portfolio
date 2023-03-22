import React from 'react'
import {motion} from "framer-motion"
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'

type Props={
    experiences: Experience[]
}

const WorkExperience = ({experiences}: Props) => {
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
    className='relative flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row px-18 justify-evenly'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>
        <div className='flex w-full p-10 space-x-5 overflow-x-auto snap-x snap-mandatory
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#49f70a]/80 mt-[100px]'>
           
           {experiences.map((experience)=>(
                <ExperienceCard key={experience._id} experience={experience}/>
           ))}
            
        </div>
    </motion.div>
  )
}

export default WorkExperience