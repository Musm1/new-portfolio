import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion"
import Link from 'next/link'
import { Social } from '@/typings'

type Props={
  socials: Social[];
}

function Header({socials}: Props) {
  return (
  <header className='sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center'>

    <motion.div 
      initial={{
        x:-500,
        opacity: 0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
      className='flex flex-row items-center w-[200px]'>

      {/* social icons */}
      {socials?.map((social)=>(
         <SocialIcon 
         target={"blank"}
         key={social._id}
         url={social.url}
         fgColor='gray'
         bgColor='transparent'
         />
      ))}
     
    </motion.div>

  
    <motion.div 
      initial={{
        x:500,
        opacity: 0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
     >
        <Link href="/blogs" className='inline-flex mt-3 text-base text-gray-400 uppercase transition duration-300 ease-in-out md:mt-2 md:text-xl hover:text-lime-400'>My Blogs</Link>
    </motion.div>
  </header>
)}

export default Header