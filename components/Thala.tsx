"use client"
import { Button } from '@headlessui/react'
import Image from "next/image";

import mainlogo from './logo.png'

import {motion} from 'framer-motion'

import { GoHome} from "react-icons/go";
import { IoPersonOutline, IoDocumentTextOutline } from "react-icons/io5";
import { GrSystem } from "react-icons/gr";
import { useState } from 'react';
export default function Thala() {
  const [hoveredHome,setHoveredHome]=useState(false)
  const [hoveredAbout,setHoveredAbout]=useState(false)
  const [hoveredProjects,setHoveredProjects]=useState(false)
  const [hoveredResume,setHoveredResume]=useState(false)
  return (
    <div>
      <div>
        <div className='grid grid-cols-2 '>
        <div className='pl-[32%] pt-[2.3%]'>
            <motion.div>
            
              <Image src={mainlogo} height={80} width={80} alt="mainlogo"/>
            
            </motion.div>
          </div>
          <div className='flex flex-row space-x-20 place-self-start pt-[24px]'>
            <motion.div onClick={()=>{
              location.href="/"
            }} className='flex flex-col cursor-pointer' onHoverStart={()=>setHoveredHome(true)} onHoverEnd={()=>setHoveredHome(false)}>
              <div className='flex flex-row space-x-1 '>
                <div className='pt-[2px]'>
                  <GoHome style={{color:'white',fontSize: '25px'} } />
                </div>
                <a className='text-white font-bold font-primaryFont text-2xl '>Home</a>
              </div>
              <div className={`border-t-4 border-blue-400 rounded-xl transition-all duration-300 ease-in-out ${hoveredHome?'w-full':'w-0' }`} ></div>
            </motion.div>
            <motion.div onClick={()=>{
              location.href="/about"
            }}
            className='flex flex-col cursor-pointer' onHoverStart={()=>setHoveredAbout(true)} onHoverEnd={()=>setHoveredAbout(false)}>
              <div className='flex flex-row space-x-1'>
                <div className='pt-[2px]'>
                  <IoPersonOutline style={{color:'white',fontSize: '25px'} } />
                </div>
                <a className='text-white font-bold font-primaryFont text-2xl'>About</a>
              </div>
              <div className={`border-t-4 border-blue-400 rounded-xl transition-all duration-300 ease-in-out ${hoveredAbout?'w-full':'w-0' }`} ></div>
            </motion.div>
            <motion.div onClick={()=>{
              location.href="/projects"
            }} className='flex flex-col cursor-pointer' onHoverStart={()=>setHoveredProjects(true)} onHoverEnd={()=>setHoveredProjects(false)}>
              <div className='flex flex-row space-x-1'>
                <div className='pt-[2px]'>
                  <GrSystem style={{color:'white',fontSize: '25px'} } />
                </div>
                <a className='text-white font-bold font-primaryFont text-2xl'>Projects</a>
              </div>
              <div className={`border-t-4 border-blue-400 rounded-xl transition-all duration-300 ease-in-out ${hoveredProjects?'w-full':'w-0' }`} ></div>
            </motion.div>
            <a href={process.env.NEXT_PUBLIC_RESUME_LINK}>
            <motion.div className='flex flex-col cursor-pointer' onHoverStart={()=>setHoveredResume(true)} onHoverEnd={()=>setHoveredResume(false)}>
              <div className='flex flex-row space-x-1'>
                <div className='pt-[2px]'>
                  <IoDocumentTextOutline style={{color:'white',fontSize: '25px'} } />
                </div>
                <p className='text-white font-bold font-primaryFont text-2xl'>Resume</p>
              </div>
              <div className={`border-t-4 border-blue-400 rounded-xl transition-all duration-300 ease-in-out ${hoveredResume?'w-full':'w-0' }`} ></div>
            </motion.div>
            </a>
        
          </div>
        </div>
      </div>
    </div>
  );
}
