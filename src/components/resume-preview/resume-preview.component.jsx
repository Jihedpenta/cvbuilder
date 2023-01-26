import React, { useEffect, useState } from 'react';
import ResumePage from '../resume-page/resume-page.component';
import Grid from '@mui/material/Grid';
import './resume-preview.style.scss'
// import ResumeHeader from '../resume-sections/resume-header/resume-header.component';
// import { RESUME_DATA } from '../../resume_data';

import { PAGES_CONTENT } from "../../pages_content";

const ResumePreview = () => {

  const [pagesContent, setPagesContent] = useState([])

  useEffect(() => {
    // console.log(PAGES_CONTENT.pages.length)
    setPagesContent(PAGES_CONTENT.pages)
 
  }, [])



  return (
    <Grid
      item
      xs={12}
      sm={5}
      md={5}
      sx={{
        padding: '20px'
      }}
    >
      {
        pagesContent.map((elem, index) => {        
          return (
            <ResumePage key={index} industry={PAGES_CONTENT.industry} pentaContact={PAGES_CONTENT.penta_contact} lang={PAGES_CONTENT.lang} content={elem} index={index}/>
          )

        })
      }


    </Grid>
  );
};

export default ResumePreview;