'use client'

import React from "react";

const url = "https://www.google.com/maps/place/Toronto,+ON/@43.7161319,-79.6574642,10z/data=!4m6!3m5!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843!16zL20vMGg3aDY?entry=ttu"
const About = () => {

  return (
    <div className="text-white padding mt-10 w-full h-full">
      <div className="flex items-center justify-center flex-col w-full h-full gap-6 lg:flex-row">
        <img className="w-[40%] md:w-[50%] border-sky-700 border-4 hidden lg:flex" src="/2016.jpg" alt="" />
        <img className="w-[70%] md:w-[50%] border-sky-700 border-4 rounded-full p-1  lg:hidden" src="/2018.jpg" alt="" />

        <div className="w-[90%] p-2">
          <p
          className="text-pretty font-thin font-serif text-md leading-7 text-gray-300">
            I'm a passionate frontend developer with a flair for creating
            captivating and user-friendly web interfaces. Armed with expertise
            in HTML, CSS, and JavaScript, I specialize in transforming design
            concepts into seamless, responsive, and visually stunning
            experiences. My journey in frontend development is guided by a deep
            appreciation for the intersection of design and functionality. I
            thrive on the challenges of crafting pixel-perfect layouts,
            optimizing performance, and ensuring cross-browser compatibility.
            Keeping up with the latest trends and best practices, I am committed
            to delivering elegant solutions that enhance the overall user
            experience. Whether it's implementing intricate animations,
            enhancing accessibility, or collaborating with design teams, I bring
            creativity and precision to every project. Let's work together to
            bring your digital vision to life with an emphasis on cutting-edge
            frontend development!
          </p>
          <h1 className="mt-3 text-gray-400 font-mono">Email:{" "}
          <a href="mailto:khosroshariatzadeh@gmail.com" target="_blank" className="text-sky-500 font-serif p-2 hover:p-2 hover:rounded-md hover:duration-[300ms] hover:bg-sky-400 hover:bg-opacity-20">khosroshariatzadeh@gmail.com</a>
          </h1>
          <h1 className="mt-3 text-gray-400 font-mono">From:{" "}
          <a href={url}
          target="_blank" className="text-sky-500 font-serif p-2 hover:p-2 hover:rounded-md hover:duration-[300ms] hover:bg-sky-400 hover:bg-opacity-20">Toronto, Canada</a>
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export default About;
