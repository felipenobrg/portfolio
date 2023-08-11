import { FelipeLogo, HeaderContainer, LinksContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <LinksContainer>
      <FelipeLogo>
           <h1>FelipeDev</h1> 
        </FelipeLogo>
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </LinksContainer>
    </HeaderContainer>
  );
}
