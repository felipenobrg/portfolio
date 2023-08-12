import { useState, useEffect } from "react";
import { FelipeLogo, HeaderContainer, LinksContainer } from "./styles";

export function Header() {
  const [appeared, setAppeared] = useState(false);

  const handleScroll = () => {
    const isAppeared = window.scrollY > 0;
    setAppeared(isAppeared);
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
      <FelipeLogo>
           <h1>{'<'} FelipeDev {'/>'}</h1> 
        </FelipeLogo>
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </LinksContainer>
    </HeaderContainer>
  );
}
