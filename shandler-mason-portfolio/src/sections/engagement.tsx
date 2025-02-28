import { Avatar, Box, Card, CardContent, CardHeader, List, ListItem, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const internshipData = [
  {
    company: "The Aerospace Corporation",
    logo: "internship_photos/aerospace.png",
    internships: [
      { title: "Graduate Intern Ⅲ", date: "Summer 2025" },
      { title: "Graduate Intern ⅠⅠ", date: "Summer 2024" },
      { title: "Graduate Intern Ⅰ & National Space Intern", date: "Summer 2023" },
      { title: "Graduate Intern BS", date: "Summer 2022" },
    ],
  },
  {
    company: "Target Corporation", 
    logo: "internship_photos/target.png",
    internships: [
      { title: "Software Engineering Intern", date: "Summer 2021" },
    ],
  },
  {
    company: "The New York Times", 
    logo: "internship_photos/nyt.png",
    internships: [
      { title: "Software Engineering Intern", date: "Summer 2020" },
    ]
  },
    {
    company: "Facebook", 
    logo: "internship_photos/facebook.png",
    internships: [
        { title: "Facebook University Engineering", date: "Summer 2019" },
    ]
  },
];

export default function Engagement() {
  return (
    <>
      <Box id="Engagement" fontWeight="bold" sx={{ paddingTop: '32px' }}>
      <Container fluid>
        <Typography variant="h4" fontWeight="bold" gutterBottom align='left'>Engagement</Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom align='left'>International Research Community Activities</Typography>
        <List sx={{ paddingLeft: 5, listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
              <ListItemText primary="Publicity and Social Media Chair, IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC) Organizing Committee, 2025"/>
            </ListItem>
        </List>

        <Typography variant="h5" fontWeight="bold" gutterBottom align='left'>University Activities</Typography>
        <List sx={{ paddingLeft: 5, listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
              <ListItemText primary="Graduate Liaison for Code Black, NCSU Department of Computer Science, 2025"/>
            </ListItem>
        </List>

        <Typography variant="h5" fontWeight="bold" gutterBottom align='left'>Teaching</Typography>
        <List sx={{ paddingLeft: 5, listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
              <ListItemText primary="Teaching Assistant (TA), CSC 454/554 Human-Computer Interaction (120 students), Spring 2025"/>
            </ListItem>
        </List>


        <Typography variant="h5" fontWeight="bold" gutterBottom align='left'>Internships</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {internshipData.map((internship) => (
            <Box key={internship.company} sx={{ width: { xs: '100%', sm: '48%', md: '23.5%' }}}>
              <Card>
                <CardHeader
                  avatar={<Avatar alt={internship.company} src={internship.logo} sx={{ width: 60, height: 60 }} />}
                  title={<Typography variant="h6" fontWeight="bold" gutterBottom align='left'>{internship.company}</Typography>}
                  sx={{ paddingBottom: 0 }}
                />
                <CardContent sx={{ paddingTop: 0 }}>
                  <List dense>
                    {internship.internships.map((role) => (
                      <ListItem key={role.title} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <ListItemText primary={role.title} />
                        <ListItemText secondary={role.date} sx={{ textAlign: 'right' }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
      </Box>
    </>
  );
}