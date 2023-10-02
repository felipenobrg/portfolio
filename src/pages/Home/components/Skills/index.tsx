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
import FigmaIcon from "../../../../assets/SkillsIcons/Figma.png";
import NextIcon from "../../../../assets/SkillsIcons/NextIcon.png";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Skills() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <SkillsContainer id="skills">
      <div data-aos="fade-right">
        <h1 data-aos="fade-right">
          <CaretLeft size={28} color="#5A7FFB" weight="fill" />
          {t("Skills.skillsH1")}
          <CaretRight size={28} color="#5A7FFB" weight="fill" />
        </h1>
      </div>
      <SkillsGrid>
        <div>
          <img src={NextIcon} data-aos="fade-down" />
          <h2>NextJS</h2>
        </div>
        <div>
          <img src={ReactIcon} alt="" data-aos="fade-down" />
          <h2>ReactJS</h2>
        </div>
        <div>
          <img src={TypeScriptIcon} alt="" data-aos="fade-down" />
          <h2>TypeScript</h2>
        </div>
        <div>
          <img src={JavaScriptIcon} alt="" data-aos="fade-down" />
          <h2>JavaScript</h2>
        </div>
        <div>
          <img src={StyledComponentsIcon} data-aos="fade-down" />
          <h2>Styled Components</h2>
        </div>
        <div>
          <img src={BootstrapIcon} data-aos="fade-down" />
          <h2>Bootstrap</h2>
        </div>
        <div>
          <img src={HtmlIcon} data-aos="fade-down" />
          <h2>HTML</h2>
        </div>
        <div>
          <img src={CssIcon} data-aos="fade-down" />
          <h2>CSS</h2>
        </div>
        <div>
          <img src={GitIcon} data-aos="fade-down" />
          <h2>Git</h2>
        </div>
        <div>
          <img src={GoogleAnalyticsIcon} data-aos="fade-down" />
          <h2>Google Analytics</h2>
        </div>
        <div>
          <img src={FigmaIcon} data-aos="fade-down" />
          <h2>Figma</h2>
        </div>
      </SkillsGrid>
    </SkillsContainer>
  );
}
