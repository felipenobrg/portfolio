import { styled } from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;

  margin: 3rem 3rem 3rem 6rem;
  min-height: 65vh;

  img {
    width: 23rem;
    height: 23rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const AboutMeText = styled.div`
  color: ${(props) => props.theme["gray-700"]};
  font-family: "Poppins", sans-serif;

  h1 {
    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${(props) => props.theme["blue-300"]};
    margin-bottom: 1rem;

    font-weight: bold;
  }

  li {
    margin-top: 0.5rem;
    width: 75%;
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
     margin-left: 2rem;

     li {
      width: 90%;
     }
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  gap: 5rem;
  margin-top: 2rem;

  p {
    font-weight: 300;
  }

  h2 {
    font-size: 1.3rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  @media screen and (max-width: 768px) {
     flex-direction: column;
     gap: 0;
  }
`

export const SocialMediaContainer = styled.div`
   display: flex;
   gap: 0.5rem;
   margin-top: 1rem;
   
   img {
    width: 100%;
    height: 3rem;
   }
`