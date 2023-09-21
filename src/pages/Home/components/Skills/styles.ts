import { styled } from "styled-components";

export const SkillsContainer = styled.div`
  background: ${(props) => props.theme["blue-400"]};
  color: ${(props) => props.theme["white"]};

div h1 {
   display: flex;
   align-items: center;
   padding: 1.5rem;
   margin-bottom: 3rem;
   font-weight: bold;
   text-transform: uppercase;
}


@media screen and (max-width: 768px) {
   div h1 {
      justify-content: center;
   }
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  margin: 2rem 0 0 2rem;

  h2 {
   font-weight: 500;
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
     grid-template-columns: repeat(2, 1fr); 
     margin: 0 auto;

     h2 {
      margin-top: 0.3rem;
      font-size: 1rem;
     }
  }
`;

