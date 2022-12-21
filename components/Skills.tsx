import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import {FaReact}  from 'react-icons/fa'
import {SiTailwindcss ,SiJavascript} from 'react-icons/si'
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
    
    className="h-screen flex relative flex-col md:text-left xl:flex-row max-w-full xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center text-center  ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  md:gap-5 pt-28 ">
        <Skill directionleft={false} level='Advanced' title='React Js' logoUrl='https://kobaltsolutions.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-08-at-4.06.03-PM.png'  />
        <Skill directionleft={false} level='Advanced' title='Javascript' logoUrl='https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png' />
        <Skill directionleft={false} level='Advanced' title='Tailwind css' logoUrl='https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg' />
        <Skill directionleft={false} level='Intermediate' title='Next Js' logoUrl='https://hendrixer.github.io/nextjs-course/44f073f9132a0459819eae6afa5b3807/next_with_bg.svg' />
        <Skill level='Intermediate' title='Typescript' logoUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylVrrFR3dHVnN4Kt406kJhRbTBllcZ02FIw&usqp=CAU' />
        <Skill level='Advance' title='Git' logoUrl='https://i.pinimg.com/564x/01/e5/00/01e500fca29c045d432b64f285f9c229.jpg' />
        <Skill level='Advance' title='Github' logoUrl='https://i.pinimg.com/564x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg' />
        <Skill level='Advance' title='HTML' logoUrl='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png' />
        <Skill  directionleft={false} level='Advance' title='CSS' logoUrl='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' />
        <Skill  directionleft={false} level='Intermediate' title='Python' logoUrl='https://thumbs.dreamstime.com/z/python-logo-icon-vector-logos-logo-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-emblem-wallpaper-background-python-208329675.jpg' />
      
      </div>
    </motion.div>
  );
};

export default Skills;
