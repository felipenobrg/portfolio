import { styled } from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  margin: 3rem 2rem 0 2rem;
  cursor: pointer;
  max-width: 100%;

  &:hover {
    transition: 0.3s ease;
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }

  .options {
    position: absolute;
    top: 0;
    left: 0;

    border-radius: 6px;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    background: ${(props) => props.theme["blue-300"]};
    opacity: 0.7;
    transition: opacity 0.3s ease;
    a {
      font-weight: bold;
      text-decoration: none;
      color: ${(props) => props.theme["white"]};
      font-size: 1.5rem;
      text-align: center;

      &:hover {
        transition: 0.3s ease;
        color: ${(props) => props.theme["gray-100"]};
      }
    }
  }
`;
