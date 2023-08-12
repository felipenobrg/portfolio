import { WhatsappLogo } from "phosphor-react";
import queryString from "query-string";
import { WhatsAppButtonContainer } from "./styles";

function handleWhatsAppClick() {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: "Olá, Felipe. Gostaria de falar com você sobre uma proposta",
    })}`;
    window.open(url, "_blank");
  }
export function WhatsAppButton() {
    return (
        <WhatsAppButtonContainer onClick={handleWhatsAppClick}>
            <WhatsappLogo size={55} weight="fill" color="#48C758" />
        </WhatsAppButtonContainer>
    )
}