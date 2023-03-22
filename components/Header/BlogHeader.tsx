import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const BlogHeader = () => {
  return (
    <header className='flex justify-between p-5 mx-auto max-w-7xl'>
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
          }}>
            <Link href="/" className='px-4 py-1 text-xl text-green-600 '>My Portfolio</Link>
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
         className='text-green-600'>
            <Link href="/#contacts" >
                <h3 className='px-4 py-1 border border-green-600 rounded-full'>
                    Contact
                </h3>
            </Link>
        </motion.div>
    </header>
  )
}

export default BlogHeader