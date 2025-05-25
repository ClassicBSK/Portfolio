import { FaGithub, FaInstagram,FaLinkedin  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { easeInOut, motion } from "framer-motion"; 
export default function Contact(){
    const DURATION=0.25
    const STAGGER=0.025
    const find="find" 
    const me="me" 
    const on="on"
    return(
        <div>
                <div className="pt-[7%] flex flex-col pb-[1%] justify-center">
                    <div className="flex flex-row space-x-2 self-center">
                        <motion.a initial="hello" whileHover="hiii" className='relative block overflow-hidden whitespace-nowrap text-5xl font-black text-white uppercase '>
                                <div>
                                    {find.split("").map((l,i)=>{
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
                                {find.split("").map((l,i)=>{
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
                            <motion.a initial="hello" whileHover="hiii" className='relative block overflow-hidden whitespace-nowrap text-5xl font-black text-white uppercase '>
                                <div>
                                    {me.split("").map((l,i)=>{
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
                                {me.split("").map((l,i)=>{
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
                            <motion.a initial="hello" whileHover="hiii" className='relative block overflow-hidden whitespace-nowrap text-5xl font-black text-white uppercase '>
                                <div>
                                    {on.split("").map((l,i)=>{
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
                                {on.split("").map((l,i)=>{
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
                    <div className="flex flex-row pt-[3%] self-center space-x-[30px]">
                        <a href="https://github.com/ClassicBSK">
                            <motion.div
                                whileHover={{
                                    scale:1.1
                                }}
                            >
                                <FaGithub style={{color:'white',fontSize: '35px'}} />
                            </motion.div>
                        </a>
                        <a href="https://www.instagram.com/bsk_.vercetti/">
                            <motion.div
                                whileHover={{
                                    scale:1.1
                                }}
                            >
                                <FaInstagram style={{color:'white',fontSize: '35px'}} />
                            </motion.div>
                        </a>
                        <a href="https://www.linkedin.com/in/shivakumar-b-509968284/">
                            <motion.div
                                whileHover={{
                                    scale:1.1
                                }}
                            >
                                <FaLinkedin style={{color:'white',fontSize: '35px'}} />
                            </motion.div>
                        </a>
                        <a href="mailto:absk2415@gmail.com">
                            <motion.div
                                whileHover={{
                                    scale:1.1
                                }}
                            >
                                <SiGmail style={{color:'white',fontSize: '35px'}} />
                            </motion.div>
                        </a>
                        
                         
                    </div>
                </div>
            </div>
    );
}