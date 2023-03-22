import { urlFor } from '@/sanity'
import { PageInfo } from '@/typings'
import Link from 'next/link'
import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from '../BackgroundCircles'

type Props= {
    pageInfo: PageInfo
}

function Hero({pageInfo}: Props) {
    
    const [text, count]= useTypewriter({
        words: [
            `Hi, My Name is ${pageInfo?.name}`,
            "Full-Stack Developer",
            "Front-End Web Developer",
            "Back-End Web Developer",
            "Mobile-App Developer"
        ],
        loop: true,
        delaySpeed: 3000,
    })

  return (
    <div className='flex flex-col items-center justify-center h-screen overflow-hidden text-center'>
        <BackgroundCircles/>
        <img 
        className='relative object-cover w-32 h-32 mx-auto rounded-full'
        src={urlFor(pageInfo?.heroImage).url()}
         alt=""/>
       <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 tracking-[8px] mt-4'>{pageInfo?.role}</h2>
        <h1 className='px-10 text-2xl font-semibold lg:text-4xl'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#49f70a'/>
        </h1>

        <div className='pt-5'>
            <Link href="#about">
                <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
                <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
                <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
                <button className='heroButton'>Projects</button>
            </Link>
            <Link href="#contacts">
                <button className='heroButton'>Contact</button>
            </Link>
        </div>

       </div>
    </div>
  )
}

export default Hero