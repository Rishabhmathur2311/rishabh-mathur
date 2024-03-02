import React from "react";
import Card from "./Card";
import { proj } from "./Array";
import {SectionWrapper} from "../hoc";

const Projects=()=>{
    return (
        <div className="mt-14">
            <div className="flex flex-row gap-5 mb-10">
            <div className="flex flex-col justify-center items-center ml-[18%]">
                    <div className="w-5 h-5 rounded-full bg-blue-500" />
                    <div className="w-1 sm:h-30 h-20 bg-gradient-to-b from-blue-500 to-transparent"></div>
            </div>
            <div className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Pro<span className="text-blue-500">jects</span>
            </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {proj.map((project)=>(
                    <Card prop={project} />
                ))}
            </div>
        </div>
    );
}

export default SectionWrapper(Projects, "projects");