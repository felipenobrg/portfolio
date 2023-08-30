import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 2rem;
  background-color: ${(props) => props.theme["gray-900"]};
  color: #fff;
  padding: 2rem;
  text-align: center;

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 4rem 0 4rem;
    justify-content: center;
    align-items: center;
  }

  .line-container {
    margin-top: 3rem;
  }

  .line {
    border: 1px solid ${(props) => props.theme["gray-600"]};
    margin-bottom: 1rem;
  }

  a {
    color: ${(props) => props.theme["white"]};
  }

  h1 {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 768px) {
    .grid-container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left: auto;
    }
  }
`;

export const PhraseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    text-align: start;
    margin-top: 1rem;
    color: ${(props) => props.theme["gray-300"]};
  }
`;

export const SocialIcons = styled.div``;

export const SocialIconLink = styled.a`
  color: ${(props) => props.theme["white"]};
  font-size: 24px;
  margin: 1rem 0.5rem 0 0.5rem;
`;
