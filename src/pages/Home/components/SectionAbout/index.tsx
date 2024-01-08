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
import { useEffect, useState } from "react";
import resumeEnglish from "../../../../assets/Curriculum_EN_FelipeNobrega.pdf";
import resumePortuguese from "../../../../assets/Curriculo_FelipeNobrega.pdf";

export function SectionAbout() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";

  const resume = currentLanguage === "en" ? resumeEnglish : resumePortuguese;
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

  const roleText = t("sectionAbout.role");
  const roleMobile = t("sectionAbout.roleMobile");

  useEffect(() => {
    AOS.init({ duration: 2000 });
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

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
