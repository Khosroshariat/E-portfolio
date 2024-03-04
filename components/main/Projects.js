'use client'

import React, { useState } from 'react'
import Project1 from '../projects/Project1'
import Games from '../projects/Games'

const Projects = () => {
  const [project, showProject] = useState(true)
  const [game, showGame] = useState(false)

  const handleProjects = () => {
    showProject(true)
    showGame(false)
  }
  const handleGame = () => {
    showProject(false)
    showGame(true)
  }


  return (

    <div className='text-white padding mt-20 w-full h-full'>
      
      <div className='flex flex-col justify-center items-center w-full h-full space-y-6'>
        <ul className='flex justify-center items-center gap-6 font-semibold'>
          <li onClick={handleProjects} className={`${project ? "text-sky-500  border-sky-500 " : "text-gray-400 border-gray-500  "} 
          duration-300 border-b-2 pb-1  cursor-pointer hover:bg-slate-400 hover:bg-opacity-30 p-2 rounded-md
          `}>Projects</li>
          <li onClick={handleGame} className={`${game ? "text-sky-500 border-sky-500" : "text-gray-400 border-gray-500"} 
          duration-300 border-b-2 pb-1  cursor-pointer hover:bg-slate-400 hover:bg-opacity-30 p-2 rounded-md
          `}>Challenges and game</li>
        </ul>
        <div className='p-6 sm:p-4'>
        {project && <Project1 />}
        {game && <Games />}
        </div>
      </div>
    </div>
    
  )
}

export default Projects