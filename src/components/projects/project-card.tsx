import { ProjectEntity } from "@/types/project";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { BiGlobe } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MediaLink2 } from "../Button/MediaLink";

export const ProjectCard = ({ project }: { project: ProjectEntity }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can customize the animation duration here
    });
  }, []);

  return (
    <article data-aos="fade-up" className="relative group bg-white w-full h-72 rounded-lg shadow-md overflow-hidden">
      <Image src={project?.image} alt={project?.title} className="w-full h-full" width={0} height={0} sizes="100vw" />
      {/* Content showed on mouse hover */}
      <div className="h-2/5 absolute bottom-0 left-0 right-0 bg-gray-50 py-1 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <div className="flex flex-col">
          <div className="flex w-full justify-end flex-wrap gap-2">
            {project?.linkURL && (
              <MediaLink2
                Icon={BiGlobe}
                iconClassName="text-zinc-950 text-2xl"
                title="See this project 'running'"
                link={project?.linkURL}
              />
            )}
            {project?.githubRepositoryURL && (
              <MediaLink2
                Icon={FaGithub}
                iconClassName="text-zinc-950 text-2xl"
                title="See this project 'code' on my github repository"
                link={project?.githubRepositoryURL}
              />
            )}
            {project?.linkedinVideoURL && (
              <MediaLink2
                Icon={FaLinkedin}
                iconClassName="text-blue-600 text-2xl"
                title="See this project video running on my LinkedIn profile"
                link={project?.linkedinVideoURL}
              />
            )}
            {project?.youtubeVideoURL && (
              <MediaLink2
                Icon={FaYoutube}
                iconClassName="text-red-600 text-2xl"
                title="See this project video running on my youtube channel"
                link={project?.youtubeVideoURL}
              />
            )}
          </div>
          <h3 className="text-base lg:text-xl font-semibold text-primary">{project.title}</h3>
        </div>
        <p className="my-2 text-gray-600 text-[8px] lg:text-xs truncate-lines truncate-lines-2 mb-4 flex-grow">
          {project.description}
        </p>
      </div>
    </article>
  );
};
