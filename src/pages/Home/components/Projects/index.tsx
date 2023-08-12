import { CaretLeft, CaretRight } from "phosphor-react";
import { ProjectCard } from "./Cards";
import { ProjectContainer, ProjectWrapper } from "./styles";

export function Projects() {
  return (
    <ProjectWrapper id="projects">
      <h1>
        <CaretLeft size={28} color="#5A7FFB" weight="fill" />
        Projetos
        <CaretRight size={28} color="#5A7FFB" weight="fill" />
      </h1>
      <ProjectContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectContainer>
    </ProjectWrapper>
  );
}
