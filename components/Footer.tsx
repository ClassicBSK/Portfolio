import { FaGithub, FaInstagram,FaLinkedin  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {motion} from 'framer-motion'
export default function Footer(){
    return(
        <div className="bg-gray-900">
            <div className="grid grid-cols-3 justify-items-center py-[1.4%]">
                <p className="text-white text-lg font-medium"> Designed and Developed by Shivakumar B</p>
                <p className="text-white text-lg font-medium">Copyright @ 2025 BSK</p>
                <div className="flex flex-row space-x-2">
                    <motion.a initial={{scale:1}} whileHover={{scale:1.1}} href="https://github.com/ClassicBSK"><FaGithub style={{color:'white',fontSize: '25px'}}/></motion.a>
                    <motion.a initial={{scale:1}} whileHover={{scale:1.1}} href="https://www.instagram.com/bsk_.vercetti/"><FaInstagram style={{color:'white',fontSize: '25px'}}/></motion.a>
                    <motion.a initial={{scale:1}} whileHover={{scale:1.1}} href="https://www.linkedin.com/in/shivakumar-b-509968284/"><FaLinkedin style={{color:'white',fontSize: '25px'}}/></motion.a>
                    <motion.a initial={{scale:1}} whileHover={{scale:1.1}} href="mailto:absk2415@gmail.com"><SiGmail style={{color:'white',fontSize: '25px'}}/></motion.a>
                </div>

            </div>
        </div>
    );
}