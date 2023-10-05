import styled from "styled-components";

export const ContactFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: ${(props) => props.theme["blue-400"]};
  margin-top: 4rem;
  
  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;

    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;
      text-transform: none;
      font-weight: 300;
      font-weight: bold;
    }
  }

  .submit-button {
    width: 30%;
    margin: 0 auto;
    background: ${(props) => props.theme["blue-300"]};
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    border: 0;
    color: ${(props) => props.theme.white};
    margin-bottom: 3rem;

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
    margin: 2rem auto 1rem 2rem;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
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
    height: 75vh;

    h1 {
      margin: 0 auto;
      margin-top: 3rem;
    }
    form {
      width: 80%;
      margin-top: 4rem;
    }

    .submit-button {
      width: 40%;
      height: 3.5rem;
    }
  }
`;

export const SuccessMessage = styled.div`
  background-color: ${(props) => props.theme.green};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 999;
  animation: slideIn 0.3s ease-in-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
