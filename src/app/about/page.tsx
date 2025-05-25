"use client"
import NextBgImage from 'next-bg-image';
import pfp from '../bg.jpg'
import Thala from '../../../components/Thala';
import Image from 'next/image';
import {motion} from 'framer-motion'
import { FaRegHandPointRight } from "react-icons/fa6";
import person from '../../../components/person.png'
import { FaJava,FaPython, FaReact,FaNodeJs, FaLinux   } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { IoGitBranch } from "react-icons/io5";
import { DiVisualstudio,DiPhotoshop  } from "react-icons/di";
import { SiTypescript,SiPytorch,SiTensorflow,SiHuggingface,SiScikitlearn,SiFastapi,SiPostman,SiMongodb,SiIntellijidea  } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import Tooltip from '@mui/material/Tooltip'
import Contact from '../../../components/Contact';
import Footer from '../../../components/Footer';

export default function About(){
    const professional="Professional"
    const skillset="skillset"
    const tools="tools"
    const iuse="used"
    const DURATION=0.25
    const STAGGER=0.025
    return (
        <NextBgImage src={pfp} >
            <div className='h-full w-full'>
                <div className='pt-[1%]'></div>
                <Thala />
                {/* Explain who I am */}
                <motion.div className='relative flex flex-row pl-[6%] relative pt-[5%]'
                    initial={{
                        opacity:0,
                        x:"-100%"
                    }}
                    whileInView={{
                        opacity:1,
                        x:"0%"
                    }}
                    transition={{
                        duration:0.7,
                        ease:"easeInOut"
                    }}>
                    
                    <div className='flex flex-col space-y-2'>
                        <div className="pl-[20%] pt-[8%] flex flex-row space-x-3">
                            <a className="text-white text-4xl font-semibold">Know Who</a> 
                            <a className="text-blue-400 text-4xl font-semibold">I'M</a> 
                        </div>
                        <div className="pl-[13%] pt-[8%] flex flex-row space-x-2">
                            <a className="text-white text-2xl font-medium">Hi everyone I'm</a> 
                            <a className="text-blue-400 text-2xl font-medium">Shivakumar B  </a> 
                            <a className="text-white text-2xl font-medium"> from</a> 
                            <a className="text-blue-400 text-2xl font-medium">India</a> 
                        </div>
                        <div className="pl-[13%] flex flex-row space-x-2">
                            <a className="text-white text-2xl font-medium">I am a Software engineering aspirant pursuing B.Tech in CSE at NIT PY</a> 
                        </div>
                        <div className="pl-[13%] pt-[2%] flex flex-row space-x-2">
                            <a className="text-white text-2xl font-medium">Apart from coding, these are the some other activities I love to do</a> 
                        </div>
                        <div className="pl-[15%] flex flex-col">
                            <div className='flex flex-row space-x-0.5'>
                                <FaRegHandPointRight className='pt-[4px]' style={{color:'white',fontSize: '28px'}}/>
                                <a className="text-white text-2xl font-medium">Gaming</a> 
                            </div>
                            <div className='flex flex-row space-x-0.5'>
                                <FaRegHandPointRight className='pt-[4px]' style={{color:'white',fontSize: '28px'}}/>
                                <a className="text-white text-2xl font-medium">Playing Basketball</a> 
                            </div>
                            <div className='flex flex-row space-x-0.5'>
                                <FaRegHandPointRight className='pt-[4px]' style={{color:'white',fontSize: '28px'}}/>
                                <a className="text-white text-2xl font-medium">Travelling</a> 
                            </div>
                            <div className='flex flex-row space-x-0.5'>
                                <FaRegHandPointRight className='pt-[4px]' style={{color:'white',fontSize: '28px'}}/>
                                <a className="text-white text-2xl font-medium">Solving puzzles(eg; 3x3-7x7 Cubes)</a> 
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className='pl-[12%] pt-[4%]'>
                        <Image src={person} height={500} width={480} alt="avatar"/>
                    </div>  
                </motion.div>
                <div>  
                    <div className=" pt-[8%] flex flex-row justify-center space-x-3">
                    
                        <motion.a initial="hello" whileHover="hiii" className='relative block overflow-hidden whitespace-nowrap text-5xl font-black text-white uppercase '>
                                <div>
                                    {professional.split("").map((l,i)=>{
                                        return(
                                            <motion.span
                                                variants={{
                                                    hello:{
                                                        y:0
                                                    },
                                                    hiii:{
                                                        y:"-100%"
                                                    }
                                                }}
                                                transition={{
                                                    duration:DURATION,
                                                    delay:STAGGER*i,
                                                    ease:"easeInOut"
                                                }}
                                                key={i}
                                                className='inline-block'>
                                                    {l}
                                            </motion.span>
                                        );
                                    })}
                                </div>
                                <div className='absolute inset-0'>
                                {professional.split("").map((l,i)=>{
                                        return(
                                            <motion.span
                                                variants={{
                                                    hello:{
                                                        y:"100%"
                                                    },
                                                    hiii:{
                                                        y:0
                                                    }
                                                }}
                                                transition={{
                                                    duration:DURATION,
                                                    delay:STAGGER*i,
                                                    ease:"easeInOut"
                                                }}
                                                key={i}
                                                className='inline-block'>
                                                    {l}
                                            </motion.span>
                                        );
                                    })}
                                </div>
                            </motion.a>
                            <motion.a initial="hello" whileHover="hiii" className='relative block overflow-hidden whitespace-nowrap text-5xl font-black text-blue-400 uppercase '>
                                <div>
                                    {skillset.split("").map((l,i)=>{
                                        return(
                                            <motion.span
                                                variants={{
                                                    hello:{
                                                        y:0
                                                    },
                                                    hiii:{
                                                        y:"-100%"
                                                    }
                                                }}
                                                transition={{
                                                    duration:DURATION,
                                                    delay:STAGGER*i,
                                                    ease:"easeInOut"
                                                }}
                                                key={i}
                                                className='inline-block'>
                                                    {l}
                                            </motion.span>
                                        );
                                    })}
                                </div>
                                <div className='absolute inset-0'>
                                {skillset.split("").map((l,i)=>{
                                        return(
                                            <motion.span
                                                variants={{
                                                    hello:{
                                                        y:"100%"
                                                    },
                                                    hiii:{
                                                        y:0
                                                    }
                                                }}
                                                transition={{
                                                    duration:DURATION,
                                                    delay:STAGGER*i,
                                                    ease:"easeInOut"
                                                }}
                                                key={i}
                                                className='inline-block'>
                                                    {l}
                                            </motion.span>
                                        );
                                    })}
                                </div>
                            </motion.a>
                            
                    </div>
                    <div className='px-[8%] grid grid-cols-5 gap-y-7 justify-items-center pt-[2%]'>
                        <Tooltip placement='top' title="Java">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <FaJava className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="C++">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <TbBrandCpp className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="Javascript">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <IoLogoJavascript className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="Python">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <FaPython className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="Typescript">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <SiTypescript className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="Pytorch">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <SiPytorch className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="Tensorflow">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <SiTensorflow className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="React">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <FaReact className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="NodeJS">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <FaNodeJs  className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="NextJS">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <RiNextjsFill  className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="HuggingFace">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <SiHuggingface  className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="Scikit-Learn">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <SiScikitlearn  className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="FastAPI">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <SiFastapi  className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="Git">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <IoGitBranch  className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip placement='top' title="MySQL">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <TbBrandMysql  className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div> 
                        </Tooltip>
                    </div>
                </div>
                <div>
                <div className=" pt-[5%] flex flex-row justify-center space-x-3">
                <motion.a initial="hello" whileHover="hiii" className='relative block overflow-hidden whitespace-nowrap text-5xl font-black text-white uppercase '>
                                <div>
                                    {tools.split("").map((l,i)=>{
                                        return(
                                            <motion.span
                                                variants={{
                                                    hello:{
                                                        y:0
                                                    },
                                                    hiii:{
                                                        y:"-100%"
                                                    }
                                                }}
                                                transition={{
                                                    duration:DURATION,
                                                    delay:STAGGER*i,
                                                    ease:"easeInOut"
                                                }}
                                                key={i}
                                                className='inline-block'>
                                                    {l}
                                            </motion.span>
                                        );
                                    })}
                                </div>
                                <div className='absolute inset-0'>
                                {tools.split("").map((l,i)=>{
                                        return(
                                            <motion.span
                                                variants={{
                                                    hello:{
                                                        y:"100%"
                                                    },
                                                    hiii:{
                                                        y:0
                                                    }
                                                }}
                                                transition={{
                                                    duration:DURATION,
                                                    delay:STAGGER*i,
                                                    ease:"easeInOut"
                                                }}
                                                key={i}
                                                className='inline-block'>
                                                    {l}
                                            </motion.span>
                                        );
                                    })}
                                </div>
                            </motion.a>
                            <motion.a initial="hello" whileHover="hiii" className='relative block overflow-hidden whitespace-nowrap text-5xl font-black text-blue-400 uppercase '>
                                <div>
                                    {iuse.split('').map((l,i)=>{
                                        return(
                                            <motion.span
                                                variants={{
                                                    hello:{
                                                        y:0
                                                    },
                                                    hiii:{
                                                        y:"-100%"
                                                    }
                                                }}
                                                transition={{
                                                    duration:DURATION,
                                                    delay:STAGGER*i,
                                                    ease:"easeInOut"
                                                }}
                                                key={i}
                                                className='inline-block'>
                                                    {l}
                                            </motion.span>
                                        );
                                    })}
                                </div>
                                <div className='absolute inset-0'>
                                {iuse.split("").map((l,i)=>{
                                        return(
                                            <motion.span
                                                variants={{
                                                    hello:{
                                                        y:"100%"
                                                    },
                                                    hiii:{
                                                        y:0
                                                    }
                                                }}
                                                transition={{
                                                    duration:DURATION,
                                                    delay:STAGGER*i,
                                                    ease:"easeInOut"
                                                }}
                                                key={i}
                                                className='inline-block'>
                                                    {l}
                                            </motion.span>
                                        );
                                    })}
                                </div>
                            </motion.a> 
                    </div>
                    <div className='px-[8%] grid grid-cols-5 gap-y-7 justify-items-center pt-[2%] pb-[2%]'>
                        <Tooltip title="Visual Studio Code">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <DiVisualstudio className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip title="Postman">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <SiPostman className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip title="Linux">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <FaLinux className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip title="MongoDB">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <SiMongodb className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                                <div>

                                </div>
                            </motion.div>
                        </Tooltip>
                        <Tooltip title="Photoshop">
                            <motion.div className='w-[200px] border-2 border-dotted border-blue-400 rounded-2xl '
                                initial={{
                                    scale:1,
                                }}
                                whileHover={{
                                    scale:1.05
                                }}>
                                
                                <div className='h-[120px] w-[180px] flex justify-center'>
                                    <DiPhotoshop className="self-center" style={{color:'white',fontSize: '60px'}}/>
                                </div>
                            </motion.div>
                        </Tooltip>
                    
                    </div>
                </div>
            </div>
            <div></div>
            <Contact/>
            <Footer/>
        </NextBgImage>
    );
}