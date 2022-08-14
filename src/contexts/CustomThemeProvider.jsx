import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { createTheme, ThemeProvider as MuiThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import { getDesignTokens, getThemedComponents } from "../shared/theme";
import { useLocalStorage } from "../hooks/useLocalStorage";
import useMedia from '../hooks/useMedia';
import { GlobalStyles } from "../shared/components/GlobalStyles";

export const CustomThemeContext = createContext({
    theme: null,
    setTheme: () => null
});

function CustomThemeProvider({ children }) {
    const [theme, setTheme] = useLocalStorage('useDarkMode');
    // See if user has set a browser or OS preference for dark mode.
    const prefersDarkMode = usePrefersDarkMode();
    // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
    // This allows user to override OS level setting on our website.
    const enabled =
        typeof theme !== 'undefined' ? theme : prefersDarkMode;

    const generateTheme = (type) => {
        let themeMode = createTheme(deepmerge(getDesignTokens(type), getThemedComponents(type)));
        themeMode = responsiveFontSizes(themeMode);

        return themeMode;
    }

    return (
        <CustomThemeContext.Provider value={{ theme: enabled, setTheme }}>
        <CustomThemeContext.Consumer>
            {({ theme: currentTheme }) => 
            <ThemeProvider theme={generateTheme(currentTheme ? 'dark' : 'light')}>
                <MuiThemeProvider theme={generateTheme(currentTheme ? 'dark' : 'light')}>
                    <GlobalStyles theme={generateTheme(currentTheme ? 'dark' : 'light')} />
                    {children}
                </MuiThemeProvider>
            </ThemeProvider>
            }
        </CustomThemeContext.Consumer>
        </CustomThemeContext.Provider>
    );
}

export default CustomThemeProvider;

// Compose our useMedia hook to detect dark mode preference.
function usePrefersDarkMode() {
    return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}
