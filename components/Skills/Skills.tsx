import React from 'react'
import {motion} from "framer-motion"
import Skill from './Skill'
import { Skill as SkillType} from '@/typings'

type Props = {
  skills: SkillType[];
}

function Skills({skills}: Props)  {
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
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
             Skills
        </h3>
        <h3 className='absolute tracking-[3px] top-36 uppercase text-gray-500 text-sm'>
            Hover over Skill for currency proficiency
        </h3>

        <div className='grid grid-cols-4 gap-5 md:mt-[30px] mt-[160px]'>
          {
            skills?.map(skill=> (
              <Skill key={skill._id} skill={skill}/>
            ))
          }
        </div>

    </motion.div>
  )
}

export default Skills