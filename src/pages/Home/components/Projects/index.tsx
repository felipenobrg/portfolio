import { CaretLeft, CaretRight } from "phosphor-react";
import { ProjectCard } from "./Cards";
import { ButtonsContainer, ProjectContainer, ProjectWrapper } from "./styles";
import { projectsData } from "../../../../data/ProjectsData";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

type ProjectsProps = {
  projectId: string;
  imgSrc: string;
  title: string;
  description: string;
  technology1: string;
  technology2?: string;
  technology3?: string;
  technology4?: string;
  urlProject?: string;
  githubUrl?: string;
  isProfessional: boolean;
};

type ProjectsData = ProjectsProps[];

export function Projects() {
  const { t } = useTranslation();
  const [showProfessional, setShowProfessional] = useState(false);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  function filterProjects(projects: ProjectsData) {
    if (showAll) {
      return projects;
    } else {
      return projects.filter(
        (project) => project.isProfessional === showProfessional
      );
    }
  }

  const filteredProjects = filterProjects(projectsData);

  return (
    <ProjectWrapper id="projects" data-aos="fade-right">
      <h1 className="projectname">
        <CaretLeft size={28} color="#5A7FFB" weight="fill" />
        {t("Projects.projectsH1")}
        <CaretRight size={28} color="#5A7FFB" weight="fill" />
      </h1>
      <ButtonsContainer>
        <button
          onClick={() => setShowAll(true)}
          className={showAll ? "active-button" : ""}
        >
          Todos
        </button>
        <button
          onClick={() => {
            setShowAll(false);
            setShowProfessional(true);
          }}
          className={showProfessional == true && showAll == false ? "active-button" : ""}
        >
          Projetos profissionais
        </button>
        <button
          onClick={() => {
            setShowAll(false);
            setShowProfessional(false);
          }}
          className={showProfessional == false && showAll == false ? "active-button" : ""}
        >
          Projetos pessoais
        </button>
      </ButtonsContainer>
      <ProjectContainer>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.projectId} {...project} />
        ))}
      </ProjectContainer>
    </ProjectWrapper>
  );
}
