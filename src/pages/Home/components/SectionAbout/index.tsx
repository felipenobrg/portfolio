import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Header } from "../../../../components/Header";
import {
  SectionContainer,
  TextContainer,
  AnimationText,
  ReadMoreButton,
  MyProjectsButton,
  ButtonsWrapper,
} from "./styles";
import myPhoto from "../../../../assets/FelipeNobregaPhoto.jpg";
import { SocialMedia } from "../SocialMedia";

export function SectionAbout() {
  const [text] = useTypewriter({
    words: ["Desenvolvedor Front End"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <SectionContainer id="home">
      <Header />
      <TextContainer>
        <div>
          <h1>
            Olá, me chamo <br />{" "}
            <span>
              Felipe <span>Nóbrega</span>{" "}
            </span>
          </h1>
        </div>
        <AnimationText>
          <h1 className="typed-text">
            {text}
            <Cursor />
          </h1>
        </AnimationText>
        <ButtonsWrapper>
        <ReadMoreButton href="#about">Sobre mim</ReadMoreButton>
        <MyProjectsButton href="#projects">Meus Projetos</MyProjectsButton>
        </ButtonsWrapper>
      </TextContainer>
      <div className="imgContainer">
        <img src={myPhoto} alt="" className="myPhoto" />
        <SocialMedia />
      </div>

    </SectionContainer>
  );
}
