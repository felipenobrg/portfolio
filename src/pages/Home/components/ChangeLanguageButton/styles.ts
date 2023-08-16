import { styled } from "styled-components";
import * as Menubar from "@radix-ui/react-menubar";

export const ChangeLanguageContainer = styled(Menubar.Root)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  position: fixed;
  bottom: 20px;
  left: 5px;
  cursor: pointer;

  width: 20rem;

  svg:hover {
    transition: 0.3s ease;
    transform: scale(1.1);
  }
`;

export const MenuBarIcon = styled(Menubar.Trigger)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: ${(props) => props.theme["gray-900"]};
  color: white;
  padding: 0.5rem;
  border: 0;
  border-radius: 9999px;
  font-weight: bold;
  cursor: pointer;
  width: 55%;
  margin-right: auto;
`;

export const MenuBarContent = styled(Menubar.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: ${(props) => props.theme["gray-900"]};
  margin-left: 2rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
`;

export const MenuBarItem = styled(Menubar.Item)`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  color: ${(props) => props.theme.white};
  cursor: pointer;
  margin-top: 0.2rem;

`;
