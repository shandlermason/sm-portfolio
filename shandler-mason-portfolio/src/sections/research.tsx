import { Container } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResearchSection from '../components/researchSection';

export default function Research() {
  return (
    <>
      <Box id="Research" sx={{ paddingTop: '32px' }}>
      <Container fluid>
        <Typography variant="h4" fontWeight="bold" gutterBottom align='left'>Research</Typography>
        <ResearchSection
          title="Understanding Remote Pair Programming Dynamics Among Developers"
          body="This research investigated how race impacts pair programming dynamics among 24 professional developers in 12 same- and mixed-race 
          (Black-White) remote pairs in the United States, analyzing productivity, self-efficacy, creativity, leadership styles, interruptions, 
          non-verbal communication, and attitudes. We highlighted the impact of race on collaboration dynamics and underscored the need for diverse 
          tools and methods to address racial disparities in the Software Engineering field."
          photo='research_photos/RemotePairProgramming.png'
          alttext='Understanding Remote Pair Programming Dynamics Among Developers Image'
        />
        <ResearchSection
          title="Recruitment Barriers and Strategies for Supporting Researchers"
          body="This research identified barriers faced by inclusive Human-Centric Software Engineering (HCSE) researchers in recruiting developers 
          from underrepresented backgrounds for user studies. We developed strategies, informed by interdisciplinary research, and created an 
          actionable framework to improve participant outreach and recruitment, promoting greater inclusion in HCSE research for both novice and 
          experienced researchers."
          photo='research_photos/RecruitmentBarriers.png'
          alttext='Recruitment Barriers and Strategies for Supporting Researchers'
        />
      </Container>
      </Box>
    </>
  );
}