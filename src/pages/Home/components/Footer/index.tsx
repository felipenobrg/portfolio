import {
  FooterContainer,
  SocialIcons,
  SocialIconLink,
  PhraseContainer,
} from "./styles";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <FooterContainer>
      <div className="grid-container" data-aos="fade-right">
        <PhraseContainer>
          <h1>Felipe Nóbrega</h1>
          <p> {t("Footer.phrase")}</p>
        </PhraseContainer>
        <SocialIcons>
          <h1>Social</h1>
          <SocialIconLink href="https://www.linkedin.com/in/felipenobrg/">
          <FontAwesomeIcon icon={faLinkedin} />
          </SocialIconLink>
          <SocialIconLink href="https://github.com/felipenobrg">
          <FontAwesomeIcon icon={faGithub} />
          </SocialIconLink>
        </SocialIcons>
      </div>
      <div className="line-container">
        <div className="line"></div>
        <p>
          © Copyright 2023. {t("Footer.madeBy")}{" "}
          <a href="https://www.linkedin.com/in/felipenobrg/">Felipe Nóbrega</a>
        </p>
      </div>
    </FooterContainer>
  );
}
