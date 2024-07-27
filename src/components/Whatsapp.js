import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { WhatsApp } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';


const Whatsapp = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
    
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: isMobile ? '50px' : '100px', marginBottom: '50px' }}>
            <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                border: '1px solid rgba(0, 0, 0, 0.25)',
                borderRadius: '20px', 
                width: '1250px', 
                height: isMobile ? '300px' : '240px'
            }}
            >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                Ainda tem dúvidas sobre Pizza?
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontWeight:'300', maxWidth: isMobile ? '210px' : '400px'}}>
                Entre em contato direto com nossos atendentes.
                </Typography>
                <Button 
                    variant="contained" 
                    style={{ 
                        backgroundColor: '#25D366', 
                        color: 'white', 
                        marginTop:'10px', 
                        textTransform: 'none'
                    }}
                    onClick={() => window.open('https://wa.me/5545988041417?text=Oi%20mensagem%0A', '_blank')}
                >
                    <WhatsApp sx={{ marginRight: '5px' }} />
                    Entre em contato
                </Button>
            </Box>
        </Box>
  );
};

export default Whatsapp;
