import React from 'react';
import GlobalStyle from './styles/global';
import  { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import ToastContainer from './components/ToastContainer';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        
        <AppProvider>
          <Routes />
        </AppProvider>

      </BrowserRouter>

      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;