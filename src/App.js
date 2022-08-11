import { createContext, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  StyledEngineProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { deepmerge } from "@mui/utils";

<<<<<<< HEAD
=======
import { useDarkMode } from "./hooks/useDarkMode";
import { AuthProvider } from "./hooks/useAuth";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Login from "./pages/login/Login";
import { NonProtectedLayout } from "./routes/NonProtectedRoute";
import { ProtectedLayout } from "./routes/ProtectedRoute";
import { getDesignTokens, getThemedComponents } from "./shared/theme";
import { GlobalStyles } from "./shared/components/GlobalStyles";

import HomePage from "./pages/home/home.page";
import "./App.css";

export const ThemeContext = createContext(null);

>>>>>>> 4f727d45dca19c62227ce7b18a5a93205e3b8d1f
function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  let themeMode = useMemo(
    () =>
      createTheme(
        deepmerge(getDesignTokens(theme), getThemedComponents(theme))
      ),
    [theme]
  );
  themeMode = responsiveFontSizes(themeMode);

  if (!mountedComponent) return <div />;

  return (
<<<<<<< HEAD
    <Grid container direction="column" >

    </Grid>
=======
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      <AuthProvider>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Routes>
              <Route element={<NonProtectedLayout />}>
                <Route exact path="/landing" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="/" element={<ProtectedLayout />}>
                <Route path="/" element={<HomePage />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </StyledEngineProvider>
      </AuthProvider>
    </ThemeContext.Provider>
>>>>>>> 4f727d45dca19c62227ce7b18a5a93205e3b8d1f
  );
}

export default App;