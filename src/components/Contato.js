import React, { useState } from 'react';
import { Box, Button, TextField, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Send } from '@mui/icons-material';

const ContactForm = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    alert(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
  };

  return (
    <div ref={ref}>
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: isMobile ? '100%' : '100%', 
        height: '400px', 
        marginTop: isMobile ? '200px' : '180px', 
        marginBottom: '200px', 
        
      }}
    >
        <Typography variant={"h6"} sx={{color: '#FF5000', fontWeight:'bold'}}>
          Entre em contato
        </Typography>
        <Typography variant="h4" gutterBottom sx={{fontWeight:'bold'}}>
            <Box>Fale com a nossa equipe especializada e adquira</Box>
            <Box>nossos serviços. </Box>
        </Typography>

        <Typography sx={{fontWeight:'300', marginBottom:'40px'}}>
            <Box>Lorem ipsum dolor sit amet consectetur. Platea viverra nam vitae convallis. Orci fringilla imperdiet</Box>
            <Box>malesuada ullamcorper facilisis.</Box>
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: isMobile ? '90%' : '40%' }}>
            <Typography variant="body1" style={{ marginBottom: '5px' }}>Primeiro nome</Typography>
            <TextField variant="outlined" style={{ marginBottom: '10px', width: '100%' }} value={name} onChange={(e) => setName(e.target.value)} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: isMobile ? '90%' : '40%' }}>
            <Typography variant="body1" style={{ marginBottom: '5px' }}>Email</Typography>
            <TextField variant="outlined" style={{ marginBottom: '10px', width: '100%' }} value={email} onChange={(e) => setEmail(e.target.value)} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: isMobile ? '90%' : '40%' }}>
            <Typography variant="body1" style={{ marginBottom: '5px' }}>Mensagem</Typography>
            <TextField  variant="outlined" multiline rows={4} style={{ marginBottom: '10px', width: '100%' }} value={message} onChange={(e) => setMessage(e.target.value)} />
        </Box>

        <Button 
            variant="contained" 
            style={{ 
                backgroundColor: '#FF5000',  
                color: 'white', 
                width: isMobile ? '90%' : '40%',
                height:'60px',
                minHeight:'60px',
                marginTop:'20px'
            }}
            startIcon={<Send />}
            onClick={handleSubmit}
        >
            Enviar mensagem
        </Button>
    </Box>
    </div>
  );
});

export default ContactForm;
