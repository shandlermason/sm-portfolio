import { Container } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicationSection from '../components/publicationSection';

// Make sure when copying and pasting the reference to use a \ for all "

export default function Publications() {
  return (
    <>
      <Box id="Publications" sx={{ paddingTop: '32px' }}>
      <Container fluid>
        <Typography variant="h4" gutterBottom align='left'>Publications</Typography>
        <PublicationSection
          reference={"Shandler A. Mason, and Sandeep Kaur Kuttal. \"Diversity's Double-Edged Sword: Analyzing Race's Effect on Remote Pair Programming Interactions.\" ACM Transactions on Software Engineering and Methodology (TOSEM). November 2024."}
          pdf="PDF"
          doi="DOI"
        />
        <PublicationSection
          reference={"Shandler A. Mason, Sanket Nain, and Sandeep Kaur Kuttal. \"Bridging Perspectives: Unveiling Racial Dynamics in Remote Pair Programming Communication.\" International Conference on Human-Computer Interaction (HCII). Cham: Springer Nature Switzerland, June 2024."}
          pdf="PDF"
          doi="DOI"
        />
        <PublicationSection
          reference={"Shandler A. Mason, and Sandeep Kaur Kuttal. \"Investigating Interracial Pair Coordination During Remote Pair Programming.\" 2023 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC). IEEE, October 2023."}
          pdf="PDF"
          doi="DOI"
        />
        <PublicationSection
          reference={"Jacob Hart, Jake AuBuchon, Alexander McAuliffe, Shandler A. Mason, Sandeep Kaur Kuttal. \"Navigating NLU Challenges in Pair Programming Agents: A Study on Data Size, Gender, Language, & Domain Effects.\" International Conference on Human-Computer Interaction (HCII). Cham: Springer Nature Switzerland, June 2024."}
          pdf="PDF"
          doi="DOI"
        />

      </Container>
      </Box>
    </>
  );
}