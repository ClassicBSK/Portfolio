"use client"
import NextBgImage from 'next-bg-image';
import pfp from '../bg.jpg'
import Thala from '../../../components/Thala';
import prj1 from '../../../components/prj1.jpg'
import prj2 from '../../../components/prj2.png'
import prj3 from '../../../components/prj3.jpg'
import prj4 from '../../../components/prj4.jpg'
import prj5 from '../../../components/prj5.png'
import prj6 from '../../../components/prj6.jpg'
import prj7 from '../../../components/prj7.jpg'
import prj8 from '../../../components/prj8.jpeg'
import Image from 'next/image';
import {Card, CardHeader, CardBody} from "@heroui/react"
import { Button } from '@mui/material';
import { motion} from 'framer-motion'
import Contact from '../../../components/Contact';
import Footer from '../../../components/Footer';
export default function Project(){
    const text="Projects"
    const DURATION=0.25
    const STAGGER=0.025
    return (
        <NextBgImage src={pfp}>
            <div className='h-full w-full'>
                <div className='pt-[1%]'></div>
                <Thala/>
                <div className='flex justify-center py-10'>
                    <motion.a initial="hello" whileHover="hiii" className='relative block overflow-hidden whitespace-nowrap text-5xl font-black text-white uppercase '>
                            <div>
                            {text.split("").map((l,i)=>{
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
                            {text.split("").map((l,i)=>{
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
                <div className='grid grid-cols-3 px-4 justify-items-center space-y-7 px-[8%]'>
                    <motion.div
                    initial={{
                        scale:1
                    }}
                    whileHover={{
                        scale:1.05
                    }}
                    className='w-[300px]'>
                        
                        <Card className='py-4 border-2 border-dotted border-blue-400 w-[300px] rounded-xl'>
                            
                            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
                                <Image
                                src={prj1}
                                alt="Card background"
                                className="object-cover rounded-xl"
                                width={200}
                                />
                                <p className="text-tiny text-white italic uppercase font-bold pt-3">English to tamil translator</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 flex flex-col items-center">
                                <p className='text-white font-medium text-lg text-left pl-4 pb-2'> I made a english to tamil translator based on the transformer architecture specified in the attention is all you need paper.
                                The framewroks used for this project were Pytorch and Pandas. A research paper was published on this project in the ICMLDE 3.0 Procedia conference
                                </p>
                                <a href='https://github.com/ClassicBSK/English2Tamil'>
                                    <Button variant="contained"> View Project</Button>
                                </a>
                            </CardBody>

                        </Card>
                    </motion.div>
                    <motion.div
                    initial={{
                        scale:1
                    }}
                    whileHover={{
                        scale:1.05
                    }}
                    className='w-[300px]'>
                        
                        <Card className='py-4 border-2 border-dotted border-blue-400 w-[300px] rounded-xl'>
                            
                            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
                                <div className='h-[282px] flex items-center'>
                                    <Image
                                    src={prj2}
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    height={400}
                                    width={300}
                                    />
                                </div>
                                <p className="text-tiny text-white italic uppercase font-bold pt-1">LLM based chatbots for students</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 flex flex-col items-center">
                                <p className='text-white font-medium text-lg text-left pl-4 pb-2'> This project is an LLM based chatbots for students. This chatbot takes the data from our data structures book which was 
                                    specified in our college curriculum. This model utilises both the classic text methods and deep learning based embedding methods.
                                </p>
                                <a href='https://github.com/ClassicBSK/Studentgpt'>
                                    <Button variant="contained"> View Project</Button>
                                </a>
                            </CardBody>

                        </Card>
                    </motion.div>
                    <motion.div
                    initial={{
                        scale:1
                    }}
                    whileHover={{
                        scale:1.05
                    }}
                    className='w-[300px]'>
                        
                        <Card className='py-4 border-2 border-dotted border-blue-400 w-[300px] rounded-xl'>
                            
                            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
                                <div className='py-12'>
                                    <Image
                                    src={prj8}
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    width={250}
                                    />
                                </div>
                                <p className="text-tiny text-white italic uppercase font-bold pt-3">Dental Disease detection</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 flex flex-col items-center">
                                <p className='text-white font-medium text-lg text-left pl-4 pb-2'>
                                    This project gets the Image of the user's mouth and segements teeth and other features needed for classification using mask rcnn, identifies the disease using a Resnet50 and mask rcnn hybrid model and finally explains the disease identified using the gpt-2 llm.
                                </p>
                                <a href='https://github.com/ClassicBSK/DentalApp'>
                                    <Button variant="contained"> View Project</Button>
                                </a>
                            </CardBody>

                        </Card>
                    </motion.div>
                    <motion.div
                    initial={{
                        scale:1
                    }}
                    whileHover={{
                        scale:1.05
                    }}
                    className='w-[300px]'>
                        
                        <Card className='py-4 border-2 border-dotted border-blue-400 w-[300px] rounded-xl'>
                            
                            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
                                <div className='h-[282px] flex items-center'>
                                    <Image
                                    src={prj3}
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    height={400}
                                    width={300}
                                    />
                                </div>
                                <p className="text-tiny text-white italic uppercase font-bold pt-1">Brain Alzhimer Detection</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 flex flex-col items-center">
                                <p className='text-white font-medium text-lg text-left pl-4 pb-2'> In this project I have taken the EEG signals(time-series data) of patients with alzheimers 
                                    disease and used multiple deep learning algorithms to classify them. This project is more advanced than previous researches on this topic because it doesn't have a time constraint
                                    i.e., the duration of the signals can be of any length.
                                </p>
                                <a href='https://github.com/ClassicBSK/BrainAlzhimerDetection'>
                                    <Button variant="contained"> View Project</Button>
                                </a>
                            </CardBody>

                        </Card>
                    </motion.div>
                    <motion.div
                    initial={{
                        scale:1
                    }}
                    whileHover={{
                        scale:1.05
                    }}
                    className='w-[300px]'>
                        
                        <Card className='py-4 border-2 border-dotted border-blue-400 w-[300px] rounded-xl'>
                            
                            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
                                <div className='h-[282px] flex items-center'>
                                    <Image
                                    src={prj4}
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    height={400}
                                    width={300}
                                    />
                                </div>
                                <p className="text-tiny text-white italic uppercase font-bold pt-1">Android malware detection</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 flex flex-col items-center">
                                <p className='text-white font-medium text-lg text-left pl-4 pb-2'> 
                                    In this project I have built a model that classifies APKs as either malware or safe based on the methods, classes and the API calls. If classified as malware will then be classified into which malware familty it belongs to. I've used CNN and LSTM methods for this project.
                                </p>
                                <a href='https://github.com/ClassicBSK/APKMalwareDetector'>
                                    <Button variant="contained"> View Project</Button>
                                </a>
                            </CardBody>

                        </Card>
                    </motion.div>
                    <motion.div
                    initial={{
                        scale:1
                    }}
                    whileHover={{
                        scale:1.05
                    }}
                    className='w-[300px]'>
                        
                        <Card className='py-4 border-2 border-dotted border-blue-400 w-[300px] rounded-xl'>
                            
                            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
                                <div className='h-[282px] flex items-center'>
                                    <Image
                                    src={prj5}
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    height={400}
                                    width={300}
                                    />
                                </div>
                                <p className="text-tiny text-white italic uppercase font-bold pt-1">Education platform website</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 flex flex-col items-center">
                                <p className='text-white font-medium text-lg text-left pl-4 pb-2'> Spark is an educational institute that helps high school students ace their JEE and NEET 
                                    exams. We've built a website that allows students to know more about the educational institute and enroll themselves in it. The website was deployed by 
                                    creating a docker image of the project. The frameworks that were used on this project are FastAPI, NodeJS and React.
                                </p>
                                <a href='https://sparknitpy.onrender.com/'>
                                    <Button variant="contained"> View Project</Button>
                                </a>
                            </CardBody>

                        </Card>
                    </motion.div>
                    <motion.div
                    initial={{
                        scale:1
                    }}
                    whileHover={{
                        scale:1.05
                    }}
                    className='w-[300px]'>
                        
                        <Card className='py-4 border-2 border-dotted border-blue-400 w-[300px] rounded-xl'>
                            
                            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
                                <div className='h-[282px] flex items-center'>
                                    <Image
                                    src={prj6}
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    height={400}
                                    width={300}
                                    />
                                </div>
                                <p className="text-tiny text-white italic uppercase font-bold pt-1">Quantum Machine Learning</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 flex flex-col items-center">
                                <p className='text-white font-medium text-lg text-left pl-4 pb-2'> I implemented a set of basic quantum circuits and built a 
                                    Quantum SVM model which is a basic binary classification model. It basically classifies based on 255 features whether the considered liquid sample 
                                    has fungus or not.
                                </p>
                                <a >
                                    <Button variant="contained"> View Project</Button>
                                </a>
                            </CardBody>

                        </Card>
                    </motion.div>
                    <motion.div
                    initial={{
                        scale:1
                    }}
                    whileHover={{
                        scale:1.05
                    }}
                    className='w-[300px]'>
                        
                        <Card className='py-4 border-2 border-dotted border-blue-400 w-[300px] rounded-xl'>
                            
                            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
                                <Image
                                src={prj7}
                                alt="Card background"
                                className="object-cover rounded-xl"
                                width={200}
                                />
                                <p className="text-tiny text-white italic uppercase font-bold pt-3">Deepfake detection</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 flex flex-col items-center">
                                <p className='text-white font-medium text-lg text-left pl-4 pb-2'> This project addresses deepfake detection using advanced deep learning models, ResNet50 and Vision Transformer (ViT). Deepfakes, generated using AI to create realistic synthetic media, pose critical threats to privacy and information security</p>
                                <a href='https://www.github.com/ClassicBSK/Deepfake_detection'>
                                    <Button variant="contained"> View Project</Button>
                                </a>
                            </CardBody>

                        </Card>
                    </motion.div>
                </div>
                
            </div>
            <Contact/>
            <Footer/>
        </NextBgImage>
        
    );
}