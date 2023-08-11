import { AboutMe } from "./components/AboutMe";
import { SectionAbout } from "./components/SectionAbout";
import { Skills } from "./components/Skills";

export function Home() {

  return (
    <>
     <SectionAbout />
     <AboutMe />
     <Skills />
    </>
  );
}
