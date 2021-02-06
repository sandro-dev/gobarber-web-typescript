import React from 'react';
import GlobalStyle from './styles/global';
import  { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>      
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;