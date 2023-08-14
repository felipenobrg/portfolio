import { WhatsappLogo } from "phosphor-react";
import queryString from "query-string";
import { useState } from "react";
import { DropdownMenu, DropdownButton, DropdownList } from "./styles";

export function MenuDropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isSmallScreen = window.innerWidth < 768;

  function handleWhatsAppClick() {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: "Olá. Gostaria de falar sobre uma proposta~~",
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
            <a href="#home" onClick={handleLinkClick}>Home</a>
            <div></div>
            <a href="#about" onClick={handleLinkClick}>Sobre</a>
            <div></div>
            <a href="#skills" onClick={handleLinkClick}>Habilidades</a>
            <div></div>
            <a href="#projects" onClick={handleLinkClick}>Projetos</a>
            <div></div>
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
