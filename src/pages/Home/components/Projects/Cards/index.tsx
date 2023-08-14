import { CardContainer, DescriptionProject, TechnologiesContainer, TextAboutProjectContainer } from "./styles";
import RenoveCasaProject from "../../../../../assets/ProjectCardsPhoto/RenoveCasaProject.png";
import { ArrowSquareOut } from "phosphor-react";

export function ProjectCard() {
  return (
    <CardContainer>
      <div>
        <img src={RenoveCasaProject} alt="" />
      </div>
      <TextAboutProjectContainer>
        <DescriptionProject>
        <h1>Renove Casa</h1>
        <p>
          Renove Casa é um freelance para uma loja de móveis, se trata de um
          catálogo digital, separado em diferentes categorias. Renove Casa é um freelance para uma loja de móveis, se trata de um
          catálogo digital, separado em diferentes categorias.
        </p>
        </DescriptionProject>
        <TechnologiesContainer>
          <p>ReactJS</p>
          <p>TypeScript</p>
          <p>Styled-Components</p>
          <p>Google Analytics</p>
        </TechnologiesContainer>
        <button> <ArrowSquareOut size={24} />Visite</button>
      </TextAboutProjectContainer>
    </CardContainer>
  );
}
