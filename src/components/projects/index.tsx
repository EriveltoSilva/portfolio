import { projects } from "@/data/projects";
import { PROJECT_CATEGORIES } from "@/types/project-categories";
import { useState } from "react";
import { Title2 } from "../Titles/Title2";
import { ProjectCard } from "./project-card";

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<PROJECT_CATEGORIES>(PROJECT_CATEGORIES.ALL);

  const filterProjects = (category: PROJECT_CATEGORIES) => {
    if (category === PROJECT_CATEGORIES.ALL) {
      return projects;
    }
    return projects.filter((project) => project.category.includes(category));
  };

  const filteredProjects = filterProjects(selectedCategory);
  return (
    <section id="projects" className="py-24 px-10 lg:px-28">
      <Title2 text="My Projects" />

      {/* Filtro de Categorias */}
      <div className="flex flex-wrap justify-center mt-6 gap-2 lg:gap-4">
        {Object.values(PROJECT_CATEGORIES).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 rounded-full hover:bg-primary ${
              selectedCategory === category && "bg-primary text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Verificação de lista vazia */}
      {filteredProjects.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-400">
            {" "}
            Oops! I haven not added any projects in this category to my portfolio yet. Come back soon, and you wll find
            something here! 🤖💻✨
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};
