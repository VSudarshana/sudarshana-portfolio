import React from "react";
import { FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { TbFileTypeCss, TbBrandRedux } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const techs = [
    {
      id: 1,
      icon: (
        <FaHtml5 className="shadow-md shadow-orange-400 rounded text-orange-500 p-2" />
      ),
      name: "HTML5",
    },
    {
      id: 2,
      icon: (
        <TbFileTypeCss className="shadow-md shadow-blue-400 rounded text-blue-500 p-2" />
      ),
      name: "CSS3",
    },
    {
      id: 3,
      icon: (
        <IoLogoJavascript className="shadow-md shadow-yellow-400 rounded text-yellow-500 p-2" />
      ),
      name: "JavaScript",
    },
    {
      id: 4,
      icon: (
        <FaReact className="shadow-md shadow-[#00D5F7] rounded text-[#00D5F7] p-2" />
      ),
      name: "React Js",
    },
    {
      id: 5,
      icon: (
        <TbBrandRedux className="shadow-md shadow-[#7248B6] rounded text-[#7248B6] p-2" />
      ),
      name: "Redux",
    },
    {
      id: 6,
      icon: (
        <RiTailwindCssFill className="shadow-md shadow-[#43A5AC] rounded text-[#43A5AC] p-2" />
      ),
      name: "Tailwind CSS",
    },
    {
      id: 7,
      icon: (
        <FaGithub className="shadow-md shadow-black rounded text-black p-2" />
      ),
      name: "Github",
    },
  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-lg mx-auto flex flex-col gap-8 justify-center py-14 px-5"
    >
      <div>
        <h1 className="inline border-b-4 border-slate-600 font-bold text-3xl">
          Skills
        </h1>
        <p className="mt-3 text-xl font-bold">
          These are the technologies I've worked with.
        </p>
      </div>
      <div className="flex gap-7 flex-wrap">
        {techs.map(({ id, name, icon }) => (
          <div key={id} className="text-center text-6xl">
            {icon}
            <p className="text-[16px] font-medium mt-4 animate-bounce">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
