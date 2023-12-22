import { useState, useEffect } from "react";
import { SectionAbout } from "./components/SectionAbout";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ChangeLanguageButton } from "./components/ChangeLanguageButton";
import { Footer } from "./components/Footer";
import { LoadingSpinner } from "./components/LoadingAnimation";
import { ContactMe } from "./components/ContactMe";


export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SectionAbout />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
          <ChangeLanguageButton />
          <Footer />
        </>
      )}
    </>
  );
}
