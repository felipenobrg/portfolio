import {
  CardContainer,
  DescriptionProject,
  TechnologiesContainer,
  TextAboutProjectContainer,
} from "./styles";
import { ArrowSquareOut } from "phosphor-react";

export interface ProjectCardProps {
  projectId: string;
  imgSrc: string;
  title: string;
  description: string;
  technology1: string;
  technology2: string;
  technology3: string;
  technology4: string;
  urlProject: string;
}

export function ProjectCard({
  imgSrc,
  title,
  description,
  technology1,
  technology2,
  technology3,
  technology4,
  urlProject,
}: ProjectCardProps) {
  return (
    <CardContainer>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <TextAboutProjectContainer>
        <DescriptionProject>
          <h1>{title}</h1>
          <p>{description}</p>
        </DescriptionProject>
        <TechnologiesContainer>
          <p>{technology1}</p>
          <p>{technology2}</p>
          <p>{technology3}</p>
          <p>{technology4}</p>
        </TechnologiesContainer>
        <a href={urlProject}>
          {" "}
          <ArrowSquareOut size={24} />
          Visite
        </a>
      </TextAboutProjectContainer>
    </CardContainer>
  );
}
