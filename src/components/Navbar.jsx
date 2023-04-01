import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from "../styles"
import { navLinks } from "../constants"
import { logo1 , menu , close } from "../assets"

const Navbar = () => {

  const [Active , setActive] = useState("");
  const [Toggle , setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex-items-center py-4 fixed top-0 z-20 bg-primary`}>

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        <Link to="/"
              className='flex items-center gap-2'
              onClick={()=>{
                setActive("");
                window.scrollTo(0,0)
                }}>
            <img src={logo1} alt="logo" className='w-11 h-11 object-contain'/>
            <p className='text-white text-[17px] font-bold cursor-pointer'>
              Mohak Chauhan
              <span className='sm:block hidden'>
                @mohakcodes
              </span>
            </p>
        </Link>

        <ul className='list-none sm:flex flex-row gap-10 hidden'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                Active === nav.title ?
                "text-white" : "text-secondary"}
                 hover:text-white text-[18px] font-medium cursor-pointer`}
                 onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={Toggle ? close : menu} alt="toggle"
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=>{setToggle(!Toggle)}}
          />
        </div>

        <div className={`${!Toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex flex-col gap-4 justify-end items-start'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  Active === nav.title ?
                  "text-white" : "text-secondary"}
                     font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(!Toggle);
                  }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>
      
    </nav>
  )
}

export default Navbar