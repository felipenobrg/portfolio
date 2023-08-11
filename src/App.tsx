import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Home />
            <GlobalStyle />
        </ThemeProvider>
    )
}