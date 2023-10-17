import { WhatsappLogo } from "phosphor-react";
import { WhatsAppButtonContainer } from "./styles";
import { useWhatsAppApi } from "../../../../hooks/useWhatsAppApi";
    
export function WhatsAppButton() {
   const { handleWhatsAppClick } = useWhatsAppApi()
    return (
        <WhatsAppButtonContainer onClick={handleWhatsAppClick}>
            <WhatsappLogo size={55} weight="fill" color="#48C758" />
        </WhatsAppButtonContainer>
    )
}