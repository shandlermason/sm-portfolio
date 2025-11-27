import Box from '@mui/material/Box'; // MUI Box component
import { Container } from 'react-bootstrap';

import Typography from '@mui/material/Typography'; // MUI Typography component
import { FaFilePdf } from 'react-icons/fa'; // PDF icon from React Icons

export default function Publications() {
  
return (
    <Box id="Publications" sx={{ paddingTop: '32px' }}>
      {/* Main Container to hold everything */}
      <Container fluid>
        {/* Publications Title */}
        <Typography variant="h4" fontWeight="bold" gutterBottom align="left">
          Publications
        </Typography>

        {/* Publication Table / Flex Container */}
        <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
          {/* Column Headers */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              color: '#005A8D',
              marginBottom: '8px',
            }}
          >
          </Box>

          {/* Publication Content */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            {/* Left side: Journal/Conference name (TOSEM) */}
            <Box sx={{ width: '20%', paddingLeft: '200px'}}>
              <Typography variant="body1" sx={{ margin: 0, lineHeight: 1.5, fontWeight: 'bolder', color: '#005A8D', fontSize: '1.1rem'}}>
                TOSEM 2024
              </Typography>
            </Box>

            {/* Middle: Publication Details (Authors, Title, etc.) */}
            <Box sx={{ width: '60%' }}>
              <Typography variant="body1" sx={{ margin: 0, lineHeight: 1.5 }}>
                <Typography variant="body1" component="span" sx={{ textDecoration: 'underline' }}>
                  <strong>Mason, S. A.,</strong></Typography> & Kuttal, S. K.
                <i> Diversity's Double-Edged Sword: Analyzing Race's Effect on Remote Pair Programming Interactions. </i> 
                ACM Transactions on Software Engineering and Methodology, pp. 1–45. 
                <Typography variant="body1" component="span" sx={{ fontWeight: 'bolder', color: '#005A8D' }}>
                  <strong> *Journal-First; Presented at ICSE*</strong></Typography>
              </Typography>
            </Box>

            {/* Right side: PDF Icon with Link */}
            <Box sx={{ width: '10%', textAlign: 'right', paddingRight: '200px' }}>
              <a
                href="https://doi.org/10.1145/3699601"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#6DB1E1', fontSize: '1.5rem' }}
              >
                <FaFilePdf /> {/* PDF icon */}
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
      {/* Divider line */}
      <hr style={{ margin: '10px 0', borderColor: '#ddd', borderWidth: '1px' }} />
    </Box>
  );
}