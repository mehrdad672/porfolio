import React from "react";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiOutlinePhone,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex sticky top-0  z-20 items-center mx-auto justify-between max-w-full py-5 px-10">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center md:space-x-5 space-x-3"
      >
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/mehrdad-roienyan-61a220232/"
        >
          <AiFillLinkedin className="hover:scale-110" color='gray' size={25}  />
        </Link>
        <Link target="_blank" href="https://github.com/mehrdad672">
          <AiFillGithub className="hover:scale-110" size={25} color="gray" />
        </Link>
        <Link href="#contact">
          <AiOutlineMail className="hover:scale-110" size={25} color="gray" />
        </Link>
        <Link target="_blank" href="">
          <AiOutlineInstagram className="hover:scale-110" size={25} color="gray" />
        </Link>
        <Link target="_blank" href="">
          <AiOutlineWhatsApp className="hover:scale-110" size={25} color="gray" />
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Link
          className="flex items-center space-x-2 cursor-pointer"
          href="#contact"
        >
          <AiOutlinePhone className="hover:scale-110" size={25} color="gray" />
          <p className="text-gray-400 text-sm hidden md:inline-flex">
            Get in Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
