import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Header } from "../../../../components/Header";
import { SectionContainer, TextContainer, AnimationText, ReadMoreButton, MyProjectsButton } from "./styles";
import myPhoto from "../../../../assets/FelipeNobregaPhoto.jpg"


export function SectionAbout() {
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
          <ReadMoreButton>Sobre mim</ReadMoreButton>
          <MyProjectsButton>Meus Projetos</MyProjectsButton>
        </TextContainer>
        <div>
          <img src={myPhoto} alt="" />
        </div>
      </SectionContainer>
    )
}