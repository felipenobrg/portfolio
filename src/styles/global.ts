import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 :focus {
   outline: 0;
   box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
 }

 ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${(props) => props.theme['blue-300']};
  }

 body {
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
 }
`