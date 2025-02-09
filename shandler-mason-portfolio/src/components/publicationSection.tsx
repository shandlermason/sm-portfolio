import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PublicationSection({number, reference, doi}: {number:string, reference:any, doi:string}) {
  return (
    <>
      <Row className='d-flex flex-wrap m-3 justify-content-center align-items-center mt-8'>
        <Col style={{ minWidth: '400px', margin:'.5rem' }}>
        <Typography variant="h6" gutterBottom align='justify'>
          [{number}] {reference} [{<Link href={doi} target='_blank'>DOI</Link>}]
        </Typography>
        </Col>
      </Row>
    </>
  );
}