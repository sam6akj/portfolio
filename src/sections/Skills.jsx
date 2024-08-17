import React from "react";

const skillGroups = [
  ["C", "C++", "Python"],
  [ "HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
  ["PowerBI", "SQL", "MS Suite", "Machine Learning"]
];

const Skills = ({ skillGroups }) => {
  return (
    <div name="skills" className="bg-[#222] pt-48 pb-24">
      <h2 className="text-5xl font-bold text-center text-gray-400 mb-12">My Skills</h2>
      <div className="flex flex-col items-center text-white">
        {skillGroups.map((group, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-center text-xl font-normal space-x-12">
              {group.map((skill, idx) => (
                <span key={idx}> {skill}</span>
              ))}
            </div>
            {index < skillGroups.length - 1 && (
              <hr className="border-t border-gray-300 borde-1 w-[350px] my-6"/>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Skills skillGroups={skillGroups} />
    </div>
  );
}
