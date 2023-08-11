import { styled } from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;

  margin: 3rem 3rem 3rem 6rem;
  min-height: 100vh;

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
