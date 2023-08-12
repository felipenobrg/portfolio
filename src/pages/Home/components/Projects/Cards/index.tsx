import { CardContainer } from "./styles";
import { useState } from "react";
import RenoveCasaProject from "../../../../../assets/ProjectCardsPhoto/RenoveCasaProject.png"


export function ProjectCard() {
  const [showOptions, setShowOptions] = useState(false);

  const handleCardClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <CardContainer
      className={`${showOptions ? "show-options" : ""}`}
      onClick={handleCardClick}
    >
      <div>
        <img src={RenoveCasaProject} alt="Project" />
        {showOptions && (
          <div className="options">
            <a
              href="https://github.com/your-username/your-repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Ver repositório</h3>
            </a>
            <a
              href="https://your-project-deploy-url.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Deploy do Projeto</h3>
            </a>
          </div>
        )}
      </div>
    </CardContainer>
  );
}
