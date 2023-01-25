import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import ResumeSingleEducation from '../resume-single-education/resume-single-education.component';
import ResumeSectionHeading from '../../resume-section-heading/resume-section-heading.component';

const ResumeEducationList = ({ educations,primaryColor,setEducationHeight, innerRef }) => {
    useEffect(()=>{
        setEducationHeight(innerRef.current.offsetHeight)
    })
    return (
        <Grid container ref={innerRef}>
            {educations['firstDisplay'] && <ResumeSectionHeading primaryColor={primaryColor} titleKey="education" />}

            {educations['data'].map((elem, index) => {
                return (
                    <Grid item xs={12} sm={12} md={12} key={index}>
                        <ResumeSingleEducation education={elem} />
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default ResumeEducationList;