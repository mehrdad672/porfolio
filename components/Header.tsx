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
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex sticky top-0  z-20 items-center mx-auto justify-between max-w-5xl py-5 px-10">
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
        className="flex items-center space-x-5"
      >
        <AiFillLinkedin size={25} color="gray" />
        <AiFillGithub size={25} color="gray" />
        <AiOutlineMail size={25} color="gray" />
        <AiOutlineInstagram size={25} color="gray" />
        <AiOutlineWhatsApp size={25} color="gray" />
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
        className="flex items-center space-x-2 cursor-pointer"
      >
        <AiOutlinePhone size={25} color="gray" />
        <p className="text-gray-400 text-sm hidden md:inline-flex">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
