import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import ResumeFooter from '../../resume-sections/resume-footer/resume-footer.component';
import './resume-page.style-container.scss';

const ResumePageContainer = ({ children, primaryColor, pentaContact, innerRef, setPageHeight }) => {
    // const ref = useRef(null);

    const [height, setHeight] = useState(0);
    const [footerHeight, setFooterHeight] = useState(0);
    useLayoutEffect(() => {
        setHeight(innerRef.current.offsetWidth * 1.32);
        setFooterHeight(innerRef.current.offsetWidth * 0.09);
        function handleResize() {
            setHeight(innerRef.current.offsetWidth * 1.32);
            setFooterHeight(innerRef.current.offsetWidth * 0.09);
        }
        window.addEventListener('resize', handleResize)
    }, []);
    useEffect(() => {
        // console.log("height from container : ", innerRef.current.offsetHeight);
        setPageHeight(innerRef.current.offsetHeight)

    })
    return (
        <Grid item
            component={Paper}
            elevation={6}
            className="single-resume-page"
            square

        >
            <Box
                className='resume-page'
                ref={innerRef}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: height,
                    padding: '10px 80px'
                }}
            >
                <h2 className='resume-page-background' style={{ color: primaryColor }}>Pentabell</h2>
                {children}
            </Box>

            <ResumeFooter footerHeight={footerHeight} primaryColor={primaryColor} pentaContact={pentaContact} />
        </Grid>
    );
};

export default ResumePageContainer;