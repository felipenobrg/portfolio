import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-direction: row;
  margin: 0 2rem 0 3rem;

  img {
    width: 20rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 6px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    img {
      min-width: 100%;
    }
  }
`;

export const TextAboutProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    margin-top: -3rem;
  }
`;

export const DescriptionProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: bold;
    text-transform: capitalize;
    color: ${(props) => props.theme["blue-300"]};
    letter-spacing: 1px;
  }

  p {
    color: ${(props) => props.theme["gray-500"]};
    margin-top: -3rem;
  }

  @media screen and (max-width: 768px) {
    p {
      width: 100%;
    }
  }
`;

export const TechnologiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;

    background: #c1d3fd;
    width: 8rem;
    height: 3rem;
    font-size: 0.9rem;
    color: #586d8a;
    text-align: center;
    font-weight: bold;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-right: auto; 

    p {
      height: 2.8rem;
      font-size: 0.8rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-right: auto;
  gap: 1rem;
`;

export const VisitButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: 0.5rem;
  width: 6rem;
  background: ${(props) => props.theme["blue-300"]};
  border: 0;
  border-radius: 6px;
  padding: 0.4rem;
  cursor: pointer;
  gap: 0.2rem;
  color: ${(props) => props.theme["white"]};
  text-decoration: none;

  &:hover {
    transition: 0.3s ease;
    filter: brightness(0.8);
  }

`;

export const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  width: 6rem;
  border: 2px solid ${(props) => props.theme["blue-400"]};

  border-radius: 6px;
  padding: 0.4rem;
  cursor: pointer;
  color: ${(props) => props.theme["gray-900"]};
  text-decoration: none;

  p {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  p img {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    transition: 0.3s ease;
    border: 2px solid ${(props) => props.theme["blue-300"]};
  }

`;
