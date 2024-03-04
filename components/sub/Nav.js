"use client";

import {
  linkAnimate,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";


const navLink = [
  {title: "About me", href: "#aboutme"},
  {title: "Skills", href: "#skills"},
  {title: "Projects", href: "#projects"},
  {title: "Contact", href: "#contact"}
]



const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen((prevOpen) => !prevOpen);
  // };

  const openMenu =() => {
    setIsOpen(true)
  }

  const closeMenu =() => {
    setIsOpen(false)
  }
  return (
    <motion.nav initial="hidden" animate="visible">
      <div className="z-[50] padding mt-2 text-white w-full h-[50px] fixed backdrop-blur-md">
        <div className="flex flex-row justify-between items-center w-full h-full">
          <motion.h1
            variants={slideInFromLeft(2)}
            className="text-1xl font-bold"
          >
            <a href="#">
              <span className="text-sky-400">K</span>hosro
            </a>
          </motion.h1>

          <motion.div
            variants={slideInFromTop}
            className="space-x-4 hidden md:flex"
          >
            <a className="menu__hover" href="#aboutme">
              About me
            </a>

            <a className="menu__hover" href="#skills">
              Skills
            </a>

            <a className="menu__hover" href="#projects">
              Projects
            </a>

            <a className="menu__hover" href="#contact">
              Contact
            </a>
          </motion.div>

          <motion.button variants={slideInFromTop} 
          className="md:hidden font-serif px-3 text-sm rounded-xl border-sky-600 border-[1px] bg-sky-900" 
          onClick={openMenu}>
            Menu
            </motion.button>
          <AnimatePresence>
          {
            isOpen && (

          <motion.div 
          initial= {{
            scaleY: 0
          }}
          animate= {{
            scaleY: 1,
            
          }}
          exit={{
            scaleY: 0
          }}
          transition={{
            duration: .5,
            ease: [0.15, 0, 0.39, 0]
          }}
          className="w-full h-screen fixed origin-top -top-2 left-0 bg-sky-900">
            
              <div className=" absolute top-[40%] left-[43%] ">

                <motion.div 
                variants={linkAnimate}
                className="flex flex-col items-center space-y-5">

                  {navLink.map((link, index) => (
                    <div className="overflow-hidden">
                    <motion.div
                    initial= {{
                      y: "20vh",
                    }}
                    animate= {{
                      y: 0
                    }}
                    transition={{
                      duration: 1
                    }}
                     >
                    <a key={index} href={link.href} onClick={closeMenu}
                    className="menu__hover text-gray-200 font-serif text-xl">
                      {link.title}
                      </a>
                    </motion.div>
                    </div>
                  ))}

                </motion.div>

              </div>
                <button className="absolute top-4 right-4 bg-sky-600 px-2
                 font-mono items-center hover:font-extrabold rounded-md hover:animate-spin " 
                onClick={closeMenu}>
                  X
                </button>
            
          </motion.div>
            )
          }
          </AnimatePresence>


          <motion.div variants={slideInFromRight(2)} className="flex space-x-2">
            <a href="https://github.com/Khosroshariat" target="_blank">
              <img className="w-7 link__hover" src="/gitimg.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/khosro-sh/" target="_blank">
              <img className="w-7 link__hover" src="/linkdin.png" alt="" />
            </a>
            <a href="/resume.pdf" target="_blank" type="pdf">
              <img className="w-8 link__hover " src="/resume.png" alt="" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
