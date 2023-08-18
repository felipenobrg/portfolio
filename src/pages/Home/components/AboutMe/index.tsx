import {
  AboutMeContainer,
  AboutMeText,
  AnimationContainer,
  InformationContainer,
} from "./styles";
import Lottie from "lottie-react";
import CodingIllustrattion from "../../../../assets/CodingIllustration.json";
import { CaretLeft, CaretRight } from "phosphor-react";
import { SocialMedia } from "../SocialMedia";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function AboutMe() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <AboutMeContainer id="about" data-aos="fade-right">
      <AnimationContainer>
        <Lottie animationData={CodingIllustrattion} />
      </AnimationContainer>
      <AboutMeText>
        <h1>
          <CaretLeft size={28} color="#5A7FFB" weight="fill" />
          {t("AboutMe.aboutMeH1")}
          <CaretRight size={28} color="#5A7FFB" weight="fill" />
        </h1>
        <ul>
          <li>{t("AboutMe.aboutMeP1")}</li>
          <li>{t("AboutMe.aboutMeP2")}</li>
          <li>{t("AboutMe.aboutMeP3")}</li>
          <li>{t("AboutMe.aboutMeP4")}</li>
          <li>{t("AboutMe.aboutMeP5")}</li>
        </ul>
        <InformationContainer>
          <div>
            <h2>{t("AboutMe.nameH2")}</h2>
            <p>Felipe Nóbrega</p>
            <h2>{t("AboutMe.locationH2")}</h2>
            <p>
              João Pessoa {"("}PB{")"},{t("AboutMe.brazilName")}
            </p>
          </div>
          <div>
            <h2>Email</h2>
            <p>felipenobrega2012@gmail.com</p>
            <h2>{t("AboutMe.educationH2")}</h2>
            <p>{t("AboutMe.education")} </p>
          </div>
        </InformationContainer>
        <SocialMedia />
      </AboutMeText>
    </AboutMeContainer>
  );
}
