import {
  AboutMeContainer,
  AboutMeText,
  AnimationContainer,
  InformationContainer,
} from "./styles";
import Lottie from "lottie-react"
import CodingIllustrattion from "../../../../assets/CodingIllustration.json"
import { CaretLeft, CaretRight } from "phosphor-react";
import { SocialMedia } from "../SocialMedia";

export function AboutMe() {
  return (
    <AboutMeContainer id="about">
      <AnimationContainer>
        <Lottie animationData={CodingIllustrattion} />
      </AnimationContainer>
      <AboutMeText>
      <h1>
        <CaretLeft size={28} color="#5A7FFB" weight="fill" />
        Sobre mim
        <CaretRight size={28} color="#5A7FFB" weight="fill" />
      </h1>
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
            <p>felipenobrega2012@gmail.com</p>
            <h2>Educação</h2>
            <p>
              Graduando - Ciência da Computação <br />{" "}
              {"Centro Universitário Unipê"}
            </p>
          </div>
        </InformationContainer>
      <SocialMedia />
      </AboutMeText>
    </AboutMeContainer>
  );
}
