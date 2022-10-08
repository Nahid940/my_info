import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackGroundCircle from './BackGroundCircle';
import {motion} from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
function Hero() {
    const [text,count]=useTypewriter({
        words: ['I am Nahid','Passionate','Dedicated','Focused','Love Coding</>'],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <motion.div
        initial={{
            opacity:0
        }}
        animate={{
            scale:[1,2,2,3,1],
            opacity:[.1,.2,.4,.8,.1,1.0],
            borderRadius:["20%","20%","50%","80%","20%"]
        }}
        transition={{
            duration:2.5
        }}
         className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackGroundCircle/>
            <Image 
                src="/images/profile.jpg"
                height={90} 
                width={90} 
                className="relative rounded-full mx-auto object-cover"
             />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px]">Software Engineer</h2>
                <h1 className="text-2xl lg:text-2xl font-semibold px-10">
                    <span>{text}</span>
                    <Cursor cursorColor="gray"/>
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link  href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                    
                </div>
            </div>
        </motion.div>
    )
}

export default Hero
