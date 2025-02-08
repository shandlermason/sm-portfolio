import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <>
      <Box id="About" sx={{ paddingTop: '32px' }}>
        <Container fluid>
        <Typography variant="h4" fontWeight="bold" gutterBottom align='left'>About</Typography>
            <Container fluid>
              <Typography variant="h6" gutterBottom align='left' className='mb-3'>
              I'm a Ph.D. student in the Department of Computer Science at North Carolina State University where I am advised by Dr. Sandeep Kaur Kuttal 
              in the Human Factors + Experience Engineering Lab <i>(Discovering and Inventing for Human-Centered SE and AI)</i>. My dissertation will explore the 
              human side of software engineering, addressing societal and technological barriers to promote more inclusive and equitable remote collaboration.
              </Typography>
              <Typography variant="h6" gutterBottom align='left'>
              I hold a M.S. in Computer Science from North Carolina State University and a B.S. in Computer Science with a Minor in Applied Mathematics from North 
              Carolina Agricultural & Technical State University.
              </Typography>
              </Container>
        </Container>
      </Box>
    </>
  );
}
