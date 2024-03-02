import React, { useState } from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

const Contacts=()=>{

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [text, setText]=useState("");

    //service id-service_jup1bt8
    //tempelate- template_3xant5p
    //public- 8XJcWCSAUOUwBYG9m

    const submitEntry=(e)=>{
        e.preventDefault();

    emailjs
      .send(
        "service_jup1bt8",
        "template_3xant5p",
        {
          from_name: name,
          to_name: "Rishabh Mathur",
          from_email: email,
          to_email: "mathurrishabh1123@gmail.com",
          message: text,
        },
        "8XJcWCSAUOUwBYG9m"
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");

          setName("");
          setEmail("");
          setText("");
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
    }

    return (
        <motion.div 
        initial={{ scale: 0 }}
        animate={{ rotate: 0 , scale: 1}}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
        }}
        className='flex-[0.75] p-8 rounded-2xl pt-0 sm: pt-8'
        >
            <div className="bg-[#343434] rounded-lg p-8 mt-">
            <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter your name"
                className="py-2 px-6  text-black rounded-lg font-medium border-none"
                >
                </input>
            </label> 

            <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="py-2 px-6 text-black rounded-lg font-medium border-none"
                >
                </input>
            </label> 

            <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Text</span>
                <textarea
                rows="7"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="Enter your message"
                className="py-2 px-6 bg-white text-black rounded-lg font-medium border-none"
                >
                </textarea>
            </label> 
            <button
            onClick={(e)=>submitEntry}
            className="bg-blue-500 mt-2 h-6 w-20 flex justify-center rounded-lg font-medium border-none"
            >
                Send
            </button>
            </div>
        </motion.div>
    );
}

export default Contacts;