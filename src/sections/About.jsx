import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-[#222] text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <div className="flex justify-center">
            <p className="text-5xl font-bold inline text-gray-400">
              About Me
            </p>
          </div>
        </div>

        <p className="text-xl mt-5">
          I'm Samyak Jain, a passionate Front-End Developer with a keen eye for design and a knack for data-driven solutions.
        </p>
        <br />
        <p className="text-xl">
          With a solid foundation in front-end development and a growing expertise in data analytics, I thrive on creating exceptional web experiences. My journey into the world of technology ignited a passion for building innovative applications that seamlessly blend aesthetics and functionality.<br /> <br />
          I specialize in harnessing the power of HTML, Javascrpt, React, Tailwind CSS to develop robust and scalable web solutions. My ability to analyze complex data sets and translate insights into actionable strategies sets me apart.<br /> <br />
          I am constantly seeking new challenges and opportunities to expand my skill set, ensuring I deliver cutting-edge solutions that exceed client expectations.
        </p>
        <br></br>
        <p className="text-3xl font-semibold underline decoration-2 decoration-gray-500 text-center pt-8">Let's bring your web vision to life!</p>
      </div>
    </div>
  );
};

export default About;
