import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionDetails, AccordionSummary, useMediaQuery, useTheme } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

const Faq = () => {
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [openAccordion, setOpenAccordion] = useState('');

  return (
    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row-reverse', justifyContent: 'center', alignItems: 'center', marginTop: isMobile ? '20px' : '80px', padding: isMobile ? '0 20px' : '0' }}>
      <img src={isMobile ? './Multipizza.png' : './Multipizza.png'}  alt="Pizza" style={{ width: '100%', maxWidth: '600px', marginBottom: isMobile ? '30px' : 0 }} /> {/* Diminua o marginBottom aqui */}
      <Box sx={{ textAlign: isMobile ? 'left' : 'left', maxWidth:'610px', marginRight: isMobile ? 0 : '30px' }}>
        <Typography variant={isMobile ? "h5" : "h6"} sx={{color: '#FFA500', fontWeight:'bold', marginBottom: isMobile ? '20px' : '10px'}}>
          FAQ
        </Typography>
        <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight:'bold', marginBottom: isMobile ? '20px' : '10px'}}>
            <Box>Tire todas as suas dúvidas sobre</Box>
            <Box>nosso processo de produção!</Box>
             
        </Typography>
        <Typography sx={{marginBottom: isMobile ? '30px' : 0}}>
            <Box>Lorem ipsum dolor sit amet consectetur. <span style={{color: '#FFA500', fontWeight:'bold'}}>Etiam pellentesque</span> gravida </Box>
            <Box> eu egestas sed quis donec ipsum eu. In viverra velit.</Box>
        </Typography>
        <Accordion style={{ marginTop: '15px', maxWidth: '100%', boxShadow: 'none' }}
            expanded={openAccordion === 'panel1'}
            onChange={(event, isExpanded) => setOpenAccordion(isExpanded ? 'panel1' : '')}
        >
            <AccordionSummary
                expandIcon={openAccordion === 'panel1' ? <RemoveCircleOutline /> : <AddCircleOutline />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ padding: 0 }}  
            >
                <Typography>Pizza é boa?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque eu egestas sed quis donec ipsum eu. In viverra velit.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: '15px', maxWidth: '100%', boxShadow: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}
            expanded={openAccordion === 'panel2'}
            onChange={(event, isExpanded) => setOpenAccordion(isExpanded ? 'panel2' : '')}
        >
            <AccordionSummary
                expandIcon={openAccordion === 'panel2' ? <RemoveCircleOutline /> : <AddCircleOutline />}
                aria-controls="panel2a-content"
                id="panel1a-header"
                sx={{ padding: 0 }}  
            >
                <Typography>Vende pizza?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque eu egestas sed quis donec ipsum eu. In viverra velit.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: '15px', maxWidth: '100%', boxShadow: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}
            expanded={openAccordion === 'panel3'}
            onChange={(event, isExpanded) => setOpenAccordion(isExpanded ? 'panel3' : '')}
        >
            <AccordionSummary
                expandIcon={openAccordion === 'panel3' ? <RemoveCircleOutline /> : <AddCircleOutline />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{ padding: 0 }}  
            >
                <Typography>Tem pizza de calabresa?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque eu egestas sed quis donec ipsum eu. In viverra velit.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: '15px', maxWidth: '100%', boxShadow: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}
            expanded={openAccordion === 'panel4'}
            onChange={(event, isExpanded) => setOpenAccordion(isExpanded ? 'panel4' : '')}
        >
            <AccordionSummary
                expandIcon={openAccordion === 'panel4' ? <RemoveCircleOutline /> : <AddCircleOutline />}
                aria-controls="panel4a-content"
                id="panel1a-header"
                sx={{ padding: 0 }}  
            >
                <Typography>Tem delivery?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque eu egestas sed quis donec ipsum eu. In viverra velit.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: '15px', maxWidth: '100%', boxShadow: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}
            expanded={openAccordion === 'panel5'}
            onChange={(event, isExpanded) => setOpenAccordion(isExpanded ? 'panel5' : '')}
        >
            <AccordionSummary
                expandIcon={openAccordion === 'panel1' ? <RemoveCircleOutline /> : <AddCircleOutline />}
                aria-controls="panel5a-content"
                id="panel5a-header"
                sx={{ padding: 0 }} 
            >
                <Typography>Entrega de bike?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque eu egestas sed quis donec ipsum eu. In viverra velit.
                </Typography>
            </AccordionDetails>
        </Accordion>
        
      </Box>
    </Box>
  );
};

export default Faq;
