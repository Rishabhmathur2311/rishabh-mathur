import React from "react";
import EarthCanvas from "./Earth.js";
import Contacts from "./Contacts.js";
import { SectionWrapper } from "../hoc";

const Contact=()=>{
    return (
        <div>
            <div className="flex flex-row gap-5 ml-[18%] mb-0 mt-8">
            <div className="flex flex-col justify-center items-center">
                    <div className="w-5 h-5 rounded-full bg-blue-500" />
                    <div className="w-1 sm:h-30 h-20 bg-gradient-to-b from-blue-500 to-transparent"></div>
            </div>
            <div className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Contact <span className="text-blue-500">me!</span>
            </div>
            </div>
        <div className="flex flex-row flex-wrap justify-center">
           
            <div className="mr-16 sm: mb-0 flex flex-wrap w-80 h-[400px] pl-8">
            <EarthCanvas />
            </div>
            <div>
            <Contacts />
            </div>
        </div>
        
            </div>
    );
}

export default SectionWrapper(Contact, "contact");
// export default Contact;