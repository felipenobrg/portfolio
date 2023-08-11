import { styled } from "styled-components";

export const SkillsContainer = styled.div`
display: flex;
flex-direction: column;

background: ${(props => props.theme["blue-400"])};
color: ${(props => props.theme["white"])};
   img {
    width: 10%;
   }

   div {
    display: flex;
    justify-content: center;
   }
`