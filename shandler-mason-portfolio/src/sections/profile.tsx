import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {Link} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  return (
    <>
      <Box id="About" sx={{ paddingTop: '64px' }}>
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
              <Typography variant='h4' align='center' className='mb-3' color='secondary'><strong>Shandler A. Mason, M.S.</strong></Typography>
              <Typography variant='h5' gutterBottom align='left' className='mb-3 display-4' color='secondary'>
              I'm a Computer Science Ph.D. student <i>discovering</i> <strong>societal</strong> and <strong>technological barriers</strong> and <i>inventing</i> <strong>methodologies</strong> to support software practitioners.
              </Typography>

              <Link href='https://2025.hci.international/W8.html' target='_blank'><strong>Join our upcoming workshop at HCII 2025 in Gothenburg, Sweden!</strong></Link> <br/> <br/>

              <ButtonGroup variant='outlined' aria-label='Basic button group' disableElevation>
                <Button href="/shandler-mason-portfolio/sa_mason_cv.pdf" target='_blank'><strong>CV</strong></Button>
                <Button href="/shandler-mason-portfolio/sa_mason_resume.pdf" target='_blank'><strong>Resume</strong></Button>
                {/* <Button>Thesis Proposal</Button> */}
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
}
