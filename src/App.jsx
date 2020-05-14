
import React from 'react';
import {
  ThemeProvider, CssBaseline, AppBar, Toolbar,
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import VideoContainer from './components/VideoContainer';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import MetropolisOtf from './font/Metropolis-Medium.otf';
import MetropolisBoldOtf from './font/Metropolis-Bold.otf';
import Logo from './img/ptwulogo.png';

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

const metropolisBold = {
  fontFamily: 'Metropolis-Bold',
  fontStyle: 'bold',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('Metropolis-Bold'),
    url(${MetropolisBoldOtf}) format('opentype')
  `,
};

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Metropolis', 'Metropolis-Bold'],
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [metropolis, metropolisBold],
      },
    },
  },
});

export default () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar className="navbar" position="fixed">
      <Toolbar>
        <a href="https://peterwu.dev"><img src={Logo} width="64px" height="64px" alt="ptwu logo" /></a>
      </Toolbar>
    </AppBar>
    <VideoContainer />
    <ProjectsSection />
    <Footer />
  </ThemeProvider>
);
