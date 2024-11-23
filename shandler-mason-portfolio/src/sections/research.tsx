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
        <Typography variant="h4" gutterBottom align='left'>Research</Typography>
        <ResearchSection
          title="Remote Pair Programming Among Diverse Developers"
          body="The goal of this research was to understand how race impacts interactions and collaboration among SE developers due to a history of 
            racial inequalities in the US in which there is a historical under-representation of Black developers in the tech industry, with White 
            developers comprising the majority. We analyzed how developers coordinated, communicated, and collaborated and creativity styles and 
            attitude and interactions, leadership style, interruption, communication prompts, and non-verbal cues. Our study emphasizes race's 
            impact on remote pair programming dynamic and underscores the need for diverse tools and methods to address racial disparities for 
            collaboration. This research was supported by the Air Force Office of Scientific Research and National Science Foundation."
        />
        <ResearchSection
          title="Recruiting Diverse Participants in SE"
          body="The goal of this research was to understand the barriers human-centric SE researchers face when recruiting participants from 
          underrepresented backgrounds, including gender, race, culture, socioeconomic status, disability, religion, sexual orientation, and age. 
          To address the challenges we developed actionable strategies to improve participant outreach and enhance recruitment practices in SE for 
          both novice and experienced researchers to increase grater inclusion in HCSE research. This research was supported by XXX"
        />
      </Container>
      </Box>
    </>
  );
}