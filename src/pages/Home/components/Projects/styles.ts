import { styled } from "styled-components";

export const ProjectWrapper = styled.div`
  h1 {
  display: flex;
  align-items: center;
  padding: 1.5rem;
   font-weight: bold;
   text-transform: uppercase;
   color: ${(props => props.theme["gray-900"])};
  }

  @media screen and (max-width: 768px) {
     h1 {
      justify-content: center;
     }
  }
`

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 

  h1 {
    color: ${(props) => props.theme["blue-300"]};
    padding: 1.5rem;
    margin-bottom: 3rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
     display: flex;
     flex-direction: column;
  }
`;
