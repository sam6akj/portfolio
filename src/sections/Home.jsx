import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImg from "../assets/profile3.png"

const Home = () => {
  return (
      <div
      name="home"
      className="h-screen bg-[#222] home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <img
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <p className="text-4xl sm:text-4xl font-bold text-white">
            Crafting Web Applications 
            <br></br>with Passion
          </p>
          <p className="text-md font-medium text-gray-400 py-4 max-w-md">
          Dedicated Front-End Developer 
          | React, Tailwind, Javascript | 
          Data Analysis & Visualization |
          <br></br> 
          Problem Solver
          </p>

          <div className="portfolio-btn">
            <Link
              to="project"
              smooth
              duration={500}
              className="group text-black text-xl font-bold w-fit px-6 py-3 my-2 flex items-center rounded-[18px] bg-[#fff] hover:scale-110 duration-300 cursor-pointer"
            >
              Project
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImg}
            alt="profile"
            className="mx-auto ml-20 md:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
