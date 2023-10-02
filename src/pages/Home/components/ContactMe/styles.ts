import styled from "styled-components";

export const ContactFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: ${(props) => props.theme["blue-400"]};
  height: 100vh;
  margin-top: 4rem;

  .submit-button {
    width: 30%;
    margin: 0 auto;
    background: ${(props) => props.theme["blue-300"]};
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    border: 0;
    color: ${(props => props.theme.white)};

    &:hover {
      filter: brightness(0.8);
    }
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${(props) => props.theme["white"]};
    margin: 2rem auto 1rem 0;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;
    width: 35%;
  }

  input,
  textarea {
    padding: 1rem;
    border: 2px solid ${(props) => props.theme["blue-300"]};
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;
  }

  input:focus,
  textarea:focus {
    border-color: ${(props) => props.theme["blue-500"]};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  
  @media screen and (max-width: 768px) {
    form {
        width: 80%;
    }

    .submit-button {
        width: 40%;
    }

  }
`;
