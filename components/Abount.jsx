import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function Abount() {
    return (
        <div className="h-screen flex relative flex-col md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto
        items-center">
            <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">About</h3>
            <motion.div 
                initial={{
                    x:-200
                }}
                whileInView={{
                    x:0
                }}
                transition={{
                    duration:1.2
                }}
                viewport={{once:true}}
            >
                <Image 
                    
                    src="/images/profile.jpg"
                    height={90} 
                    width={90} 
                    className="relative rounded-full mx-auto object-cover"
                />
            </motion.div>
            
        </div>
    )
}

export default Abount
