import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default function About() {
  return (
    <>
      <Box id="About" sx={{ paddingTop: '32px' }}>
        <Container fluid>
        <Typography variant="h4" fontWeight="bold" gutterBottom align='left'>About</Typography>
            <Container fluid>
              <Typography variant="h5" gutterBottom align='center' className='mb-3'>
              I integrate <strong>human-computer interaction, software engineering, human factors, </strong> 
              and <strong>policy</strong> to uncover societal barriers for equitable software. 
              </Typography>

              <br />
              <Typography variant="h6" gutterBottom align='right' className='mb-3'>
              I am advised by <a href="https://skuttal.github.io/skk/" target="_blank" rel="noopener noreferrer"> Dr. Sandeep Kuttal</a>.
              My Ph.D. is funded by the National GEM Consortium and NC State's Provost Office.
              <br /> I also hold an M.S. in Computer Science from NC State and a B.S. in Computer Science with a <br /> minor in Applied Mathematics from NC Agricultural & Technical State University.
              
              {/*I am advised by <a href="https://skuttal.github.io/skk/" target="_blank" rel="noopener noreferrer"> Dr. Sandeep K. Kuttal </a>. */}

              {/*I'm a Ph.D. Candidate in the Department of Computer Science at North Carolina State University where I am advised by Dr. Sandeep Kaur Kuttal
              in the Human Factors + Experience Engineering Lab <i>(Discovering and Inventing for Human-Centered SE and AI)</i>. My dissertation will explore the 
              human side of software engineering, addressing societal and technological barriers to promote more inclusive and equitable remote collaboration.*/}
              </Typography>
              <Typography variant="h6" gutterBottom align='left'>
              {/*I hold a M.S. in Computer Science from North Carolina State University and a B.S. in Computer Science with a Minor in Applied Mathematics from North 
              Carolina Agricultural & Technical State University.*/}
              </Typography>
              </Container>
        </Container>
      </Box>
    </>
  );
}
