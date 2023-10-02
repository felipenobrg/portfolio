import { useState, useEffect } from "react";
import { HeaderContainer, LinksContainer } from "./styles";
import { Link } from "react-scroll";
import { MenuDropdown } from "./components/MenuDropdown/index";
import { t } from "i18next";

export function Header() {
  const [appeared, setAppeared] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = () => {
    const isAppeared = window.scrollY > 0;
    setAppeared(isAppeared);
    const sections = ["home", "about", "projects"];
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
      <Link to="home" data-aos="fade-right">
      <h1>Fn.</h1>
      </Link>
      {isSmallScreen ? (
        <MenuDropdown />
      ) : (
        <LinksContainer data-aos="fade-right">
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
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            className={activeLink === "projects" ? "active" : ""}
          >
            {t("header.contact")}
          </Link>
        </LinksContainer>
      )}
    </HeaderContainer>
  );
}
