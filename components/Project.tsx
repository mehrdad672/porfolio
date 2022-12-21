import Link from 'next/link'
import React from 'react'
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
 
type Props = {
    image?:string
    description?:string
    link?:string
    title?:string
}

const Project = ({image,description,link,title}: Props) => {
  return (
    <div className='w-full max-w-full flex-shrink-0  snap-center flex flex-col space-y-2 items-center justify-center mt-10 p-20 h-screen'>
    <img className='w-[400px] h-[300px] object-contain rounded-2xl ' src={image} alt="project" />
    <div className='space-y-5 px-0 md:px-10 max-w-6xl items-center flex flex-col justify-center '>
        <h4 className='text-2xl font-semibold text-center'>
          {title}
        </h4>
        <Popover>
      <PopoverHandler>
        <button className='bg-[#F7AB0A]/60 hover:bg-[#F7AB0A]/90 px-5 py-2 rounded-2xl text-gray-300 hover:text-gray-100 font-semibold hover:shadow-xl shadow-lg'>Click for Details</button>
      </PopoverHandler>
      <PopoverContent className='w-[80%] lg:w-[50%]' >
        <p className='font-semibold text-center'>{description}</p>
        
      </PopoverContent>
    </Popover>

        <a href={link}> <button className="heroButtons text-lg text-white border-gray-700  ">Visit</button></a>
        
    </div>
</div>
  )
}

export default Project