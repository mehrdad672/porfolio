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
      className="relative flex justify-center items-center"
    >
      <div className="absolute  border border-[#333333] h-[100px] w-[100px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-[#333333] h-[200px] w-[200px] rounded-full mt-52 " />
      <div className="absolute border border-[#333333] h-[300px] w-[300px] rounded-full mt-52 " />
      <div className="absolute border border-[#F7AB0A] opacity-20 h-[450px] w-[450px] rounded-full mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] h-[600px] w-[600px] rounded-full mt-52 " />
    </motion.div>
  );
};

export default Herobg;
