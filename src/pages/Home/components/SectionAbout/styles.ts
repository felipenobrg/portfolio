import { styled } from "styled-components";
import backgroundSection from "../../../../assets/hero_pattern.jpg";

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: relative;
  min-height: 100vh;
  max-width: 100%;
  background-image: url(${backgroundSection});

  img {
    margin-top: 2rem;
    border-radius: 999px;
    width: 20rem;
    height: 21rem;
    object-fit: cover;
    border: 3px solid ${(props) => props.theme["white"]};
  }

`;

export const TextContainer = styled.div`
  color: ${(props) => props.theme["white"]};
  margin-top: 2rem;

  span {
    font-size: 4rem;

    span {
      color: ${(props) => props.theme["blue-300"]};
    }
  }
`;

export const AnimationText = styled.div`
  font-size: 1.6rem;
`;

export const ReadMoreButton = styled.button`
  margin-top: 1rem;
  border: 0;
  padding: 1rem;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["blue-300"]};
  border-radius: 6px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.3rem;

  cursor: pointer;
`;

export const MyProjectsButton = styled.button`
margin-top: 1rem;
  border: 0;
  padding: 1rem;
  background: 0;
  border-radius: 6px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 1rem;
  color: ${(props) => props.theme["blue-300"]};
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
   transition: 0.3s ease;
   background: ${(props) => props.theme["gray-100"]};
  }
`