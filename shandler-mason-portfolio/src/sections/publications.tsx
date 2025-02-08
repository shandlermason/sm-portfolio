import { Container } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicationSection from '../components/publicationSection';


export default function Publications() {
  
  return (
    <>
      <Box id="Publications" sx={{ paddingTop: '32px' }}>
      <Container fluid>
        <Typography variant="h4" fontWeight="bold" gutterBottom align='left'>Publications</Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom align='left'>Refereed Journal Publications</Typography>
        <PublicationSection
          number='1'
          reference={<><strong>Shandler A. Mason</strong>, and Sandeep Kaur Kuttal. "Diversity's Double-Edged Sword: Analyzing Race's Effect on Remote Pair Programming Interactions." ACM Transactions on Software Engineering and Methodology (TOSEM). November 2024.</>}
          doi="https://doi.org/10.1145/3699601"
        />


        <Typography variant="h5" fontWeight="bold" gutterBottom align='left'>Rigorously Reviewed Conference Publications</Typography>
        <PublicationSection
          number="1"
          reference={<>
            <strong>Shandler A. Mason</strong>, Hank Lenham, Sandeep Kuttal, “Breaking the Silos: An Actionable Framework for Recruiting Diverse Participants in SE,” Software Engineering in Society (SEIS) at 47th International Conference on Software Engineering (ICSE), 2025.
          </>}
          doi=""
        /> 
        <PublicationSection
          number="2"
          reference={<>
            <strong>Shandler A. Mason</strong>, Sandeep Kuttal, “Analyzing Gender-Based Dynamics in Remote Pair Programming Interactions,” 6th Workshop on Gender Equality, Diversity, and Inclusion in Software Engineering at 47th International Conference on Software Engineering (ICSE), 2025.
          </>}
          doi=""
        /> 
        <PublicationSection
          number="3"
          reference={<>
            Sandeep Kaur Kuttal, Jacob Hart, Marcus Ensley, <strong>Shandler A. Mason</strong>, “Pair Programming in the Lab vs. Wild: A Qualitative Analysis of Creativity Strategies and Dialogue Styles for Agent Training Data,” 27th International Conference on Human-Computer Interaction, HCI International (HCII), 2025.
          </>}
          doi=""
        />      
        <PublicationSection
          number='4'
          reference={<><strong>Shandler A. Mason</strong>, Sanket Nain, and Sandeep Kaur Kuttal. "Bridging Perspectives: Unveiling Racial Dynamics in Remote Pair Programming Communication." International Conference on Human-Computer Interaction (HCII). Cham: Springer Nature Switzerland, June 2024.</>}
          doi="https://doi.org/10.1007/978-3-031-60441-6_18"
        />
        <PublicationSection
          number='5'
          reference={<>Jacob Hart, Jake AuBuchon, Alexander McAuliffe, <strong>Shandler A. Mason</strong>, Sandeep Kaur Kuttal. "Navigating NLU Challenges in Pair Programming Agents: A Study on Data Size, Gender, Language, & Domain Effects." International Conference on Human-Computer Interaction (HCII). Cham: Springer Nature Switzerland, June 2024.</>}
          doi="https://doi.org/10.1007/978-3-031-60606-9_20"
        />
        <PublicationSection
          number='6'
          reference={<><strong>Shandler A. Mason</strong>, and Sandeep Kaur Kuttal. "Investigating Interracial Pair Coordination During Remote Pair Programming." 2023 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC). IEEE, October 2023.</>}
          doi="https://doi.org/10.1109/VL-HCC57772.2023.00047"
        />         

        {/* Copy and Paste this template! 
        // Make sure to surround your name with strong to bold: <strong>Shandler A. Mason</strong>
        //Make sure to include http:// or https:// for each doi
        */}
        {/* 
        <PublicationSection
          number=""
          reference={<>

          </>}
          doi=""
        /> 
        */}

      </Container>
      </Box>
    </>
  );
}