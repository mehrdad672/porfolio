import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@material-tailwind/react";
type Props = {
  directionleft?: boolean;
  logoUrl?: string;
  title?: string;
  level?: string;
};

const Skill = ({ directionleft, logoUrl, title, level }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: directionleft ? -200 : 200,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      
    >
      <Tooltip
        content={title}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <div className="group relative flex cursor-pointer">
          <img
            src={logoUrl}
            alt="skill"
            className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-full w-full rounded-full z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="text-xs md:text-xl font-bold text-black opacity-100">
                {level}
              </p>
            </div>
          </div>
        </div>
      </Tooltip>
    </motion.div>
  );
};

export default Skill;
