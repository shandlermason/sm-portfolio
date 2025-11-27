import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

export default function Profile() {
  return (
    <>
      <Box id="About" sx={{ paddingTop: '80px' }}>
        <Container fluid>
          <Row className='d-flex flex-wrap m-3 justify-content-center align-items-center mt-8'>
            <Col xs={12} md={6} lg={4} className="text-center mb-4">
              <img 
                src='portrait.png' 
                alt="Profile Picture of Shandler A. Mason" 
                style={{ 
                  borderRadius: '50%', 
                  maxWidth: '100%', 
                  height: 'auto',
                  width: '350px',
                  margin: '.25rem'
                }}
              />
            </Col>
            <Col xs={12} md={6} lg={8}>
              <Typography variant='h4' align='center' className='mb-3' color='secondary' sx={{ fontSize: '3rem', fontWeight: 'bolder'}}><strong>Shandler A. Mason</strong></Typography>
              <br />
              <Typography variant='h5' gutterBottom align='center' className='mb-3 display-4' color='secondary'>
                I am a Computer Science doctoral candidate at NC State University.
                <br />
                <div style={{ fontWeight: 'bolder', color: '#005A8D', paddingTop: '15px'}}>
                  <i>I am on the job market!</i>
                </div>
              {/*I'm a Computer Science Ph.D. Candidate <i>discovering</i> <strong>societal</strong> and <strong>technological barriers</strong> and <i>inventing</i> <strong>methodologies</strong> to support software practitioners.*/}
              </Typography>
              {/* <Link href='https://2025.hci.international/W8.html' target='_blank'><strong>Join our upcoming workshop at HCII 2025 in Gothenburg, Sweden!</strong></Link> <br/> <br/> */}
              {/* <Link href='https://www.linkedin.com/in/shandler-mason-306207169/' target='_blank'><strong>Join my network on LinkedIn!</strong></Link> <br/> <br/> */}

              <ButtonGroup variant='contained' aria-label='Basic button group' disableElevation>
                <Button href="/sm-portfolio/Website_CV.pdf" target='_blank'><strong>CV</strong></Button>
                <Button href="https://www.linkedin.com/in/shandler-mason-m-s-306207169/" target='_blank'><strong>LinkedIn</strong></Button>
                {/* <Button href="/sm-portfolio/sa_mason_resume.pdf" target='_blank'><strong>Resume</strong></Button> */}
                {/* <Button href="/sm-portfolio/short_bio.pdf" target='_blank'><strong>Short Bio</strong></Button> */}
                {/* <Button href="/sm-portfolio/Headshot.jpg" target='_blank'><strong>Headshot</strong></Button> */}
                {/* <Button>Thesis Proposal</Button> */}
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
}
