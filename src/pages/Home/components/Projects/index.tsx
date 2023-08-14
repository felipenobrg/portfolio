import { CaretLeft, CaretRight } from "phosphor-react";
import { ProjectCard } from "./Cards";
import { ProjectContainer, ProjectWrapper } from "./styles";
import { projectsData } from "../../../../data/ProjectsData";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation()
  return (
    <ProjectWrapper id="projects">
      <h1 className="projectname">
        <CaretLeft size={28} color="#5A7FFB" weight="fill" />
        {t("Projects.projectsH1")}
        <CaretRight size={28} color="#5A7FFB" weight="fill" />
      </h1>
      <ProjectContainer>
        {projectsData.map((project) => (
          <ProjectCard key={project.projectId}  {...project}/>
        ))}
  
      </ProjectContainer>
    </ProjectWrapper>
  );
}
