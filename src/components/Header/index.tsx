import { useState, useEffect } from "react";
import { HeaderContainer, LinksContainer } from "./styles";
import { Link } from "react-scroll";
import { MenuDropdown } from "./components/MenuDropdown/index";
import { useTranslation } from 'react-i18next'

export function Header() {
  const { t, i18n: { changeLanguage, language } } = useTranslation()
  const [ currentLanguage, setCurrentLanguage ] = useState(language)

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  };
  
  const [appeared, setAppeared] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = () => {
    const isAppeared = window.scrollY > 0;
    setAppeared(isAppeared);

    const sections = ["home", "about", "projects", "contact"];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveLink(section);
          break;
        }
      }
    }
  };

  const isSmallScreen = window.innerWidth < 768;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <HeaderContainer
      style={{ background: appeared ? "#202024" : "transparent" }}
    >
      {isSmallScreen ? (
        <MenuDropdown />
      ) : (
        <LinksContainer>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={activeLink === "home" ? "active" : ""}
          >
              {t("header.home")}
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            className={activeLink === "about" ? "active" : ""}
          >
            {t("header.about")}
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={activeLink === "skills" ? "active" : ""}
          >
              {t("header.skills")}
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            className={activeLink === "projects" ? "active" : ""}
          >
              {t("header.projects")}
          </Link>
          <button onClick={handleLanguageChange}>{t('Change')}</button>
        </LinksContainer>
      )}
    </HeaderContainer>
  );
}
