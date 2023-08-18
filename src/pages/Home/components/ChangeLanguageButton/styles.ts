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
`;

export const MenuBarIcon = styled(Menubar.Trigger)`
 background: none;
 border: 0;
p {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme["white"]};
  padding: 0.5rem;
  border: 0;
  border-radius: 9999px;
  font-weight: bold;
  cursor: pointer;
  width: 8rem;
  margin-right: auto;

  max-width: 8rem; 
}
`;

export const MenuBarContent = styled(Menubar.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  background: ${(props) => props.theme["gray-900"]};
  margin-left: 0.8rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  width: 7rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuBarItem = styled(Menubar.Item)`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  color: ${(props) => props.theme.white};
  cursor: pointer;
  margin-top: 0.2rem;  
`;
