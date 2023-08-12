import { SkillsContainer, SkillsGrid } from "./styles";
import StyledComponentsIcon from "../../../../assets/SkillsIcons/StyledComponentsIcon.png";
import TypeScriptIcon from "../../../../assets/SkillsIcons/TypeScriptIcon.png";
import JavaScriptIcon from "../../../../assets/SkillsIcons/JavaScriptIcon.png";
import ReactIcon from "../../../../assets/SkillsIcons/ReactIcon.png";
import GoogleAnalyticsIcon from "../../../../assets/SkillsIcons/GoogleAnalyticsIcon.png";
import HtmlIcon from "../../../../assets/SkillsIcons/HtmlIcon.png";
import CssIcon from "../../../../assets/SkillsIcons/CssIcon.png";
import BootstrapIcon from "../../../../assets/SkillsIcons/Bootstrap.png";
import GitIcon from "../../../../assets/SkillsIcons/GitIcon.png";
import { CaretLeft, CaretRight } from "phosphor-react";

export function Skills() {
  return (
    <SkillsContainer>
      <div>
      <h1>
        <CaretLeft size={28} color="#5A7FFB" weight="fill" />
        Habilidades
        <CaretRight size={28} color="#5A7FFB" weight="fill" />
      </h1>
      </div>
      <SkillsGrid>
        <div>
          <img src={ReactIcon} alt="" />
          <h2>React</h2>
        </div>
        <div>
          <img src={TypeScriptIcon} alt="" />
          <h2>TypeScript</h2>
        </div>
        <div>
          <img src={JavaScriptIcon} alt="" />
          <h2>JavaScript</h2>
        </div>
        <div>
          <img src={StyledComponentsIcon} />
          <h2>Styled Components</h2>
        </div>
        <div>
          <img src={BootstrapIcon} />
          <h2>Bootstrap</h2>
        </div>
        <div>
          <img src={HtmlIcon} />
          <h2>HTML</h2>
        </div>
        <div>
          <img src={CssIcon} />
          <h2>CSS</h2>
        </div>
        <div>
          <img src={GitIcon} />
          <h2>Git</h2>
        </div>
        <div>
          <img src={GoogleAnalyticsIcon} />
          <h2>Google Analytics</h2>
        </div>
      </SkillsGrid>
    </SkillsContainer>
  );
}
