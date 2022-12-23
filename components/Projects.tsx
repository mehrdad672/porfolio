import React from 'react'
import Project from './Project'

type Props = {}

const Projects = (props: Props) => {
    const descriptions=['Linkedin clone using React, Redux, Tailwindcss, Framer-motion, Material UI, Authentication, Firebase',
  'Snappfood clone using React, Redux, Tailwindcss, Material UI, Authentication, Firebase']
  return (
    <div className='h-screen relative flex overflow-hidden  space-y-24 flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0   '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> projects </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 '>
           <Project image='https://s6.uupload.ir/files/linkedin_eeg2.png' title='Linkedin clone' description={descriptions[0]} link='https://linkedin-clone-fe171.web.app/' />
           <Project image='https://s2.uupload.ir/files/snappfood_0n1e.png' title='Snappfood clone' description={descriptions[1]} link='https://snappfoodclone-52ab4.web.app/' />
          
        </div>
        <div className="w-full  absolute top-[30%] md:top-[10%] bg-[#F7AB0A]/10 left-0 h-[200px] lg:h-[300px] -skew-y-12"></div>
    </div>
  )
}

export default Projects
