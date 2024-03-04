"use client";

import React from "react";
import { motion } from "framer-motion";

const Projectmodal = ({ isVisible, onClose }) => {
    if(!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id === "wrapper") onClose()
    }
 
  return (
   
    <div id="wrapper"
     className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-[100]
    flex justify-center items-center py-12 px-3 md:px-10 lg:px-32"
    onClick={handleClose}>

      
        
        <motion.div animate={{ 
          scale: [0,0.1,0.2,0.3,0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        }} 
        transition={{
          duration: 0.8
        }}
        className="relative  w-full h-full flex space-x-3 bg-slate-600 bg-opacity-45 p-3 ">
          
          <motion.img
          animate={{ 
            scale: [0,0.1,0.2,0.3,0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            borderRadius: ["40%","35%", "30%", "25%", "20%", "10%", "5%"],
          }} 
          transition={{
            duration: 0.9
          }}
           className="w-[50%] " src="/splash.jpg" alt="">
          </motion.img>
          <motion.div
          animate={{ 
            scale: [0,0.1,0.2,0.3,0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          }} 
          transition={{
            duration: 0.9
          }}
          className="w-[50%] space-y-4 flex flex-col justify-center">
          <h1 className="font-serif text-gray-200">Title</h1>
          <p className="font-sans font-light text-pretty">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            magnam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            magnam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            magnam.
          </p>
          <h1>Skills: html , css...</h1>
          <div className="space-x-2 hidden sm:flex">
          <a href="" target="_blabk">
            <img className="w-5" src="/github.png"/>
          </a>
          <a href="" target="_blabk">
            <img className="w-5" src="/Link.png"/>
          </a>
          </div>

          <div className="space-x-2 flex absolute bottom-6 left-6 sm:hidden">
          <a href="" target="_blabk">
            <img className="w-6 bg-slate-600 rounded-full overflow-hidden" src="/github.png"/>
          </a>
          <a href="" target="_blabk">
            <img className="w-6 bg-slate-600 rounded-full p-0.5" src="/Link.png"/>
          </a>
          </div>

          </motion.div>
          <button onClick={() => onClose()} 
          className="absolute animate-pulse -top-9 right-[50%] bg-sky-600 font-mono items-center border-sky-400 border 
          bg-opacity-85  px-2 rounded-full hover:font-extrabold hover:animate-none">
            X
            </button>
            <div className="p-[3px] animate-pulse bg-sky-400 absolute -top-0.5 -right-0.5"></div>
            <div className="p-[3px] animate-pulse bg-sky-400 absolute -top-0.5 -left-3.5"></div>
            <div className="p-[3px] animate-pulse bg-sky-400 absolute -bottom-0.5 -right-0.5"></div>
            <div className="p-[3px] animate-pulse bg-sky-400 absolute -bottom-0.5 -left-3.5"></div>
        </motion.div>
    </div>
     

  );
};

export default Projectmodal;
