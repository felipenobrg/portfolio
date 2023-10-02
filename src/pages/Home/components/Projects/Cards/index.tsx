import {
  ButtonsContainer,
  CardContainer,
  DescriptionProject,
  GitHubButton,
  TechnologiesContainer,
  TextAboutProjectContainer,
  VisitButton,
} from "./styles";
import { ArrowSquareOut } from "phosphor-react"
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
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
  githubUrl?: string;
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
  githubUrl,
}: ProjectCardProps) {
  const { t } = useTranslation()
  
  return (
    <CardContainer data-aos="fade-right">
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <TextAboutProjectContainer>
        <DescriptionProject>
          <h1>{title}</h1>
          <p>{t(description)}</p>
        </DescriptionProject>
        <TechnologiesContainer>
          <p>{technology1}</p>
          <p>{technology2}</p>
          <p>{technology3}</p>
          <p>{technology4}</p>
        </TechnologiesContainer>
        <ButtonsContainer>
        <VisitButton href={urlProject}>
          {" "}
          <ArrowSquareOut size={24} />
          <p>{t("Projects.projectsButtonName")}</p>
        </VisitButton>
        <GitHubButton href={githubUrl}>
          <p><GitHubLogoIcon />GitHub</p>
        </GitHubButton>
        </ButtonsContainer>
      </TextAboutProjectContainer>
    </CardContainer>
  );
}
