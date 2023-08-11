import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 2rem;
 

`;

export const FelipeLogo = styled.div`
  margin-right: auto;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  
  h1 {
    font-size: 1.4rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["white"]};
    font-weight: bold;
    font-size: 1.2rem;
  }
`
