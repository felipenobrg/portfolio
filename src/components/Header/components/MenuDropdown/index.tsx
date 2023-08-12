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
      text: "Olá. Me interessei pelos produtos",
    })}`;
    window.open(url, "_blank");
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
            <a href="#home">Home</a>
            <a href="#about">Sobre</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Projetos</a>
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