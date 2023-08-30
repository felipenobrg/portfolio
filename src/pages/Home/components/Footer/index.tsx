import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  FooterContainer,
  SocialIcons,
  SocialIconLink,
  PhraseContainer,
} from "./styles";


export function Footer() {
  return (
    <FooterContainer>
      <div className="grid-container">
        <PhraseContainer>
          <h1>Felipe Nóbrega</h1>
          <p>" O conhecimento é uma chave que abre as portas do sucesso. "</p>
        </PhraseContainer>
        <SocialIcons>
          <h1>Social</h1>
          <SocialIconLink href="https://www.linkedin.com/in/felipenobrg/">
                <LinkedInLogoIcon />
          </SocialIconLink>
          <SocialIconLink href="https://github.com/felipenobrg">
                <GitHubLogoIcon />
          </SocialIconLink>
        </SocialIcons>
      </div>
      <div className="line-container">
        <div className="line"></div>
        <p>©  Copyright 2023. Feito por <a href="https://www.linkedin.com/in/felipenobrg/">Felipe Nóbrega</a></p>
      </div>
    </FooterContainer>
  );
}
