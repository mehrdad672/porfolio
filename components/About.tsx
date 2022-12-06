import React from "react";
import me from "../public/me.jpg";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl  justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        about
      </h3>
      <motion.img
        className="w-56 h-56 object-cover flex-shrink-0 rounded-full md:rounded-lg md:w-64 md:h-64 xl:h-[400px]"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src="https://s6.uupload.ir/files/me2_65h1.jpg"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h1 className="text-4xl font-semibold">Here is a little Background</h1>
        <p className="text-sm w-96 justify-start pl-5">
            I'm Mehrdad, here's a little bit about me... I've been coding and researching for over 7 years now. I've done many projects in University and some cooperation with small companies and startups in many fields such as Neuroscience and Robotics. Along the journey I found my passion in Web developement. Hence, I started learning the skills and with my background and the skills i've got, my hope in future in this journey is at highest level. With my passion of learning new things, my good undrestandings of proplems and seeking for the best solution along with my commitment to every single project, I see my goals in this area, clearly in very early future. I would be honored to share this journey with YOU...
        </p>
      </div>
    </div>
  );
};

export default About;
