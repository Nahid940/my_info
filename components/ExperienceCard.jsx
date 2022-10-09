import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function ExperienceCard() {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
         md:w-[600px] xl:w-[900px] snap-center
         p-10
        bg-[#292929] hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
        ">
            <motion.div
                iinitial={{
                    y:-100,
                    opacity:0
                }}
                whileInView={{
                    y:0,
                    opacity:1
                }}
                transition={{
                    duration:1.2
                }}
                viewport={{once:true}}
            >
                <Image  
                    src="/images/profile.jpg"
                    height={50} 
                    width={50} 
                    className=""
                />
            </motion.div>

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Job Title</h4>
                <p className="font-bold text-2xl mt-1">Paragraph</p>
                <div className="flex space-x-2 my-2">
                    <Image  
                        src="/images/profile.jpg"
                        height={5} 
                        width={5} 
                        className=""
                    />
                     <Image  
                        src="/images/profile.jpg"
                        height={5} 
                        width={5} 
                        className=""
                    />
                     <Image  
                        src="/images/profile.jpg"
                        height={5} 
                        width={5} 
                        className=""
                    />
                     <Image  
                        src="/images/profile.jpg"
                        height={5} 
                        width={5} 
                        className=""
                    />
                </div>
                <p className="uppercase py-5 text-gray-500"> 2012-2020</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard
