import type { ReactNode } from "react";
import {
    createTheme, type ThemeOptions, ThemeProvider as MuiThemeProvider
} from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import componentsOverrides from "./overrides";

type ThemeProviderProps = {
    children: ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
    const themeOptions: ThemeOptions = {
        palette: {...palette.dark},
        typography,
    }
    const theme = createTheme(themeOptions);
    theme.components = componentsOverrides(theme);

    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    )
};

export default ThemeProvider;
