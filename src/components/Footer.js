import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const Footer = () => {
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#FFA500', 
        color: '#FFFFFF',
        width: isMobile ? '100%' : '100%', 
        height: '200px', 
        
      }}
    >

      <Box sx={{ marginBottom:'20px'}}>
        <img src="./logo.png" alt="Logo"/>
      </Box>
      
      <Typography variant="body1" gutterBottom>
        Delivery +55 (21) 9 9999-9999
      </Typography>
      <Typography variant="body2">
        Endereço: Av. Brasil 74 - Foz do Iguaçu - CEP 85851-000
      </Typography>
    </Box>
  );
};

export default Footer;
