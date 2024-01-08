import { SectionAbout } from "./components/SectionAbout";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ChangeLanguageButton } from "./components/ChangeLanguageButton";
import { Footer } from "./components/Footer";
import { ContactMe } from "./components/ContactMe";

export function Home() {
  return (
    <>
      <SectionAbout />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <ChangeLanguageButton />
      <Footer />
    </>
  );
}
