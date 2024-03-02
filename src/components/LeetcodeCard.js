import React, { useEffect, useState } from "react";
import axios from "axios";
import {SectionWrapper} from "../hoc";

const Leetcode=()=>{
    const api="https://leetcodestats.cyclic.app/Rishabh_Mathur";
    const [info, setInfo]=useState({});

    const getData=async(url)=>{
        const res=await axios.get(url);
        console.log(res.data);
        setInfo(res.data);
    }

    useEffect(()=>{
        getData(api);
    }, []);

    const hardLength=info.hardSolved/info.totalHard;

    const mediumLength=info.mediumSolved/info.totalMedium;

    const easyLength=info.easySolved/info.totalEasy;

    
        

    return (
        <div className="mt-10">

            <div className="flex flex-row gap-5 mb-10">
                <div className="flex flex-col justify-center items-center ml-[18%]">
                        <div className="w-5 h-5 rounded-full bg-blue-500" />
                        <div className="w-1 sm:h-30 h-20 bg-gradient-to-b from-blue-500 to-transparent"></div>
                </div>
                <div className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Leet<span className="text-blue-500">code</span>
                </div>
            </div>





            <div className="ml-[20%] max-w-[620px] min-w-[300px]">
                <div className="flex flex-row items-center justify-center bg-[#222222] flex-wrap pl-8 pt-2 pb-2 rounded-2xl">
                <div className=" rounded-full w-40 h-38 text-[60px] p-1 bg-yellow-500 mr-[5%]">
                    <div className="rounded-full w-38 h-35 text-[60px] p-4 pl-6  border-4 bg-[#343434] text-yellow-500">
                        {info.totalSolved}
                        <div className="flex justify-center text-sm text-blue-500 font-bold">
                            /{info.totalQuestions}
                        </div>
                    </div>
                    </div>
                
                    <div className="flex flex-col">

                        <div className={`flex flex-col text-blue-500 bg-[#343434] pt-0.5 pl-3 mt-3 rounded-2xl sm: w-[260px] ml-2 mr-8 mb-2 min-w-[250px] text-[14px]`}>
                            <div className="pb-2 text-[#F8F8FF] font-bold">Hard&nbsp;&nbsp;&nbsp;
                            <span >
                            {info.hardSolved}</span>
                            <span>/{info.totalHard}
                            </span>
                            </div>
                            <div className={`bg-red-600 w-[${hardLength*500}px] h-1.5  rounded-2xl`}></div>
                        </div>
                    
                        <div className={`flex flex-col text-blue-500 bg-[#343434] pt-0.5 pl-3 rounded-2xl sm: w-[260px] ml-2 mr-8 mb-2 min-w-[250px] text-[14px]`}>
                            <div className="pb-2 text-[#F8F8FF] font-bold">Medium&nbsp;&nbsp;&nbsp;
                            <span >
                            {info.mediumSolved}</span>
                            <span>/{info.totalMedium}
                            </span>
                            </div>
                            <div className={`bg-yellow-400 w-[${mediumLength*550}px] h-1.5  rounded-2xl`}></div>
                        </div>

                        <div className={`flex flex-col text-blue-500 bg-[#343434] pt-0.5 pl-3 rounded-2xl sm: w-[260px] ml-2 mr-8 mb-2 min-w-[250px] text-[14px]`}>
                            <div className="pb-2 text-[#F8F8FF] font-bold">Easy&nbsp;&nbsp;&nbsp;
                            <span >
                            {info.easySolved}</span>
                            <span>/{info.totalEasy}
                            </span>
                            </div>
                            <div className={`bg-green-500 w-[${easyLength*500}px] h-1.5  rounded-2xl`}></div>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    );
}

export default SectionWrapper(Leetcode, "Leetcode");