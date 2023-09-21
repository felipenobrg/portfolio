import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const PreloaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props => props.theme['blue-400'])};
`;

export const Spinner = styled.div`
  border: 6px solid ${(props => props.theme['blue-300'])};
  border-top: 6px solid ${(props => props.theme['blue-400'])};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;