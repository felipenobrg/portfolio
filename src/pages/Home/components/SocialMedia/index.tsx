import { SocialMediaContainer } from "./styles";
import GithubIcon from "../../../../assets/SocialNetwork/GithubIcon.png"
import LinkedlnIcon from "../../../../assets/SocialNetwork/LinkedlnIcon.png"

export function SocialMedia() {
    return (
        <SocialMediaContainer>
        <a href="https://www.linkedin.com/in/felipenobrg/"><img className="socialMediaImg" src={LinkedlnIcon} alt="" /></a>
        <a href="https://github.com/felipenobrg"> <img className="socialMediaImg" src={GithubIcon} alt="" /></a>  
        </SocialMediaContainer>
    )
}