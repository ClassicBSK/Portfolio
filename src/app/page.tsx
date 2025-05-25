"use client"
import { Button } from '@headlessui/react'
import Image from "next/image";
import NextBgImage from 'next-bg-image';
import { Metadata } from 'next';
import {motion} from 'framer-motion'
import pfp from './bg.jpg'
import { GoHome} from "react-icons/go";
import { IoPersonOutline, IoDocumentTextOutline } from "react-icons/io5";
import { GrSystem } from "react-icons/gr";
import Thala from '../../components/Thala';
import FirstPage from '../../components/Home';
import Contact from '../../components/Contact';
import { useEffect, useState } from 'react';
import  Head  from 'next/head';
import Footer from '../../components/Footer';
export default function Home() {
  return (

    <NextBgImage src={pfp} >
      <div className='h-full w-full'>
        <div className='pt-[1%]'></div>
        <Thala />
        <FirstPage/>
        <Contact/>
        <Footer/>
      </div>
    </NextBgImage>
  );
}
