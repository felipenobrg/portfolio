import { styled } from "styled-components";

export const SkillsContainer = styled.div`
  background: ${(props) => props.theme["blue-400"]};
  color: ${(props) => props.theme["white"]};

div h1 {
   padding: 1.5rem;
   margin-bottom: 3rem;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
}

`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  margin: 2rem 0 0 2rem;
  font-family: 'Poppins', sans-serif;

  h2 {

   font-weight: 300;
  }

  > div {
   display: flex;
   align-items: center;
   flex-direction: column;
   margin-bottom: 2rem;

   img {
      width: 5rem;
   }
  }

  @media screen and (max-width: 768px) {
     display: flex;
     flex-direction: column;
  }
`;
