import { styled } from "styled-components";
import backgroundSection from "../../../../assets/hero_pattern.jpg";

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: relative;
  min-height: 90vh;
  max-width: 100%;
  background-image: url(${backgroundSection});

  img {
    margin-top: 2rem;
    border-radius: 999px;
    width: 20rem;
    height: 21em;
    object-fit: cover;
    border: 3px solid ${(props) => props.theme["white"]};
    animation: moveUpDown 1s infinite alternate ease-in-out;
  }

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    img {
      margin-top: 5rem;
    }
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

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 5rem;
    span {
      font-size: 2.5rem;
    }

    .typed-text {
      font-size: 1.5rem;
    }
  }
`;

export const AnimationText = styled.div`
  font-size: 1.6rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const ReadMoreButton = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  border: 0;
  padding: 1rem;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["blue-300"]};
  border-radius: 6px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease;
    filter: brightness(0.8);
  }

  @media screen and (max-width: 768px) {
    padding: 0.6rem;
  }
`;

export const MyProjectsButton = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  border: 0;
  padding: 1rem;
  background: 0;
  border-radius: 6px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 1rem;
  color: ${(props) => props.theme["blue-300"]};
  border: 1px solid ${(props) => props.theme["white"]};
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease;
    background: ${(props) => props.theme["white"]};
  }

  @media screen and (max-width: 768px) {
    padding: 0.6rem;
  }
`;
