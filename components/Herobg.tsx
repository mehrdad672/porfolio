import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Herobg = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity:0
      }}
      animate={{
        scale:[1,2,2,3,1],
        opacity:[0.2,0.3,0.4,0.8,0.1,1],
        borderRadius:['20%','20%','50%','80%','20%']
        
      }}
      transition={{
        duration:2.5
      }}
      className="relative flex justify-center items-center z-0"
    >
      <div className="absolute  border border-[#333333] h-[150px] w-[150px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-[#333333] h-[250px] w-[250px] rounded-full mt-52 " />
      <div className="absolute border border-[#333333] h-[350px] w-[350px] rounded-full mt-52 " />
      <div className="absolute border border-[#F7AB0A] opacity-20 h-[500px] w-[500px] rounded-full mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] h-[700px] w-[700px] rounded-full mt-52 " />
    </motion.div>
  );
};

export default Herobg;
