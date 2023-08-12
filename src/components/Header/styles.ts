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

  .active {
    transition: 0.3s ease;
    color: ${(props) => props.theme["blue-300"]};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["white"]};
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 2rem;
    cursor: pointer;

    &:hover {
      transition: 0.3s ease;
      color: ${(props) => props.theme["blue-300"]};
    }
  }


`;
