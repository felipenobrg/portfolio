import { SkillsContainer } from "./styles";
import StyledComponentsIcon from "../../../../assets/SkillsIcons/StyledComponentsIcon.png";
import TypeScriptIcon from "../../../../assets/SkillsIcons/TypeScriptIcon.png";
import JavaScriptIcon from "../../../../assets/SkillsIcons/JavaScriptIcon.png";
import ReactIcon from "../../../../assets/SkillsIcons/ReactIcon.png";

export function Skills() {
  return (
    <SkillsContainer>
      <div>
        <h1>Habilidades e Ferramentas</h1>
      </div>
      <div>
        <h2>React</h2>
        <img src={ReactIcon} alt="" />
        <h2>TypeScript</h2>
        <img src={TypeScriptIcon} alt="" />
        <h2>JavaScript</h2>
        <img src={JavaScriptIcon} alt="" />
        <h2>Styled Components</h2>
        <img src={StyledComponentsIcon} />
      </div>
    </SkillsContainer>
  );
}
