import {
  AboutMeContainer,
  AboutMeText,
  InformationContainer,
  SocialMediaContainer,
} from "./styles";
import ProgrammingPhoto from "../../../../assets/ProgrammingPhotoAboutMe.svg";
import GithubIcon from "../../../../assets/SocialNetwork/GithubIcon.png";
import LinkedlnIcon from "../../../../assets/SocialNetwork/LinkedlnIcon.png";

export function AboutMe() {
  return (
    <AboutMeContainer>
      <div>
        <img src={ProgrammingPhoto} alt="" />
      </div>
      <AboutMeText>
        <h1>Sobre mim</h1>
        <ul>
          <li>
            Habilidades em <strong>JavaScript, HTML e CSS. </strong> Com o
            objetivo de criar designers responsivos e minimalistas.
          </li>
          <li>
            Experiência no uso de Frameworks Front End, como o{" "}
            <strong>React</strong> e também usando <strong>TypeScript</strong>{" "}
            como suporte adicional..
          </li>
          <li>
            Experiência em freelancers, com foco em técnicas de{" "}
            <strong>SEO</strong>, melhorar a visibilidade e o ranking de um site
            nos resultados dos mecanismos de busca.
          </li>
          <li>
            <strong>Proativo</strong>, sempre buscando nos desafios e
            conhecimentos.
          </li>
          <li>
            Sempre mantendo-me atualizado com as tendências do mercado e
            atualizações tecnológicas mais recentes.
          </li>
        </ul>
        <InformationContainer>
          <div>
            <h2>Nome</h2>
            <p>Felipe Nóbrega</p>
            <h2>Localização</h2>
            <p>
              João Pessoa {"("}PB{")"}, Brasil
            </p>
          </div>
          <div>
            <h2>Email</h2>
            <p>felipenbrega2012@gmail.com</p>
            <h2>Educação</h2>
            <p>
              Graduando - Ciência da Computação <br />{" "}
              {"Centro Universitário Unipê"}
            </p>
          </div>
        </InformationContainer>
        <SocialMediaContainer>
        <a href="https://www.linkedin.com/in/felipenobrg/"><img src={LinkedlnIcon} alt="" /></a>
        <a href="https://github.com/felipenobrg"> <img src={GithubIcon} alt="" /></a>  
        </SocialMediaContainer>
      </AboutMeText>
    </AboutMeContainer>
  );
}