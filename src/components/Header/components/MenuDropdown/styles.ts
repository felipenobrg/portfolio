import { keyframes, styled } from "styled-components";

const slideIn = keyframes`
from {
  opacity: 0;
  transform: translateY(-20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const DropdownMenu = styled.div<{ open: boolean }>`
display: ${(props) => (props.open ? "flex" : "none")};
align-items: flex-start;

z-index: 100;
position: fixed;
top: 55px;
left: 0px;
height: 21rem;
width: 90%;
background-color: ${(props) => props.theme["white"]};
animation: ${slideIn} 0.3s ease-in-out;
border-radius: 0 6px 6px 0;
max-width: 100vw;
overflow-y: auto;
margin: 0 2rem 0 1rem;

@media screen and (max-width: 768px) {
  overflow: auto;
}
`;

export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  div {
    border: 1px solid ${(props) => props.theme["gray-100"]};
    width: 100vw;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-900"]};
    padding: 17px 18px;
    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;

    &:hover {
      transition: 0.3s ease;
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.8rem;
    border: 0;
    border-radius: 6px;
    margin: 1rem 0 0 1rem;
    background: ${(props) => props.theme["blue-300"]};
    color: ${(props) => props.theme["white"]};
    font-weight: bold;

    &:hover {
      transition: 0.3s ease;
      background: ${(props) => props.theme["blue-400"]};
    }
  }

`;

interface DropdownButtonProps {
  open: boolean;
  onClick: () => void;
}

export const DropdownButton = styled.button<DropdownButtonProps>`
  position: absolute;
  z-index: 100;
  border: 0;
  padding: 15px 15px;
  margin-top: -1rem;
  background: none;

  .icon {
    width: 24px;
    height: 2px;
    background: ${(props) => props.theme["white"]};
    position: relative;
    display: flex;
  }

  .icon:before,
  .icon:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    background: ${(props) => props.theme["white"]};
    transition: transform 0.3s ease-in-out;
  }

  .icon:before {
    top: -6px;
  }

  .icon:after {
    top: 6px;
  }
`;