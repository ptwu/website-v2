
import React, { ReactElement } from 'react';
import {
  ThemeProvider, CssBaseline, AppBar, Toolbar,
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import VideoContainer from './components/VideoContainer';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import Logo from './img/ptwulogo.png';

const theme = createMuiTheme({ typography: { fontFamily: ['Metropolis', 'Metropolis-Bold'].join(','), }, });

export default (): ReactElement => (
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
