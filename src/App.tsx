import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

export function App() {
    const [language, setLanguage] = useState("default");

    const handleLanguageChange = () => {
      const newLanguage = language === "default" ? "en" : "default";
      setLanguage(newLanguage);
      i18n.changeLanguage(newLanguage);
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <I18nextProvider i18n={i18n}>
            <Home handleLanguageChange={handleLanguageChange} />
            </I18nextProvider>
            <GlobalStyle />
        </ThemeProvider>
    )
}