import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



import './resume-fill-in-form.style.scss'


const ResumeFillInForm = () => {
    return (
        <Grid item  
            xs={12} 
            sm={7} 
            md={7} 
            component={Paper} 
            elevation={6} 
            square
            >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          </Box>
        </Grid>
    );
};

export default ResumeFillInForm;
