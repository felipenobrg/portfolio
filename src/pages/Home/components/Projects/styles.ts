import { styled } from "styled-components";

export const ProjectWrapper = styled.div`
  .projectname {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    padding: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme["gray-900"]};
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    h1 {
      justify-content: center;
    }
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 70%;
  h1 {
    color: ${(props) => props.theme["blue-300"]};
    padding: 1.5rem;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 3rem;
  margin-bottom: 4rem;

  .active-button {
    background: ${(props => props.theme["blue-300"])};
    color: ${(props => props.theme.white)};
    border: 0;
  }

  button {
    background: none;
    border: 1px solid ${(props) => props.theme["gray-300"]};
    padding: 0.4rem;
    border-radius: 6px;
    font-weight: 100;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background: ${(props => props.theme["blue-300"])};
      color: ${(props => props.theme.white)};
    }
  }


  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 90%;
  }
`;


