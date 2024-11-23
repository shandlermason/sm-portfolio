import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  return (
    <>
      <Box id="About" sx={{ paddingTop: '64px' }}>
      <Container fluid>
        <Row className='d-flex flex-wrap m-3 justify-content-center align-items-center mt-8'>
          <Col>
            <img src='portrait.png' alt="Description" style={{ borderRadius: '50%', maxWidth: '350px', margin: '.25rem', minWidth: '300px' }}/>
          </Col>
          <Col style={{ minWidth: '400px', margin:'.5rem' }}>
            <Typography variant="h6" gutterBottom align='left' className='mb-3'>
            I'm a Computer Science PhD Student at North Carolina State University Where I was advised by Dr. Sandeep Kaur Kuttal in the 
            Human-Centric Software Engineering Lab. My research identifies barriers that diverse developers face during collaboration in 
            pair programming and as teams. I try to come up with solutions such as HCI methodologies or a tool/agent to help developers 
            collaborate together. Also, I identify barriers and strategies associated with recruiting diverse developers for human-centric 
            SE research. My dissertation work focuses on making software more inclusive by creating a HCI methodology to evaluate software 
            to mesure its inclusivity for the 3C's in software development: coordination, collaboration, communication. I've had 6 summer 
            internships at X, X across various software engineering roles. 
            </Typography>
            <Typography variant="h6" gutterBottom align='left'>
              My PhD is funded by the National GEM Consortium Fellowship and NC State Provost's Doctoral Fellowship. I hold a MS in Computer 
              Science from North Carolina State University. I hold a BS in Computer Science from North Carolina Agricultural & Technical State 
              University where I also minored in Applied Mathematics.
            </Typography>
            <ButtonGroup variant='outlined' aria-label='Basic button group' disableElevation>
              <Button>CV</Button>
              <Button>Thesis Proposal</Button>
              <Button>Disseration</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
      </Box>
    </>
  );
}