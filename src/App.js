import React, { useRef } from 'react';
import { useMediaQuery, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Navbar from './components/Navbar';
import Apresentacao from './components/Apresentacao';
import FaqComponent from './components/Faq';
import Whatsapp from './components/Whatsapp';
import ContactForm from './components/Contato';
import Footer from './components/Footer';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Outfit", sans-serif',
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const bloco1Ref = useRef(null);
  const faqRef = useRef(null);
  const contatoRef = useRef(null);

  return (
    <div className="App">
       <ThemeProvider theme={theme}>
          <Navbar bloco1Ref={bloco1Ref} faqRef={faqRef} contatoRef={contatoRef} />
          <img src={isMobile ? process.env.PUBLIC_URL + './img/bannermob.png' : process.env.PUBLIC_URL + './img/bannerdesk.png'} alt="Banner" style={{ width: '100%'}}/>
          <Container fixed maxWidth="1216px" > 
              <Apresentacao ref={bloco1Ref}/>
              <FaqComponent ref={faqRef}/>
              <Whatsapp/>
              <ContactForm ref={contatoRef}/>
          </Container>
        </ThemeProvider>
        <Footer/>
    </div>
  );
}

export default App;
