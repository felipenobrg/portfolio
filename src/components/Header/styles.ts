import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["gray-800"]};
  padding: 3rem;
  max-height: 10rem;
  max-width: 100%;
  z-index: 100;

  position: sticky;
  top: 0;


`;
