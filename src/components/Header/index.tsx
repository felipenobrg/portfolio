import { useState, useEffect } from "react";
import { HeaderContainer, LinksContainer } from "./styles";
import { Link } from "react-scroll";

export function Header() {
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
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveLink(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer style={{ background: appeared ? "#202024" : "transparent" }}>
      <LinksContainer>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={activeLink === "home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
          className={activeLink === "about" ? "active" : ""}
        >
          Sobre
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={activeLink === "projects" ? "active" : ""}
        >
          Projetos
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
          className={activeLink === "contact" ? "active" : ""}
        >
          Contato
        </Link>
      </LinksContainer>
    </HeaderContainer>
  );
}
