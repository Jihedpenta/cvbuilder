import Grid from '@mui/material/Grid';
import ResumeFillInForm from '../../components/resume-fill-in-form/resume-fill-in-form.component';
import ResumePreview from '../../components/resume-preview/resume-preview.component';



export default function CvBuild() {

  return (
    <Grid container component="main">
        <ResumePreview />
        <ResumeFillInForm/>
    </Grid>      
  );
}