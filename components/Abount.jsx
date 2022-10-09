import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function Abount() {
    return (
        <motion.div
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1.5
        }}
        className="h-screen flex relative flex-col md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto
        items-center text-center">
            <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">About</h3>
            <motion.div 
                initial={{
                    x:-200,
                    opacity:0
                }}
                whileInView={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    duration:1.2
                }}
                viewport={{once:true}}
                >
                <Image 
                    
                    src="/images/profile.jpg"
                    height={120} 
                    width={120} 
                    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 
                    xl:w-[500px] xl:h-[600px]"
                />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold ">A <span className="underline decoration-orange-500">title</span> background</h4>
                <p className="text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nobis illo dolore
                     consectetur, voluptas ipsam accusamus et. 
                    Voluptates numquam quaerat officiis voluptas magni quis, 
                    porro, dicta consequuntur non, eveniet ea?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nobis illo dolore
                     consectetur, voluptas ipsam accusamus et. 
                    Voluptates numquam quaerat officiis voluptas magni quis, 
                    porro, dicta consequuntur non, eveniet ea?
                </p>
            </div>
        </motion.div>
    )
}

export default Abount
