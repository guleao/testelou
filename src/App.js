import React from 'react';
import { useMediaQuery, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Navbar from './components/Navbar';
import Apresentacao from './components/Apresentacao';
import FaqComponent from './components/Faq';
import Whatsapp from './components/Whatsapp';
import ContactForm from './components/Contato';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Outfit", sans-serif',
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="App">
       <ThemeProvider theme={theme}>
          <Navbar/>
          <img src={isMobile ? process.env.PUBLIC_URL + '/bannermob.png' : process.env.PUBLIC_URL + '/bannerdesk.png'} alt="Banner" style={{ width: '100%'}}/>
          <Container fixed maxWidth="500px" > 
              <Apresentacao/>
              <FaqComponent/>
              <Whatsapp/>
              <ContactForm/>
          </Container>
        </ThemeProvider>
    </div>
  );
}

export default App;
