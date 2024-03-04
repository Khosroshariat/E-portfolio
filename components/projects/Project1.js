"use client";

import React, { Fragment, useState } from 'react'
import Projectmodal from '../modal/Projectmodal.js'

const Project1 = () => {
    const [shoModal, setShowModal] = useState(false)
  return (
 
    <div className='flex flex-col items-center justify-center  md:flex-row '>
        
        <Projectmodal isVisible={shoModal} onClose={() =>
        setShowModal(false)} />
        <div className='w-full p-4   md:w-1/4 cursor-pointer'>
            <img onClick={() => setShowModal(true)} className='w-[100%]' src="/project.jpg" alt="" />
        </div>
        <div className='w-full p-4   md:w-1/4 cursor-pointer'>
            <img onClick={() => setShowModal(true)} className='w-[100%]' src="/project.jpg" alt="" />
        </div>
        <div className='w-full p-4   md:w-1/4 cursor-pointer'>
            <img onClick={() => setShowModal(true)} className='w-[100%]' src="/project.jpg" alt="" />
        </div>
    </div>
   
  )
}

export default Project1