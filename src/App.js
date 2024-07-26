import React from 'react';
import { useMediaQuery, useTheme, Container } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Apresentacao from './components/Apresentacao';
import FaqComponent from './components/Faq';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="App">
        <Navbar/>
        <img src={isMobile ? process.env.PUBLIC_URL + '/bannermob.png' : process.env.PUBLIC_URL + '/bannerdesk.png'} alt="Banner" style={{ width: '100%'}}/>
        <Container fixed maxWidth="500px"> 
            <Apresentacao/>
            <FaqComponent/>
        </Container>
    </div>
  );
}

export default App;
