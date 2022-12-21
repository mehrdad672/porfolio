import React from "react";
import {GoLocation} from 'react-icons/go'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephoneFill} from 'react-icons/bs'

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className=" pt-0  md:pt-20 h-screen flex relative max-w-full flex-col text-center md:text-left md:flex-row  justify-center items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-5 -mt-36 md:mt-5 ">
        <h4 className="text-xl font-semibold text-center">
          I have got what you need. 
          <br />
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk</span>
        </h4>
        <div className="space-y-5">
            <div className="flex items-center space-x-5 justify-center">
                <BsTelephoneFill className="text-[#F7AB0A] h-7 w-7 animate-pulse" size={30} />
                <p className="text-xl">0917 - 990 - 1141</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
                <AiOutlineMail className="text-[#F7AB0A] h-7 w-7 animate-pulse" size={30} />
                <p className="text-xl">roienyan@gmail.com</p>
                </div>
            <div className="flex items-center space-x-5 justify-center">
                <GoLocation className="text-[#F7AB0A] h-7 w-7 animate-pulse" size={30} />
                <p className="text-xl">Tehran , Iran</p>
            </div>
        </div>
        <form className="  space-y-2 max-w-full w-full hidden md:flex md:flex-col mx-auto" >
            <div className="flex space-x-2">
                <input placeholder="Name" className="contactinput" type="text" />
                <input placeholder="Email" className="contactinput" type="text" />
            </div>
            <input placeholder="Subject" className="contactinput" type="text" />
            <textarea placeholder="Message" className="contactinput" />
            <button type="submit" className="bg-[#F7AB0A] py-3 px-10 rounded-md text-black font-bold text-lg">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
