import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <>
      <Container>
        <Card> Hello </Card>
      </Container>
    </>
  );
}

export default App;
