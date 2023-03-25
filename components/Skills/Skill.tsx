import React from 'react'
import {motion} from "framer-motion"
import { Skill } from '@/typings'
import { urlFor } from '@/sanity';

type Props = {
    skill: Skill;
    directionRight?: boolean
}

function Skill  ({directionRight, skill}: Props) {
  return (
    <div className='relative flex cursor-pointer group'>
        <img
       
        src={urlFor(skill?.image).url()}
        alt=""
        className='object-cover w-16 h-16 transition duration-300 ease-in-out border-gray-500 rounded-full filter group-hover:grayscale'
        />
        <div className='absolute z-0 w-16 h-16 duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 tranisiton group-hover:bg-white '>
            <div className='flex items-center justify-center h-full'>
                <p className='text-xl font-bold text-black opacity-100'>
                    {skill.progress}%
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill;