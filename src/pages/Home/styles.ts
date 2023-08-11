import { styled } from "styled-components";
import backgroundSection from "../../assets/hero_pattern.jpg";

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: relative;
  min-height: 100vh;
  max-width: 100%;
  background-image: url(${backgroundSection});

  img {
    border-radius: 999px;
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    border: 5px solid ${(props) => props.theme["white"]};
  }
`;

export const TextContainer = styled.div`
  color: ${(props) => props.theme["white"]};

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

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  margin: 3rem 3rem 3rem 6rem;

  img {
    width: 20rem;
  }
`;

export const AboutMeText = styled.div`
  color: ${(props) => props.theme["gray-700"]};
  font-family: "Poppins", sans-serif;

  h1 {
    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${(props) => props.theme["blue-300"]};
    margin-bottom: 1rem;

    font-weight: bold;
  }

  li {
    width: 90%;
    font-weight: 300;
  }
`;
