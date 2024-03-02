import React from "react";
import SkillCanvas from "./Skilld";
import { technologies } from "../../constants/index.js"
import {motion} from "framer-motion";
import { SectionWrapper } from "../../hoc/index.js";

const Skills=()=>{
    return (
        <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0 , scale: 1}}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
        }}
        >

<div className="flex flex-row gap-5 mb-10 mt-14">
            <div className="flex flex-col justify-center items-center ml-[18%]">
                    <div className="w-5 h-5 rounded-full bg-blue-500" />
                    <div className="w-1 sm:h-30 h-20 bg-gradient-to-b from-blue-500 to-transparent"></div>
            </div>
            <div className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Tech <span className="text-blue-500">Skills</span>
            </div>
            </div>

        <div className='flex  flex-wrap justify-center align-center gap-5 ml-[15%] mr-[15%]'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <SkillCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </motion.div>
    );
}

export default SectionWrapper(Skills, "Skills");