import React from 'react'
import {motion} from "framer-motion"
import { Project } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    projects: Project[]
}

function Projects({projects}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    transition={{
        duration:1.5,
    }}
    whileInView={{
        opacity:1
    }}
    className='relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className='relative z-20 flex w-full overflow-x-scroll overflow-y-hidden 
        snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20  scrollbar-thumb-[#49f70a]/80'>
           {projects.map((project,i )=>(
            <div key={project._id} className='flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44'>
                <motion.img 
                initial={{
                    y:-300,
                    opacity:0,
                }}
                transition={{
                    duration:1.5,
                }}
                whileInView={{
                    opacity:1,
                    y:0,
                }}
                viewport={{
                    once:true,
                }}
                src={urlFor(project.image).url()}
                className="w-52 h-24 md:w-[700px] md:h-[400px]"
                alt=''/>
                <div className='max-w-2xl px-0 space-y-10 md:max-w-6xl md:px-10'>
                    <h4 className='text-sm font-semibold text-center md:text-2xl'>
                        <span className='underline decoration-[#49f70a]'>Case Study {i+1} out of {projects.length}:</span> {project.title}
                    </h4>
                    <div className='flex items-center justify-center my-2 space-x-2'>
                        {project.technologies.map((technology)=>(
                        <img 
                        key={technology._id}
                        src={urlFor(technology.image).url()}
                        className="w-10 h-10 rounded-full"
                        />
                        ))}
                    </div>
                    <p className='h-20 overflow-x-hidden overflow-y-scroll text-sm text-center md:text-lg scrollbar md:text-left scrollbar-track-[#60ac45] scrollbar-thumb-[#49f70a]'>
                        {project.summary}
                    </p>
                </div>
            </div>
           ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#60ac45]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects