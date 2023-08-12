import { styled } from "styled-components";
import backgroundSection from "../../assets/hero_pattern.jpg";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;
  padding: 2rem;
  background-image: url(${backgroundSection});
  transition: top 0.3s ease, background-color 0.3s ease;
`;

export const FelipeLogo = styled.div`
  margin-right: auto;
  margin-left: 8rem;

  h1 {
    font-weight: normal;
    font-size: 1.4rem;
    color: ${(props) => props.theme["gray-100"]};
  }


`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["white"]};
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 2rem;

    &:hover {
      transition: 0.3s ease;
      color: ${(props) => props.theme["blue-300"]};
    }
  }
  
  @media screen and (max-width: 768px) {
   a {
    display: none;
   }
  }
`;