import Typography from '@mui/material/Typography';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ResearchSection({title, body}: {title:string, body:string}) {
  return (
    <>
      <Row className='d-flex flex-wrap m-3 justify-content-center align-items-center mt-8'>
        <Col style={{ minWidth: '400px', margin:'.5rem' }}>
          <Typography variant="h5" gutterBottom align='left'>
            {title}
          </Typography>
          <Typography variant="h6" gutterBottom align='left' className='mb-3'>
            {body}
          </Typography>
        </Col>
      </Row>
    </>
  );
}