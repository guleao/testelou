import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';

const Apresentacao = React.forwardRef((props, ref)  => {
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div ref={ref}>
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', marginTop: '50px', padding: isMobile ? '0 20px' : '0', width: isMobile ? '90%' : '100%' }}>
        <img src={isMobile ? './Pizza_derretendoMob.png' : './Pizza_derretendo.png'}  alt="Pizza" style={{ width: '100%', maxWidth: '600px', marginRight: isMobile ? 0 : '20px', marginBottom: isMobile ? '20px' : 0 }} />
        <Box sx={{ textAlign: isMobile ? 'left' : 'left' }}>
            <Typography variant={isMobile ? "h6" : "h6"} gutterBottom sx={{color: '#FF5000', fontWeight:'bold', marginLeft: isMobile ? 0 : '15px'}}>
            Por que escolher Pizza SVG
            </Typography>
            <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight:'bold', marginBottom: isMobile ? '0px' : '10px', marginLeft: isMobile ? 0 : '15px' }}>
                <Box>A melhor pizza com o melhor </Box>
                <Box>atendimento da cidade!</Box>     
            </Typography>
            <List sx={{marginTop: isMobile ? '10px' : '40px', marginBottom:'20px'}}>
                <ListItem>
                <Box sx={{ border: '1px solid transparent', borderRadius: '10%', width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 10px 10px -3px rgba(0, 0, 0, 0.25)', backgroundColor: '#ffffff' }}>        
                    <ListItemIcon sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src='./liberty.png'  alt='icon'/>
                    </ListItemIcon>
                </Box>
    
                <ListItemText sx={{marginLeft:'20px', maxWidth: '500px'}}
                primary={
                <Typography variant="h6">
                    Lorem Ipsum Dolor
                </Typography>
                }
                secondary="Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravid eu egestas sed quis donec ipsum eu. In viverra velit."
                />
                </ListItem>

                <ListItem>
                <Box sx={{ border: '1px solid transparent', borderRadius: '10%', width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 10px 10px -3px rgba(0, 0, 0, 0.25)', backgroundColor: '#ffffff' }}>        
                    <ListItemIcon sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src='./ferramenta.png'  alt='icon'/>
                    </ListItemIcon>
                </Box>
                
                <ListItemText sx={{marginLeft:'20px', maxWidth: '500px'}}
                    primary={
                    <Typography variant="h6">
                        Lorem Ipsum Dolor
                    </Typography>
                    }
                    secondary="Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravid eu egestas sed quis donec ipsum eu. In viverra velit."
                />
                </ListItem>

                <ListItem>
                <Box sx={{ border: '1px solid transparent', borderRadius: '10%', width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 10px 10px -3px rgba(0, 0, 0, 0.25)', backgroundColor: '#ffffff' }}>        
                    <ListItemIcon sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src='./cartao.png' alt='icon'/>
                    </ListItemIcon>
                </Box>
                
                <ListItemText sx={{marginLeft:'20px', maxWidth: '500px'}}
                    primary={
                    <Typography variant="h6">
                        Lorem Ipsum Dolor
                    </Typography>
                    }
                    secondary="Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravid eu egestas sed quis donec ipsum eu. In viverra velit."
                />
                </ListItem>

            </List>
        </Box>
        </Box>
    </div>
  );
});

export default Apresentacao;
