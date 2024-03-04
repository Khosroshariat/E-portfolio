"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex felx-row items-center justify-center padding mt-20 w-full z-[20]"
    >
      <div className="show__text relative flex flex-row justify-center items-center ">
        <div className="flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div variants={slideInFromLeft(1)}>
            <h1 className="text-gray-300 font-bold text__font">
              Hey! I'm <span className="text-sky-400">Khosro</span>
            </h1>
          </motion.div>
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-sky-700 opacity-0.9"
          >
            <SparklesIcon className="text-sky-600 mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[18px]">Creative Web Developer</h1>
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.7)}
            className="flex flex-col gap-6 mt-6 font-bold text-white max__w w-auto h-auto"
          >
            <span className="text__font--para">
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-sky-400 to-blue-500">
                {" "}
                the best{" "}
              </span>{" "}
              project experience
            </span>
          </motion.div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-1xl font-medium text-gray-100 my-5 p-1 max__w--para"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            consequuntur, dolores praesentium voluptatum libero tenetur
            perferendis aut. Tempore voluptates ipsam nihil? Soluta quaerat iure
            totam error, blanditiis aliquid corrupti assumenda?
          </motion.p>
        </div>

        <div className="show__img">
          <motion.div className="" variants={slideInFromRight(1.5)}>
            <div className="absolute icons ">
              <motion.div
                variants={slideInFromRight(2.3)}
                className="absolute -top-7 right-[290%] icon-w z-10 p-1 bg-slate-800 bg-opacity-70 rounded-xl border border-slate-800"
              >
                <img src="/redux.png" alt="" />
              </motion.div>

              <motion.div
                variants={slideInFromLeft(2.1)}
                className="absolute top-8 lg:top-20 right-[160%] icon-w z-10 bg-slate-800 bg-opacity-70 rounded-xl border border-slate-800 p-2"
              >
                <img  src="/nextjs.png" alt="" />
              </motion.div>

              <motion.div
                variants={slideInFromLeft(2.5)}
                className="absolute htmh-top right-[320%] icon-w z-10 bg-slate-800 bg-opacity-70 rounded-xl border border-slate-800 p-2"
              >
                <img  src="/html.png" alt="" />
              </motion.div>

              <motion.div
                variants={slideInFromLeft(2.7)}
                className="absolute -bottom-11 right-[650%] md:right-[1350%] md:-bottom-32 lg:-bottom-40 lg:right-[1300%] icon-w z-10 bg-slate-800 bg-opacity-70 rounded-xl border border-slate-800 p-2"
              >
                <img  src="/css.png" alt="" />
              </motion.div>

              <motion.div
                variants={slideInFromLeft(2.3)}
                className="absolute top-48 right-[1200%] icon-w z-10 bg-slate-800 bg-opacity-70 rounded-xl border border-slate-800 p-2"
              >
                <img  src="/github.png" alt="" />
              </motion.div>
              <motion.div
                variants={slideInFromRight(2.2)}
                className="absolute -top-52 right-[450%] icon-w z-10 bg-slate-800 bg-opacity-70 rounded-xl border border-slate-800 p-2"
              >
                <img src="/react-icon.png" alt="" />
              </motion.div>
              <motion.div
                variants={slideInFromRight(2.1)}
                className="absolute -top-32 right-[110%] icon-w z-10 bg-slate-800 bg-opacity-70 rounded-xl border border-slate-800 p-1"
              >
                <img src="/free-firebase.png" alt="" />
              </motion.div>
              <motion.div
                variants={slideInFromLeft(1.8)}
                className="icon-w absolute -top-32 lg:-top-40 right-[500%] md:right-[1310%] z-10 p-2 bg-slate-800 bg-opacity-70 rounded-xl border border-slate-800"
              >
                <img src="/js.png" alt="" />
              </motion.div>
              <motion.div
                variants={slideInFromRight(2.3)}
                className="icon-w absolute -bottom-64 right-[760%] lg:-bottom-8 lg:right-[1350%] z-10 p-2 bg-slate-800 bg-opacity-70 rounded-xl border border-slate-800"
              >
                <img src="/typescript.png" alt="" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>


      <div className="absolute ">
        <a href="#">
          <motion.div
            animate={{
              y: -3,
              opacity: 1,
            }}
            initial={{
              y: 3500,
              opacity: 0.1,
            }}
            transition={{
              type: "spring",
              stiffness: 82,
              damping: 13,
            }}
            className="fixed w-0 h-0 bottom-3 right-3 cursor-pointer hover:border-b-sky-400 
         border-l-[25px] border-solid border-transparent border-r-[25px] border-b-[30px] border-b-sky-500"
          >
            <span className="absolute -bottom-7 -right-3 text-white text-xs font-serif ">
              Top
            </span>
          </motion.div>
        </a>
      </div>


    </motion.div>
  );
};

export default HeroContent;
