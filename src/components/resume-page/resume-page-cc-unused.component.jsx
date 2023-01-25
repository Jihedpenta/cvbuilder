import React, { Component } from 'react';
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

class ResumePageComponent extends Component {
    constructor(props) {
        super(props);
        this.primaryColor = getColor(props.industry)
        this.logo_link = getLogoUrl(props.industry);

        this.containerRef = React.createRef();
        this.headerRef = React.createRef();
        this.topPageRef = React.createRef();
        this.summaryRef = React.createRef();
        this.educationRef = React.createRef();
        this.certifRef = React.createRef();
        this.workExpRef = React.createRef();
        this.projectRef = React.createRef();
        this.skillRef = React.createRef();
        this.toolRef = React.createRef();
        this.langRef = React.createRef();



    }

    componentWillMount() {

        console.log("on will mount",this.containerRef.current)
    }

    componentDidMount() {
        console.log("on did mount hole page",this.containerRef.current.offsetHeight)
        if (this.headerRef.current){console.log("on did mount header",this.headerRef.current.offsetHeight)}
        if (this.summaryRef.current){console.log("on did mount summaryRef",this.summaryRef.current.offsetHeight)}
        if (this.educationRef.current){console.log("on did mount educationRef",this.educationRef.current.offsetHeight)}
        if (this.certifRef.current){console.log("on did mount certifRef",this.summaryRef.current.certifRef)}


        // console.log("on did mount summaryRef",this.summaryRef.current.offsetHeight)


    }

    componentWillReceiveProps(nextProps) {
        console.log("on will recieve props",this.containerRef.current.offsetHeight)

    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log("on should update",this.containerRef.current.offsetHeight)
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("on will update",this.containerRef.current.offsetHeight)

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("on did update",this.containerRef.current.offsetHeight)

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <ResumePageContainer primaryColor={this.primaryColor} pentaContact={this.props.pentaContact} innerRef={this.containerRef}>
                {this.props.content.header ? <ResumeHeader headerData={this.props.content.header} primaryColor={this.primaryColor} logo_link={this.logo_link} innerRef={this.headerRef} /> : <ResumeTopPage primaryColor={this.primaryColor} logo_link={this.logo_link} innerRef={this.topPageRef} />}
                {this.props.content.summary && <ResumeSummery summary={this.props.content.summary} innerRef={this.summaryRef} />}
                {this.props.content.educations && <ResumeEducationList educations={this.props.content.educations} primaryColor={this.primaryColor} innerRef={this.educationRef} />}
                {this.props.content.certifications && <ResumeCertificationList certifications={this.props.content.certifications} primaryColor={this.primaryColor} innerRef={this.certifRef} />}
                {this.props.content.experiences && <ResumeExperienceList experiences={this.props.content.experiences} primaryColor={this.primaryColor} innerRef={this.workExpRef} />}
                {this.props.content.projects && <ResumeProjectsList projects={this.props.content.projects} primaryColor={this.primaryColor} innerRef={this.projectRef} />}
                {this.props.content.skills && <ResumeSkills skills={this.props.content.skills} primaryColor={this.primaryColor} innerRef={this.skillRef} />}
                {this.props.content.tools && <ResumeTools tools={this.props.content.tools} primaryColor={this.primaryColor} innerRef={this.toolRef} />}
                {this.props.content.langs && <ResumeLangs langs={this.props.content.langs} primaryColor={this.primaryColor} innerRef={this.langRef} />}
            </ResumePageContainer>
        );
    }
}



export default ResumePageComponent;