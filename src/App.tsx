import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

export function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <I18nextProvider i18n={i18n}>
            <Home />
            </I18nextProvider>
            <GlobalStyle />
        </ThemeProvider>
    )
}