import React from "react";
import HeroImage from "../assets/images/HeroImage.jpg";
import { FaCode } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import SocialLinks from "./SocialLinks";
import AutoType from "./AutoType";
import { RESUME_LINK } from "../utils/constants";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="max-w-screen-lg mx-auto flex flex-col justify-center py-24 items-center px-5 md:flex-row md:justify-between"
    >
      <div>
        <img
          src={HeroImage}
          alt="heroimage"
          className="rounded-2xl mx-auto w-2/3 md:hidden"
        />
      </div>

      <div className="flex flex-col gap-5 justify-center mt-10">
        <h2 className="text-4xl font-medium">
          I am a{" "}
          <span className="auto-type font-bold">
            <AutoType />
          </span>
        </h2>

        <p className="text-xl text-slate-600 font-medium max-w-md">
          I am a passionate frontend developer proficient in HTML, CSS,
          JavaScript, React.js, Redux and Tailwind CSS. I thrive on creating
          seamless user experiences and innovative web designs. Eager to expand
          my skill set and take on new challenges in web development.
        </p>

        <div className="flex gap-1">
          <button className="flex justify-center items-center gap-1 font-bold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg px-5 py-2.5 text-center me-2 mb-2">
            <Link to="Projects" smooth duration={500}>
              Projects
            </Link>
            <span>
              <FaCode />
            </span>
          </button>

          <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
            <button className="flex justify-center items-center gap-1 font-bold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg px-5 py-2.5 text-center me-2 mb-2">
              Resume
              <span className="text-2xl">
                <IoPersonCircleOutline />
              </span>
            </button>
          </a>
        </div>

        <SocialLinks />
      </div>

      <div>
        <img
          src={HeroImage}
          alt="heroimage"
          className="hidden rounded-2xl mx-auto w-2/3 hover:animate-pulse md:flex"
        />
      </div>
    </div>
  );
};

export default Home;
