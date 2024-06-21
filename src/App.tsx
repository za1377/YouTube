import React from 'react';
import { AppContainer, GlobalStyle } from './App.styles';
import { ThemeProvider } from 'styled-components';
import { THEMES } from './utils/theme';
import { useAppContext } from './context/App.context';
import Header from './components/header/Header';
import Tooltips from './utils/Tooltips';
import Body from './components/body/Body';

function App() {

  const {theme} = useAppContext();

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <Tooltips />
      <AppContainer>
        <Header />
        <Body />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
