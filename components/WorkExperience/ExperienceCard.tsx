import React from 'react'
import {motion} from "framer-motion"
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience
};

export default function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
     snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden cursor-pointer'>
        <motion.img
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            opacity:1,
            y:0,
        }}
        viewport={{
            once:true,  
        }}
        src={urlFor(experience?.companyImage).url()}
        className='w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] 
        object-cover object-center'
        alt=""
        >
        </motion.img>
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light text-center '>{experience.jobTitle}</h4>
            <p className='mt-1 text-xl font-bold text-center'>{experience.company}</p>
            <div className='flex items-center justify-center my-2 space-x-2'>
                {experience.technologies.map((technology)=>(
                    <img 
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    className="items-center justify-center w-10 h-10 rounded-full"
                    />
                ))}
            </div>
            <p className='py-5 text-center text-gray-300 uppercase'>
                {new Date(experience.dateStarted).toDateString()} -{" "}
                {experience.isCurrentlyWorkingHere
                    ? "Present"
                    : new Date(experience.dateEnded).toDateString()
                }
            </p>

            <ul className='ml-5 text-center md:text-left space-y-4 overflow-y-scroll text-lg list-disc h-72 scrollbar-thin scrollbar-thumb-[#49f70a] scrollbar-track-[#54a437]'>
                {experience.points.map((point, i)=>(
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}