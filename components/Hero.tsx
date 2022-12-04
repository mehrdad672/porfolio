import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Herobg from "./Herobg";
import Image from 'next/image'
import me from '../public/me.jpg'
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Mehrdad Roienyan",
      "< Frontend Developer />",
      "< NOT a Father :D />",
      "< Not a Hubby :D />",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="h-screen  flex flex-col space-y-8 items-center justify-center text-center overflow-hidden mt-10">
      <Herobg />
      <Image className="relative rounded-full h-36 w-36 object-cover mx-auto" src={me} alt='Mehrdad roienyan' />
      <h1 className="z-10">
        <span>{text}</span>
        <Cursor cursorColor="#F7ABBA" />
      </h1>
    </div>
  );
};

export default Hero;
