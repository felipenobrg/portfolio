import { styled } from "styled-components";

export const ProjectWrapper = styled.div`
  .projectname {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme["gray-900"]};
  }

  @media screen and (max-width: 768px) {
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
