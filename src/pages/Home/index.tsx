import myPhoto from "../../assets/FelipeNobregaPhoto.jpg";
import { Header } from "../../components/Header";
import {
  AboutMeContainer,
  AboutMeText,
  AnimationText,
  MyProjectsButton,
  ReadMoreButton,
  SectionContainer,
  TextContainer,
} from "./styles";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ProgrammingPhoto from "../../assets/ProgrammingAboutMe.svg";

export function Home() {
  const [text] = useTypewriter({
    words: ["Desenvolvedor Front End"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <SectionContainer>
        <Header />
        <TextContainer>
          <h1>
            Olá, me chamo <br />{" "}
            <span>
              Felipe <span>Nóbrega</span>{" "}
            </span>
          </h1>
          <AnimationText>
            <h1>
              {text}
              <Cursor />
            </h1>
          </AnimationText>
          <ReadMoreButton>Sobre mim</ReadMoreButton>
          <MyProjectsButton>Meus Projetos</MyProjectsButton>
        </TextContainer>
        <div>
          <img src={myPhoto} alt="" />
        </div>
      </SectionContainer>
      <AboutMeContainer>
        <div>
          <img src={ProgrammingPhoto} alt="" />
        </div>
        <AboutMeText>
          <h1>Sobre mim</h1>
          <ul>
          <li>
            Habilidades em <strong>JavaScript, HTML e CSS. </strong> Com o
            objetivo de criar designers responsivos e minimalistas
          </li>
          <li>
            Capacidade no uso de Frameworks Front End, como o{" "}
            <strong>React</strong> e também usando <strong>TypeScript</strong>{" "}
            como facilitador.
          </li>
          <li>
            Experiência em freelancers, com foco em técnicas de <strong>SEO</strong>, melhorar
            a visibilidade e o ranking de um site nos resultados dos mecanismos
            de busca
          </li>
          <li>
             <strong>Proativo</strong>, sempre buscando nos desafios e conhecimentos
          </li>
          </ul>
        </AboutMeText>
      </AboutMeContainer>
    </>
  );
}
