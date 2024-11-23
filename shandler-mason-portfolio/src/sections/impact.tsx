import { Container } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Impact() {
  return (
    <>
      <Box id="Impact" sx={{ paddingTop: '32px' }}>
      <Container fluid>
        <Typography variant="h4" gutterBottom align='left'>Impact</Typography>
        <Typography variant="h5" gutterBottom align='left'>Teaching</Typography>
        <Typography variant="h5" gutterBottom align='left'>Service</Typography>
        <Typography variant="h5" gutterBottom align='left'>News</Typography>
      </Container>
      </Box>
    </>
  );
}