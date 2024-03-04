"use client";

import React from "react";

const Skills = () => {
  return (
    <div className="text-white padding mt-20 w-full h-full">
      <div className="flex flex-wrap w-full">
        <div className="w-[50%] md:w-[33%] lg:w-[25%] space-y-2 p-3 lg:mb-20">
          <div className="relative parent cursor-pointer w-10 p-2 bg-gray-700 bg-opacity-50 border border-sky-800 border-opacity-40 hover:border-opacity-100 hover:duration-300">
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -right-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -right-0.5 "></div>
            <img className="opacity-75 animate-pulse" src="/html.png" alt="" />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-800 to-sky-300 font-mono text-xl font-black">
            HTML5
          </h1>
          <h6 className="font-sans text-sm font-semibold text-pretty text-gray-400">
            Hypertext Markup Language, used for structuring and presenting
            content on the World Wide Web.
          </h6>
        </div>
        <div className="w-[50%] md:w-[33%] lg:w-[25%] space-y-2 p-3">
          <div className="relative parent cursor-pointer w-10 p-2 bg-gray-700 bg-opacity-50 border border-sky-800 border-opacity-40 hover:border-opacity-100 hover:duration-300">
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -right-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -right-0.5 "></div>
            <img className="opacity-75 animate-pulse" src="/css.png" alt="" />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-800 to-sky-300 font-mono text-xl font-black">
            CSS
          </h1>
          <h6 className="font-sans text-sm font-semibold text-pretty text-gray-400">
            Cascading Style Sheets, used for describing the look and formatting
            of a document written in HTML.
          </h6>
        </div>
        <div className="w-[50%] md:w-[33%] lg:w-[25%] space-y-2 p-3">
          <div className="relative parent cursor-pointer w-10 p-2 bg-gray-700 bg-opacity-50 border border-sky-800 border-opacity-40 hover:border-opacity-100 hover:duration-300">
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -right-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -right-0.5 "></div>
            <img className="opacity-75 animate-pulse" src="/js.png" alt="" />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-800 to-sky-300 font-mono text-xl font-black">
            JavaScript
          </h1>
          <h6 className="font-sans text-sm font-semibold text-pretty text-gray-400">
            Programming language that enables interactive web pages and is an
            essential part of web applications.
          </h6>
        </div>
        <div className="w-[50%] md:w-[33%] lg:w-[25%] space-y-2 p-3">
          <div className="relative parent cursor-pointer w-10 p-2 bg-gray-700 bg-opacity-50 border border-sky-800 border-opacity-40 hover:border-opacity-100 hover:duration-300">
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -right-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -right-0.5 "></div>
            <img className="opacity-75 animate-pulse" src="/typescript.png" alt="" />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-800 to-sky-300 font-mono text-xl font-black">
            TypeScript
          </h1>
          <h6 className="font-sans text-sm font-semibold text-pretty text-gray-400">
            TypeScript, a superset of JavaScript that adds static typing
            abilities to the language.
          </h6>
        </div>
        <div className="w-[50%] md:w-[33%] lg:w-[25%] space-y-2 p-3">
          <div className="relative parent cursor-pointer w-10 p-2 bg-gray-700 bg-opacity-50 border border-sky-800 border-opacity-40 hover:border-opacity-100 hover:duration-300">
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -right-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -right-0.5 "></div>
            <img className="opacity-75 animate-pulse" src="/react-icon.png" alt="" />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-800 to-sky-300 font-mono text-xl font-black">
            React
          </h1>
          <h6 className="font-sans text-sm font-semibold text-pretty text-gray-400">
            JavaScript library for building user interfaces, particularly
            single-page applications.
          </h6>
        </div>
        <div className="w-[50%] md:w-[33%] lg:w-[25%] space-y-2 p-3">
          <div className="relative parent cursor-pointer w-10 p-2 bg-gray-700 bg-opacity-50 border border-sky-800 border-opacity-40 hover:border-opacity-100 hover:duration-300">
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -right-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -right-0.5 "></div>
            <img className="opacity-75 animate-pulse" src="/redux.png" alt="" />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-800 to-sky-300 font-mono text-xl font-black">
            Redux
          </h1>
          <h6 className="font-sans text-sm font-semibold text-pretty text-gray-400">
            Predictable state container for JavaScript apps, often used with
            React.
          </h6>
        </div>
        <div className="w-[50%] md:w-[33%] lg:w-[25%] space-y-2 p-3">
          <div className="relative parent cursor-pointer w-10 p-2 bg-gray-700 bg-opacity-50 border border-sky-800 border-opacity-40 hover:border-opacity-100 hover:duration-300">
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -right-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -right-0.5 "></div>
            <img className="opacity-75 animate-pulse" src="/free-firebase.png" alt="" />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-800 to-sky-300 font-mono text-xl font-black">
            Firebase
          </h1>
          <h6 className="font-sans text-sm font-semibold text-pretty text-gray-400">
            Platform developed by Google for creating mobile and web
            applications.
          </h6>
        </div>
        <div className="w-[50%] md:w-[33%] lg:w-[25%] space-y-2 p-3">
          <div className="relative parent cursor-pointer w-10 p-2 bg-gray-700 bg-opacity-50 border border-sky-800 border-opacity-40 hover:border-opacity-100 hover:duration-300">
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -top-0.5 -right-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -left-0.5 "></div>
            <div className="absolute parent-semi p-[2px] bg-sky-400 -bottom-0.5 -right-0.5 "></div>
            <img className="opacity-75 animate-pulse" src="/nextjs.png" alt="" />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-800 to-sky-300 font-mono text-xl font-black">
            Next.js
          </h1>
          <h6 className="font-sans text-sm font-semibold text-pretty text-gray-400">
            An open-source web development framework providing React-based web
            applications with server-side rendering and static website
            generation.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Skills;
