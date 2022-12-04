import React from "react";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiOutlinePhone,
} from "react-icons/ai";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex sticky z-20 items-center mx-auto justify-between max-w-5xl">
      <div className="flex items-center space-x-3">
        <AiFillLinkedin size={25} color="gray" />
        <AiFillGithub size={25} color="gray" />
        <AiOutlineMail size={25} color="gray" />
        <AiOutlineInstagram size={25} color="gray" />
        <AiOutlineWhatsApp size={25} color="gray" />
      </div>
      <div className="flex items-center space-x-2 cursor-pointer">
        <AiOutlinePhone  size={25} color="gray" />
        <p className="text-gray-400 text-sm hidden md:inline-flex">
          Get in Touch
        </p>
      </div>
    </header>
  );
};

export default Header;
