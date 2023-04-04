import React from 'react'
import {FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Wrapper } from '../hoc';

const Contact = () => {
  return (
      <div className='flex sm:flex-row flex-col justify-around items-center'>
        <div className='m-12 mt-2'>
          <h3 className='p-2 pl-3 text-[22px] font-semibold'>@mohakcodes</h3>
          <p className='pb-2 pl-4 text-[18px]'>Feel free to connect <span className='text-[25px]'>&#x270C;</span> </p>
        </div>
        <div className='m-12 mt-0'>
          <h3 className='p-4 text-[20px] font-semibold'>Follow Me &nbsp; : )</h3>
          <div className='flex flex-row justify-center p-2 pl-1'>
            <div className='pr-2'>
              <a href="https://www.linkedin.com/in/mohak-chauhan/" target='_'><FaLinkedin size={30}/></a>
            </div>
            <div className='pl-2'>
              <a href="https://github.com/mohakcodes" target='_'><FaGithubSquare size={30}/></a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Wrapper(Contact , "contact")