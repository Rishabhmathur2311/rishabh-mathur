import React from "react";
import {motion} from "framer-motion";
import { Tilt } from "react-tilt";

const Card=(prop)=>{
    return (
        // <motion.div  animate={{ y: 100 }}
        // <motion.div
        
        // transition={{ ease: "easeOut", duration: .75 }}
        // className="text-white"
        // >
        <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
>

            <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
                transition: true,
                axis: null,
                exit: true,
            }}
            className="bg-[#343434]  p-5 rounded-2xl sm: w-[260px] ml-8 mr-8 mb-4"
            >
                <div className="relative w-full h-[200px]">
                    {/* <img
                    src={prop.prop.image}
                    alt={prop.prop.name}
                    className="w-full h-full object-cover rounded-2xl"
                    ></img> */}
                    <div className="w-full h-full object-cover rounded-2xl">
                    <video controls className="w-full h-full object-cover rounded-2xl">
                    <source src={prop.prop.video} type="video/mp4" className="w-full h-full object-cover rounded-2xl"/>
                    </video>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-blue-500 font-bold text-[24px]'>{prop.prop.name}</h3>
                    <p className='mt-2 text-[#F8F8FF] text-[14px]'>{prop.prop.description}</p>
                </div>

                <div className="flex flex-wrap mt-4">
                    {prop.prop.tags.map((tag) => (
                    <img
                    src={tag.name}
                    key={`${prop.prop.name}-${tag.name}`}
                    className="flex flex-row flex-wrap w-6 h-6 mx-2"
                    >
                    </img>
                ))}

                </div>
            </Tilt>
        </motion.div>
    );
}

export default Card;