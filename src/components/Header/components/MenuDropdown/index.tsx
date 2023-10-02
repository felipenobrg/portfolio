import { WhatsappLogo } from "phosphor-react";
import queryString from "query-string";
import { useState } from "react";
import { DropdownMenu, DropdownButton, DropdownList } from "./styles";
import { t } from "i18next";

export function MenuDropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isSmallScreen = window.innerWidth < 768;

  function handleWhatsAppClick() {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: "Olá, Felipe. Gostaria de falar com você sobre uma proposta",
    })}`;
    window.open(url, "_blank");
  }

  function handleLinkClick() {
    setDropdownOpen(false);
  }
  
  return (
    <div>
      {isSmallScreen ? (
        <DropdownButton open={isDropdownOpen} onClick={handleDropdownToggle}>
          <div className="icon" />
        </DropdownButton>
      ) : null}
      {isDropdownOpen && (
        <DropdownMenu open={isDropdownOpen}>
          <DropdownList>
            <a href="#home" onClick={handleLinkClick}>{t("header.home")}</a>
            <div></div>
            <a href="#about" onClick={handleLinkClick}>{t("header.about")}</a>
            <div></div>
            <a href="#skills" onClick={handleLinkClick}>{t("header.skills")}</a>
            <div></div>
            <a href="#projects" onClick={handleLinkClick}>{t("header.projects")}</a>
            <div></div>
            <a href="#contact" onClick={handleLinkClick}>{t("header.contact")}</a>
            <button onClick={handleWhatsAppClick}>
              <WhatsappLogo size={20} />
              Fale comigo
            </button>
    
          </DropdownList>
        </DropdownMenu>
      )}
    </div>
  );
}
