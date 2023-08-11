import myPhoto from "../../assets/FelipeNobregaPhoto.jpg";
import { Header } from "../../components/Header";
import {
  AnimationText,
  ReadMoreButton,
  SectionContainer,
  TextContainer,
} from "./styles";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function Home() {
  const [text] = useTypewriter({
    words: ["Desenvolvedor Front End"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
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
        <ReadMoreButton>Saiba mais sobre mim</ReadMoreButton>
      </TextContainer>
      <div className="image-container">
        <img src={myPhoto} alt="" />
      </div>
    </SectionContainer>
  );
}
