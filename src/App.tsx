import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { WhatsAppApiProvider } from "./context/WhatsAppApiContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>
        <WhatsAppApiProvider>
          <Home />
        </WhatsAppApiProvider>
      </I18nextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
