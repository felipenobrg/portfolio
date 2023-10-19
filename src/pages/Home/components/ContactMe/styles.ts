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

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;
      text-transform: none;
      font-weight: bold;
      color: ${(props) => props.theme["gray-100"]};
      margin-top: 2rem;
      font-size: 1.2rem;
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
      transition: 0.3s ease;
    }
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: start;
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

  .hr {
    width: 40%;
    text-align: center;
    position: relative;
  }

  .hr::before,
  .hr::after {
    content: "";
    border-bottom: 1px solid ${(props) => props.theme["gray-500"]};
    width: 40%;
    position: absolute;
    bottom: 0;
  }

  .hr::before {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 8px;
    left: 0;
  }

  .hr::after {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 8px;
    right: 0;
  }

  @media screen and (max-width: 768px) {
    h1 {
      margin: 0 auto;
      margin-top: 3rem;

      svg {
        width: 2rem;
      }
    }
    form {
      width: 80%;
      margin-top: 2rem;
    }

    .submit-button {
      width: 40%;
      height: 3.5rem;
      margin-bottom: 6rem;
      color: ${(props => props.theme.white)};
    }

    .hr {
      margin-top: -3rem;
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

export const WhatsAppButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;

  h2 {
    color: ${(props) => props.theme["gray-100"]};
  }

  button {
    display: flex;
    align-items: center;
    border: 0;
    padding: 1.2rem;
    margin-bottom: 3rem;
    gap: 2px;
    margin-top: 1rem;
    border-radius: 9px;
    background: ${(props) => props.theme["blue-300"]};
    cursor: pointer;
    font-size: 16px;
    color: ${(props) => props.theme.white};
    font-weight: bold;

    &:hover {
      filter: brightness(0.8);
      transition: 0.3s ease;
    }
  }

`;
