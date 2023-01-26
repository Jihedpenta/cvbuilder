import React, { useEffect, useState } from 'react';
import useInitilizeRefs from '../../hooks/useInitilizeRefs';
import { getColor, getLogoUrl } from '../../utils/ui-utils';
import ResumeCertificationList from '../resume-sections/resume-certifications/resume-certifications-list/resume-certification-list.component';
import ResumeEducationList from '../resume-sections/resume-educations/resume-education-list/resume-education-list.component';
import ResumeExperienceList from '../resume-sections/resume-experiences/resume-experience-list/resume-experience-list.componenet';
import ResumeHeader from '../resume-sections/resume-header/resume-header.component';
import ResumeLangs from '../resume-sections/resume-languages/resume-lang.component';
import ResumeProjectsList from '../resume-sections/resume-projects/resume-projects-list/resume-projects-list.component';
import ResumeSkills from '../resume-sections/resume-skills/resume-skills.component';
import ResumeSummery from '../resume-sections/resume-summery/resume-sumery.component';
import ResumeTools from '../resume-sections/resume-tools/resume-tools.component';
import ResumeTopPage from '../resume-sections/resume-top-page/resume-top-page.component';
import ResumePageContainer from './resume-page-container/resume-page-container.component';


const ResumePage = ({ content, industry, pentaContact, index, }) => {
    const { containerRef, headerRef, topPageRef, summaryRef, educationRef, certifRef, workExpRef, projectRef, skillRef, toolRef, langRef } = useInitilizeRefs()
    const primaryColor = getColor(industry)
    const logo_link = getLogoUrl(industry);
    const [topPageHeight, setTopPageHeight] = useState(0)
    const [headerHeight, setHeaderHeight] = useState(0)
    const [summaryHeight, setSummaryHeight] = useState(0)
    const [educationHeight, setEducationHeight] = useState(0)
    const [certifHeight, setCertifHeight] = useState(0)
    const [workHeight, setWorkHeight] = useState(0)
    const [projectHeight, setProjectHeight] = useState(0)
    const [skillsHeight, setSkillsHeight] = useState(0)
    const [toolsHeight, setToolsHeight] = useState(0)
    const [langHeight, setLangHeight] = useState(0)
    const [contentLength, setContentLength] = useState(0)
    const [pageHeight, setPageHeight] = useState(0)
  
    useEffect(() => {
        setContentLength(summaryHeight + headerHeight + topPageHeight + educationHeight + certifHeight + workHeight + projectHeight + skillsHeight + toolsHeight + langHeight)
    }, [summaryHeight, topPageHeight, headerHeight, educationHeight, certifHeight, workHeight, projectHeight, skillsHeight, toolsHeight, langHeight])

    useEffect(()=>{
        const mounted = (summaryHeight > 0 || topPageHeight > 0) 
                        && (!content.summary || summaryHeight > 0) 
                        && (!content.educations || educationHeight > 0)
                        && (!content.certifications || certifHeight > 0)
                        && (!content.experiences || workHeight > 0)
                        && (!content.projects || projectHeight > 0)
                        && (!content.skills || skillsHeight > 0)
                        && (!content.tools || toolsHeight > 0)
                        && (!content.langs || langHeight > 0)
         if(mounted){
            console.log('content lengths : ', contentLength, mounted, index);
            console.log('page height : ', pageHeight, mounted, index);

         }
    },[contentLength])




    return (

        <ResumePageContainer primaryColor={primaryColor} pentaContact={pentaContact} innerRef={containerRef} setPageHeight={setPageHeight}>
            {content.header ? <ResumeHeader headerData={content.header} primaryColor={primaryColor} logo_link={logo_link} innerRef={headerRef} setHeaderHeight={setHeaderHeight} /> : <ResumeTopPage primaryColor={primaryColor} logo_link={logo_link} innerRef={topPageRef} setTopPageHeight={setTopPageHeight} />}
            {content.summary && <ResumeSummery summary={content.summary} innerRef={summaryRef} setSummaryHeight={setSummaryHeight} />}
            {content.educations && <ResumeEducationList educations={content.educations} primaryColor={primaryColor} innerRef={educationRef} setEducationHeight={setEducationHeight} />}
            {content.certifications && <ResumeCertificationList certifications={content.certifications} primaryColor={primaryColor} innerRef={certifRef} setCertifHeight={setCertifHeight} />}
            {content.experiences && <ResumeExperienceList experiences={content.experiences} primaryColor={primaryColor} innerRef={workExpRef} setWorkHeight={setWorkHeight} />}
            {content.projects && <ResumeProjectsList projects={content.projects} primaryColor={primaryColor} innerRef={projectRef} setProjectHeight={setProjectHeight} />}
            {content.skills && <ResumeSkills skills={content.skills} primaryColor={primaryColor} innerRef={skillRef} setSkillsHeight={setSkillsHeight} />}
            {content.tools && <ResumeTools tools={content.tools} primaryColor={primaryColor} innerRef={toolRef} setToolsHeight={setToolsHeight} />}
            {content.langs && <ResumeLangs langs={content.langs} primaryColor={primaryColor} innerRef={langRef} setLangHeight={setLangHeight} />}
        </ResumePageContainer>

    );
};

export default ResumePage;