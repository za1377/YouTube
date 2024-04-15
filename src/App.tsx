import React from 'react';
import { AppContainer, GlobalStyle } from './App.styles';
import { ThemeProvider } from 'styled-components';
import { THEMES } from './utils/theme';
import { useAppContext } from './context/App.context';

function App() {

  const {theme} = useAppContext();

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <AppContainer>
        hello
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
