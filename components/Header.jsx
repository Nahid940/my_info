import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'
function Header() {
    return (
        <header className="stcky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
            <motion.div
                initial={{
                    x:-500,
                    opacity:0,
                    scale:.5
                }}
                animate={{
                    x:0,
                    opacity:1,
                    scale:1
                }}
                transition={{
                    duration:1.5
                }}
             className="flex flex-row items-center text-gray-300 cursor-pointer">
                {/* social icons */}
                <SocialIcon url="https://www.linkedin.com/in/nahid940/"  bgColor="transparent" fgColor="gray"/>
                <SocialIcon url="https://github.com/Nahid940" bgColor="transparent" fgColor="gray"/>
                <SocialIcon url="https://gitlab.com/Nahid940" bgColor="transparent" fgColor="gray"/>
                <SocialIcon url="https://leetcode.com/nahid940/" bgColor="transparent" fgColor="gray"/>
            </motion.div>
            <motion.div
                initial={{
                    x:500,
                    opacity:0,
                    scale:.5
                }}
                animate={{
                    x:0,
                    opacity:1,
                    scale:1
                }}
                transition={{
                    duration:1.5
                }} className="flex flex-row items-center text-gray-300 cursor-pointer">
                {/* social icons */}
                <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent"/>
                <p className="uppercase hidden md:inline-flex text-sm">Get in touch</p>
            </motion.div>
        </header>
    )
}

export default Header
