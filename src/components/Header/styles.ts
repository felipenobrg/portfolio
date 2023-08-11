import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 2rem;
`;

export const FelipeLogo = styled.div`
  margin-right: auto;
  margin-left: 8rem;
  font-family: 'Poppins', sans-serif;

  h1 {
    font-weight: normal;
    font-size: 1.4rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`

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
`
