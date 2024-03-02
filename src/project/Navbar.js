import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`p-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
       <div className='w-full  flex justify-between items-center max-w-7xl mx-auto'>
        {/* <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Adrian &nbsp;
            <span className='sm:block hidden'> | JavaScript Mastery</span>
          </p>
        </Link> */}

        <ul className='list-none hidden sm:flex flex-row gap-8'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-blue-500"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-between text-white">
        <ul className='list-none mt-1 flex flex-row gap-10'>
            <li
              className="hover:text-white text-[18px] font-medium cursor-pointer`}
              w-8 h-8 bg-black text-white text-bold"
            >
              <a href={"https://drive.google.com/file/d/1VyGc7i0Ssk12qU2eNyi2vnpRlF3VWuJh/view?usp=sharing"}>
                <img
                  src="./resume.png"
                  alt="resume"
                >
                </img>
              </a>
            </li>
            <li
              className="hover:text-white text-[18px] font-medium cursor-pointer`}
              w-8 h-8"
            >
              <a href={"https://leetcode.com/Rishabh_mathur/"}
              >
                <img
                  src="./leetcode.png"
                  alt="leetcode"
                >
                </img>
              </a>
            </li>
            <li
              className="hover:text-white text-[18px] font-medium cursor-pointer`}
              w-6 h-7 bg-black"
            >
              <a href={"https://www.linkedin.com/in/rishabh-mathur-a51ab6223/"}>
                <img
                  src="./linkedin.png"
                  alt="leetcode"
                >
                </img>
              </a>
            </li>
        </ul>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center text-white'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 text-blue-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-[#343434]`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-blue-500"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;