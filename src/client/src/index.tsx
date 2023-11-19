import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { RateProvider } from './contexts/RateContext';

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito Sans', sans-serif;
    background: rgb(255,255,255);
    background: linear-gradient(156deg, rgba(255, 255, 255, 1), rgb(255, 230, 212) 46.64%, rgb(78 44 117) 97.9%);
    color: #333;
    font-weight: 500;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RateProvider>
        <GlobalStyle />
        <App />
      </RateProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
