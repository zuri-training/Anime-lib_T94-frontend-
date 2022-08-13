import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  StyledEngineProvider
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import CustomThemeProvider from './contexts/CustomThemeProvider';
import { AuthProvider } from "./hooks/useAuth";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true
    }
  }
})
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <CustomThemeProvider>
            <App />
          </CustomThemeProvider>
          </StyledEngineProvider>
      </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
