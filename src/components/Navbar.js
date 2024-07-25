import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: '#FFA500', height: '130px' }}>
      <Toolbar sx={{ marginTop: '20px'}}>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item>
            <img src="./logo.png" alt="Logo" sx={{ marginRight: '20px' }} />
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '300px'}}>
              <Typography variant="h6">
                Bloco 1
              </Typography>
              <Typography variant="h6">
                FAQ
              </Typography>
              <Typography variant="h6">
                Contato
              </Typography>
              </Box>
          </Grid>
          <Grid item>
          <Button variant="contained" sx={{ marginLeft: 'auto', backgroundColor: '#ffffff', color: '#000000', textTransform: 'none' }}>
              <WhatsApp sx={{ marginRight: '5px' }} /> 
               Entre em contato
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
