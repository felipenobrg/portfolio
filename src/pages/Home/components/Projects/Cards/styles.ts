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
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    img {
      width: 80%;
    }
  }
`;

export const TextAboutProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  button {
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
  }

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
    font-size: 36px;
    color: ${(props) => props.theme["blue-300"]};
    letter-spacing: 1px;
  }

  p {
    color: ${(props) => props.theme["gray-600"]};
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
  gap: 2rem;
  padding: 0.4rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;

    background: #c1d3fd;
    width: 8rem;
    height: 2.4rem;
    font-size: 0.85rem;
    color: #586d8a;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
