import { AboutMeContainer, AboutMeText } from "./styles";
import ProgrammingPhoto from "../../../../assets/ProgrammingPhotoAboutMe.svg";

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
    )
}