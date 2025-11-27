import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ResearchSection from '../components/researchSection';

export default function Research() {
  return (
    <>
      <Box id="Research" sx={{ paddingTop: '32px' }}>
      <Container fluid>
        <Typography variant="h4" fontWeight="bold" gutterBottom align='left'>Research</Typography>
        <ResearchSection
          title="Discovering Societal Barriers to Teamwork"
          body=" I explored the attrition of marginalized developers in academia and industry to investigate how race and gender shape teamwork. 
          We conducted pair programming lab studies with 24 developers, forming 12 gender-balanced, same- and mixed-race pairs, followed by 
          individual retrospective interviews. Mixed-race pairs excelled in task distribution but encountered communication challenges and anxiety."
          photo='research_photos/RemotePairProgramming.png'
          alttext='Understanding Remote Pair Programming Dynamics Among Developers Image'
        />
        <ResearchSection
          title="Overcoming Barriers to Human-Centric Research"
          body="We examined researchers practices for engaging varied populations in human-centric SE research. 
          I conducted semi-structured interviews with 20 professionals from academia and industry across 4 continents. 
          We uncovered 23 key barriers and 18 strategies for engaging participants across race, gender, 
          culture, age, ability, and socioeconomic status, categorized into 4 thematic areas. Researchers 
          highlighted barriers, such as deteriorating mental health and participant reluctance rooted in historical exploitation."
          photo='research_photos/RecruitmentBarriers.png'
          alttext='Recruitment Barriers and Strategies for Supporting Researchers'
        />
      </Container>
      </Box>
    </>
  );
}