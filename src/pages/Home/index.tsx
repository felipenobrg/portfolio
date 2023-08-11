import myPhoto from "../../assets/FelipeNobregaPhoto.jpg";
import { Header } from "../../components/Header";
import { SectionContainer } from "./styles";

export function Home() {
  return (
    <>
    <Header />
    <SectionContainer>
      <div className="text-container">
        <h1>FELIPE NÓBREGA DE ALMEIDA</h1>
        <h1>Desenvolvedor Front End</h1>
        <button>Saiba mais sobre mim</button>
      </div>
      <div className="image-container">
        <img src={myPhoto} alt="" />
      </div>
    </SectionContainer>
    </>
  );
}