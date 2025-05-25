import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import Image from 'next/image'
import pfp from './boycmp.png'
import avatar from './avatar.png'
export default function FirstPage(){
    const roles=['Web Developer','Deep learning engineer','Competitive programmer']
    
    const LETTER_DELAY=0.025
    const BOX_FADE_DURATION=0.125

    const FADE_DELAY=5;
    const MAIN_FADE_DURATION=0.25

    const SWAP_DELAY_IN_MS=3500

    const [roleInd,setRoleInd]=useState(0);

    useEffect(()=>{
        const intervalid=setInterval(()=>{
            setRoleInd((pv)=>(pv+1)%roles.length)
        },SWAP_DELAY_IN_MS)

        return ()=> clearInterval(intervalid)
    },[]);
    return (
        <div className="flex flex-col space-y-10">
            {/* top part */}
            <div className="flex flex-row pl-[16%] ">
                {/* Hi animation */}
                <div className="pt-[12%] flex flex-col space-y-8 w-[400px]">
                    <div className="flex flex-row">
                        <a className="text-white text-4xl font-medium">Hi There!</a>
                        <motion.a 
                            initial={{
                                rotate:"0deg"
                            }}
                            animate={{
                                rotate:["0deg","25deg","0deg"]
                            }}
                            
                            transition={{
                                repeat:Infinity,
                                repeatType:"reverse",
                                repeatDelay:2
                            }}
                            className="text-white text-4xl font-medium">👋🏽</motion.a>
                    </div>
                    {/* Name */}
                    <div className="flex flex-row space-x-3">
                        <a className="text-white text-4xl font-medium">I am</a>
                        <a className="text-blue-400 text-4xl font-medium">Shivakumar B</a>
                        
                    </div>
                    {/* Roles */}
                    <span>
                        {roles[roleInd].split("").map((l,i)=>{
                            return(<motion.span 
                                    initial={{
                                        opacity:1
                                    }}
                                    animate={{
                                        opacity:0
                                    }}
                                    transition={{
                                        delay:FADE_DELAY,
                                        duration:MAIN_FADE_DURATION,
                                        ease:"easeInOut"
                                    }}
                                    key={`${roleInd}-${i}`} className="relative text-blue-400 text-4xl font-medium">
                                    <motion.span
                                        initial={{
                                            opacity:0
                                        }}
                                        animate={{
                                            opacity:1
                                        }}
                                        transition={{
                                            delay: i*LETTER_DELAY,
                                            duration:0,
                                            ease:"easeInOut"
                                        }}>{l}</motion.span>
                                    <motion.span 
                                        initial={{
                                            opacity:0
                                        }}
                                        animate={{
                                            opacity:[0,1,0]
                                        }}
                                        transition={{
                                            delay: i*LETTER_DELAY,
                                            times: [0,0.1,1],
                                            duration:BOX_FADE_DURATION,
                                            ease:"easeInOut"
                                        }}
                                        className="absolute bottom-[2px] left-[1px] right-0 top-[2px] bg-white"></motion.span>
                                </motion.span>)
                        })}
                    </span>
                </div>
                {/* icon me in computer */}
                <div className="pt-[6%] pl-[14%]">
                    <Image src={pfp} height={50} width={720} alt="boy image"/>
                </div>
            </div>
            <div className="pl-[20%] pt-[11%] flex flex-row space-x-6">
                <a className="text-white text-5xl font-semibold">LET ME</a> 
                <a className="text-blue-400 text-5xl font-semibold">INTRODUCE</a> 
                <a className="text-white text-5xl font-semibold">MYSELF</a>
            </div>
            {/* Explanation part */}
            <motion.div className="relative flex flex-row"
                initial={{
                    opacity:0,
                    x:"-100%"
                }}
                whileInView={{
                    opacity:1,
                    x:"0%"
                }}
                transition={{
                    duration:0.8,
                    ease:"easeInOut"
                }}
                >
                
                <div>
                    
                    <div className="pt-[8%] pl-[10%] flex flex-col space-y-5">
                        <a className="text-white text-3xl font-medium">I fell for programming, and I hope I’ve learned something along the way..😅</a>
                        <div>
                            <a className="text-white text-3xl font-medium">I am fluent in classics like</a> 
                            <a className="text-blue-400 text-3xl font-medium"> C, JAVA, Python, MySQL..</a> 
                            <a className="text-white text-3xl font-medium">(more to be added hopefully🤞🏽)</a> 
                        </div>
                        <div>
                            <a className="text-white text-3xl font-medium">My fields of interest are</a> 
                            <a className="text-blue-400 text-3xl font-medium"> AI, LLMS, Deep Learning, Web Development</a> 
                        </div>
                        <div className="flex flex-col space-y-1"> 
                            <a className="text-white text-3xl font-medium">I have vast experience in using popular frameworks like </a> 
                            <a className="text-blue-400 text-3xl font-medium">React, NextJS, NodeJS, FastAPI, Scikit-learn, Tensorflow, Pytorch, HuggingFace and OpenCV</a> 
                        </div>
                        
                    </div>
                </div>
                <div >
                    <Image src={avatar} height={500} width={580} alt="avatar"/>
                </div>
            </motion.div>
            
            
        </div>
    );
}