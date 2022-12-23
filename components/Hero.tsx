import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Herobg from "./Herobg";
import Image from "next/image";
import me from "../public/me.jpg";
import Link from "next/link";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "{ Mehrdad Roienyan }",
      "< Frontend Developer />",
      "< NOT a Father :D />",
      "< Not a Hubby :D />",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="h-screen max-w-full  flex flex-col space-y-8 items-center justify-center text-center overflow-hidden mt-10">
      <Herobg />
      <Image
        className="relative brightness-75 rounded-full h-36 w-36 object-cover mx-auto"
        src={me}
        alt="Mehrdad roienyan"
      />
      <div className="z-20 ">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">frontend developer</h2>
        <h1 className="z-10  text-2xl lg:text-4xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7ABBA" />
        </h1>
        <div className="pt-5">
          <Link href='#about'> <button className="heroButtons">about</button></Link>
          <Link href='#skills'><button className="heroButtons">skills</button></Link>
          <Link href='#projects'><button className="heroButtons">projects</button></Link>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
