import { CaretDown, CaretRight, Globe } from "phosphor-react";
import { ChangeLanguageContainer, MenuBarContent, MenuBarIcon, MenuBarItem } from "./styles";
import * as Menubar from '@radix-ui/react-menubar';
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function ChangeLanguageButton() {
  const { t, i18n: { changeLanguage, language } } = useTranslation()
  const [ currentLanguage, setCurrentLanguage ] = useState(language)

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  };

  return (
    <ChangeLanguageContainer>
    <Menubar.Menu>
      <MenuBarIcon><Globe size={20} />  {t("ChangeLanguageButton.changeIdiomButtonText")} <CaretDown size={20}/></MenuBarIcon>
      <Menubar.Portal>
        <MenuBarContent sideOffset={5} alignOffset={-3}>
          <MenuBarItem onClick={handleChangeLanguage}>
          {t("ChangeLanguageButton.englishName")} <CaretRight/>
          </MenuBarItem>
          <Menubar.Separator className="MenubarSeparator" />
          <Menubar.Sub>
          <MenuBarItem onClick={handleChangeLanguage}>
          {t("ChangeLanguageButton.portugueseName")}<CaretRight/>
          </MenuBarItem>
            <Menubar.Portal>
            </Menubar.Portal>
          </Menubar.Sub>
          <Menubar.Separator className="MenubarSeparator" />
        </MenuBarContent>
      </Menubar.Portal>
    </Menubar.Menu>
    </ChangeLanguageContainer>
    )}