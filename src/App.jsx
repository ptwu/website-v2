import React from 'react';
import './App.css';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import HeaderCard from './components/HeaderCard/HeaderCard';
import MetropolisOtf from './font/Metropolis-Medium.otf';

const metropolis = {
  fontFamily: 'Metropolis',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Metropolis'),
    local('Metropolis-Medium'),
    local('Metropolis-Regular'),
    url(${MetropolisOtf}) format('opentype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Metropolis',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [metropolis],
      },
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderCard />
    </ThemeProvider>
  );
}

export default App;
