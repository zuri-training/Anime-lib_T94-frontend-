import { createContext, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import {
  StyledEngineProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { deepmerge } from '@mui/utils';

import { useDarkMode } from "./hooks/useDarkMode";
import { AuthProvider } from './hooks/useAuth';
import Landing from "./pages/Landing";
import About from "./pages/About";
import Error from './pages/Error/Error.js';
import './App.css';
import { NonProtectedLayout } from "./routes/NonProtectedRoute";
import { ProtectedLayout } from "./routes/ProtectedRoute";
import Footer from "./shared/components/Footer";
import { getDesignTokens,getThemedComponents } from './shared/theme';
import { GlobalStyles } from './shared/components/GlobalStyles';

import HomePage from "./pages/home/home.page";
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  let themeMode = useMemo(
    () =>
      createTheme(deepmerge(getDesignTokens(theme), getThemedComponents(theme))),
    [theme]
  );
  themeMode = responsiveFontSizes(themeMode);


  if(!mountedComponent) return <div/>

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
        <AuthProvider>
          <StyledEngineProvider injectFirst>
            <CssBaseline />
              <ThemeProvider theme={themeMode}>
                <GlobalStyles/>
                <Routes>
                  <Route element={<NonProtectedLayout />}>
                    <Route exact path="/landing" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/404" element={<Error />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                  </Route>
                  <Route path="/" element={<ProtectedLayout />}>
                    <Route path="/home" element={<HomePage />}/>
                  </Route>
                </Routes>
                <Footer />
              </ThemeProvider>
          </StyledEngineProvider>
          </AuthProvider>
      </ThemeContext.Provider>
  )
}

export default App;
