import { Box, Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import ResumeDevider from '../resume-devider/resume-devider.component';

const ResumeTopPage = ({ primaryColor, logo_link, setTopPageHeight, innerRef }) => {
    useEffect(()=>{
        setTopPageHeight(innerRef.current.offsetHeight)
    })
    return (

        <Grid container ref={innerRef}>

            <Box sx={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: "flex-end",
                alignItems: "flex-end",
                width: '100%',
                height: 'auto'
            }}>
                <img
                    src={logo_link}
                    alt='Pentabell Logo'
                    width='40'
                    loading="lazy"

                />
            </Box>
            <ResumeDevider color={primaryColor} doubleBmargin />


        </Grid>



    );
};

export default ResumeTopPage;