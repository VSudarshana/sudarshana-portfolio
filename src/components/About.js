import React from "react";

const About = () => {
  return (
    <div className="bg-[#F3F5F9]">
      <div
        name="About"
        className="max-w-screen-lg mx-auto w-full flex flex-col justify-center py-14 px-5"
      >
        <div className="pb-8">
          <h1 className="inline border-b-4 border-slate-600 font-bold text-3xl">
            About Me
          </h1>
          <p className="mt-3 text-xl font-bold">
            A dedicated Frontend Developer based in Tamilnadu, India 📍
          </p>
        </div>

        <div className="text-xl">
          <p>
            🎓 Final-year student at VSB Engineering College, proficient in
            HTML5, CSS3, JavaScript, React.js, Redux and Tailwind CSS 💻.
            Currently immersed in mastering the MERN stack (MongoDB, Express.js,
            React.js, Node.js) to become a versatile full-stack developer 🚀.
            Passionate about crafting intuitive, user-friendly web applications
            and constantly exploring new technologies to enhance skills 🌐.
          </p>
          <br></br>
          <p>
            Committed to delivering exceptional user experiences through
            responsive design and clean code practices. Eager to contribute to
            impactful projects and collaborate with like-minded professionals
            for innovative solutions. 🛠️🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
