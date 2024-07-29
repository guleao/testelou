import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';

const Apresentacao = React.forwardRef((props, ref)  => {
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isLargeScreen = useMediaQuery('(min-width:900px) and (max-width:1440px)');

  return (
    <div ref={ref}>
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', marginTop: '50px', width: '100%', marginLeft: (isMobile || isLargeScreen) ? 0 : '13px'}}>
        <img src={isMobile ? './img/Pizza_derretendoMob.png' : './img/Pizza_derretendo.png'}  alt="Pizza" style={{ width: '100%', maxWidth: isLargeScreen ? '530px' : '600px', marginRight: isMobile ? 0 : '24px', marginBottom: isMobile ? '20px' : 0 }} />
        <Box sx={{ textAlign: 'left' }}>
            <Typography variant={isMobile ? "h6" : "h5"} gutterBottom sx={{color: '#FF5000', fontWeight:'bold', marginLeft: isMobile ? 0 : '15px', marginTop:'15px'}}>
            Por que escolher Pizza SVG
            </Typography>
            <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight:'bold', marginLeft: isMobile ? 0 : '15px' }}>
                <Box>A melhor pizza com o melhor </Box>
                <Box>atendimento da cidade!</Box>     
            </Typography>
            <List sx={{marginTop: isMobile ? '10px' : '0px' }}>
                <ListItem sx={{right: isMobile ? '15px' : 0 }}>
                    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                        <Box sx={{ border: '1px solid transparent', borderRadius: '10%', marginLeft: isMobile ? 0 : 0 , width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 10px 10px -3px rgba(0, 0, 0, 0.25)', backgroundColor: '#ffffff' }}>        
                            <ListItemIcon sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src='./img/liberty.png'  alt='icon'/>
                            </ListItemIcon>
                        </Box>
                        <ListItemText sx={{marginLeft: isMobile ? '0px' : '20px', maxWidth: '550px'}}
                            primary={
                            <Typography variant="h6">
                                Lorem Ipsum Dolor
                            </Typography>
                            }
                            secondary={<Typography variant='h5' sx={{fontWeight:'300', fontSize: isMobile ? '16px' : '18px'}}>Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravid eu egestas sed quis donec ipsum eu. In viverra velit.</Typography>}
                        />
                    </Box>
                </ListItem>
                            

                <ListItem sx={{right: isMobile ? '15px' : 0 }}>
                    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-start' }}>
                        <Box sx={{ border: '1px solid transparent', borderRadius: '10%', marginLeft: isMobile ? 0 : 0 , width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 10px 10px -3px rgba(0, 0, 0, 0.25)', backgroundColor: '#ffffff' }}>        
                            <ListItemIcon sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src='./img/ferramenta.png'  alt='icon'/>
                            </ListItemIcon>
                        </Box>
                        <ListItemText sx={{marginLeft: isMobile ? '0px' : '20px', maxWidth: '550px'}}
                            primary={
                            <Typography variant="h6">
                                Lorem Ipsum Dolor
                            </Typography>
                            }
                            secondary={<Typography variant='h5' sx={{fontWeight:'300', fontSize: isMobile ? '16px' : '18px'}}>Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravid eu egestas sed quis donec ipsum eu. In viverra velit.</Typography>}
                        />
                    </Box>
                </ListItem>

                <ListItem sx={{right: isMobile ? '15px' : 0 }}>
                    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-start' }}>
                        <Box sx={{ border: '1px solid transparent', borderRadius: '10%', marginLeft: isMobile ? 0 : 0 , width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 10px 10px -3px rgba(0, 0, 0, 0.25)', backgroundColor: '#ffffff' }}>        
                            <ListItemIcon sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src='./img/cartao.png'  alt='icon'/>
                            </ListItemIcon>
                        </Box>
                        <ListItemText sx={{marginLeft: isMobile ? '0px' : '20px', maxWidth: '550px'}}
                            primary={
                            <Typography variant="h6">
                                Lorem Ipsum Dolor
                            </Typography>
                            }
                            secondary={<Typography variant='h5' sx={{fontWeight:'300', fontSize: isMobile ? '16px' : '18px'}}>Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravid eu egestas sed quis donec ipsum eu. In viverra velit.</Typography>}
                        />
                    </Box>
                </ListItem>



            </List>
        </Box>
        </Box>
    </div>
  );
});

export default Apresentacao;
