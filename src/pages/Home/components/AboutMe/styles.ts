import { styled } from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;

  margin: 3rem 3rem 3rem 6rem;
  min-height: 65vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AnimationContainer = styled.div`
  width: 100%;
  max-width: 30rem;
  height: 50%;
`;

export const AboutMeText = styled.div`
  color: ${(props) => props.theme["gray-700"]};

  h1 {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${(props) => props.theme["blue-300"]};
    margin-bottom: 1rem;
    font-weight: bold;
  }

  li {
    margin-top: 0.5rem;
    width: 85%;
    font-weight: 300;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  gap: 5rem;
  margin-top: 2rem;

  p {
    font-weight: 300;
  }

  h2 {
    font-size: 1.3rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    margin-bottom: 2rem;
  }
`;

