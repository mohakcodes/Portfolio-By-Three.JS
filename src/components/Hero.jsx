import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {

  return (
    <section className='relative w-full h-screen mx-auto pb-0'>

      <div className={`${styles.paddingX} absolute inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#913eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I am <span className='text-[#915eff]'> Mohak </span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            I Love to Develop Web Applications, <br/>
            Frontend Interfaces & <br/>
            Practice Problem Solving
          </p>
        </div>

      </div>

      <ComputersCanvas/>

      <div className='absolute xs:bottom-2 bottom-24 w-full flex justify-center items-center'>
        <a href="#about" className=''>
          <div className='w-[25px] h-[45px] rounded-3xl border-2 border-white flex justify-center items-start'>
            <motion.dev
              animate={{
                y: [0, 25, 0]
              }}
              transition={{
                duration:1.2,
                repeat:Infinity,
                repeatType:'loop', 
              }}
              className="w-3 h-3 rounded-full bg-white mb-1" 
            />
          </div>
        </a>
      </div>

    </section>
  ) 
}

export default Hero