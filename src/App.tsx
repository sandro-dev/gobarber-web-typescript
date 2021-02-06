import React from 'react';
import GlobalStyle from './styles/global';
import  { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>

        <AuthProvider>
          <Routes />
        </AuthProvider>
        
      </BrowserRouter>

      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;