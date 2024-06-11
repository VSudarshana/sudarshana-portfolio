import React from "react";
import Projects from "./Projects";
import { projects } from "../utils/constants";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";


const ProjectsContainer = () => {
  return (
    <div name="Projects" className="bg-[#F3F5F9]">
      <div className="max-w-screen-lg py-14 mx-auto w-full px-5">
        <div>
          <h1 className="inline border-b-4 border-slate-600 font-bold text-3xl">
            Projects
          </h1>
          <p className="mt-3 text-xl font-bold mb-10">
            My notable projects are,
          </p>
        </div>

        <div className="flex flex-col gap-14">
          {projects.map((project) => {
            return (
              <Projects
                key={project.id}
                title={project.title}
                image={project.image}
                techStack={project.techStack}
                overview={project.overView}
                webUrl={project.webUrl}
                code={<AiFillGithub />}
                githubCode={project.gitHubCode}
                demo={<HiExternalLink />}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
