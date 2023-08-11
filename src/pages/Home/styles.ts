import { styled } from "styled-components";
import backgroundSection from "../../assets/hero_pattern.jpg"

export const SectionContainer = styled.section`
   display: flex;
   align-items: center;
   justify-content: space-around;


   position: relative; 
   height: 100vh;
   max-width: 100%;

   background-image: url(${backgroundSection});

   img {
    border-radius: 999px;
    width: 15rem;
    height: 15rem;
    object-fit: cover;
   }
`

export const TextContainer = styled.div`
  color: ${(props => props.theme["white"])};

  span {
   font-size: 4rem;
   
   span {
      color:${(props => props.theme["blue-300"])};
   }
  }
`

export const AnimationText = styled.div`
  font-size: 1.6rem;
`

export const ReadMoreButton = styled.button`
   margin-top: 1rem;
   border: 0;
   padding: 1rem;
   color: ${(props => props.theme["white"])};
   background: ${(props => props.theme["blue-300"])};
   border-radius: 6px;
   font-weight: bold;
   text-transform: uppercase;

   cursor: pointer;
`