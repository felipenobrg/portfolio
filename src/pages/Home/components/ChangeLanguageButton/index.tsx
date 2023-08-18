import { CaretDown, CaretRight, Globe } from "phosphor-react";
import { ChangeLanguageContainer, MenuBarContent, MenuBarIcon, MenuBarItem } from "./styles";
import * as Menubar from '@radix-ui/react-menubar';
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function ChangeLanguageButton() {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const languageNames: Record<string, string> = {
    en: t("ChangeLanguageButton.englishName"),
    pt: t("ChangeLanguageButton.portugueseName")
  };

  const handleChangeLanguage = (newLanguage: string) => {
    if (newLanguage !== currentLanguage) {
      changeLanguage(newLanguage);
      setCurrentLanguage(newLanguage);
    }
  };

  return (
    <ChangeLanguageContainer>
      <Menubar.Menu>
        <MenuBarIcon>
          <p><Globe size={20}/> {languageNames[currentLanguage]} <CaretDown size={20} /></p>
        </MenuBarIcon>
        <Menubar.Portal>
          <MenuBarContent sideOffset={5} alignOffset={-3}>
            {currentLanguage === "en" ? (
              <MenuBarItem onClick={() => handleChangeLanguage("pt")}>
               <p>{t("ChangeLanguageButton.portugueseName")} <CaretRight /></p>   
              </MenuBarItem>
            ) : (
              <MenuBarItem onClick={() => handleChangeLanguage("en")}>
                <p>{t("ChangeLanguageButton.englishName")} <CaretRight /></p>   
              </MenuBarItem>
            )}
            <Menubar.Separator className="MenubarSeparator" />
          </MenuBarContent>
        </Menubar.Portal>
      </Menubar.Menu>
    </ChangeLanguageContainer>
  );
}
