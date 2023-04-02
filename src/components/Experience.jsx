import React from 'react'

import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { Wrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExpCard = ({experience}) => {
  return(
    <VerticalTimelineElement
      contentStyle={{background:'#4a2599' , color:'#fff'}}
      contentArrowStyle={{borderRight:'7px solid #fff'}}
      date={experience.date}
      iconStyle={{background:experience.iconBg}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} alt={experience.company_name} 
              className='w-[80%] h-[80%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point,index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
        <div className='flex items-center justify-center pt-2'>
          <button
            className='bg-purple-300 p-2 text-slate-950 rounded-md
                        mr-4 font-semibold border-2 border-black
                        hover:bg-purple-700 hover:text-white hover:px-4'
          >
            <a href={experience.link} target='_blank'>Click Here</a>
          </button>
        </div>
      </ul>
    </VerticalTimelineElement>
  )
} 

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Things i did so far</p>
        <h2 className={styles.sectionHeadText}>Project Works</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience , index) => (
            <ExpCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Wrapper(Experience , "works")