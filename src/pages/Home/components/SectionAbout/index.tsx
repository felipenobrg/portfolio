import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Header } from "../../../../components/Header";
import {
  SectionContainer,
  TextContainer,
  AnimationText,
  ReadMoreButton,
  MyProjectsButton,
  ButtonsWrapper,
} from "./styles";
import myPhoto from "../../../../assets/FelipeNobregaPhoto.webp";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import resume from "../../../../assets/resume.pdf";

export function SectionAbout() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const { t } = useTranslation();
  const roleText = t("sectionAbout.role");
  const roleMobile = t("sectionAbout.roleMobile");

  const [text] = useTypewriter({
    words: [roleText, roleMobile],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <SectionContainer id="home">
      <Header />
      <TextContainer data-aos="fade-right">
        <div className="myName">
          <h1>
            {t("sectionAbout.greetings")} <br />{" "}
            <span>
              Felipe <span>Nóbrega</span>{" "}
            </span>
          </h1>
        </div>
        <AnimationText>
          <h1 className="typed-text">
            {text}
            <Cursor />
          </h1>
        </AnimationText>
        <ButtonsWrapper>
          <ReadMoreButton href="#about">
            {t("sectionAbout.buttonAboutMe")}
          </ReadMoreButton>
          <MyProjectsButton href={resume}>
            {t("sectionAbout.buttonMyProjects")}
          </MyProjectsButton>
        </ButtonsWrapper>
      </TextContainer>
      <div className="imgContainer" data-aos="fade-right">
        <img src={myPhoto} alt="" className="myPhoto" />
      </div>
    </SectionContainer>
  );
}
