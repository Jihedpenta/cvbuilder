import React, { useEffect } from 'react';
import {  Grid } from '@mui/material';
import ResumeSectionHeading from '../resume-section-heading/resume-section-heading.component';

const ResumeLangs = ({langs , primaryColor, setLangHeight,innerRef }) => {
    useEffect(() => {
        setLangHeight(innerRef.current.offsetHeight)
    })
    return (
    <Grid container ref={innerRef}>
        <ResumeSectionHeading primaryColor={primaryColor} titleKey="languages" />
        {langs.map((elem, index) => {
            return (
                <Grid item xs={6} sm={6} md={6} key={index}>
                    &#x275A; {elem.lang} : {elem.level}
                </Grid>
            )
        })}
    </Grid>
    );
};

export default ResumeLangs;