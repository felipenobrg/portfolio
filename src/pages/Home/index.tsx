import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { SectionAbout } from "./components/SectionAbout";
import { Skills } from "./components/Skills";

export function Home() {

  return (
    <>
     <SectionAbout />
     <AboutMe />
     <Skills />
     <Projects />
    </>
  );
}
