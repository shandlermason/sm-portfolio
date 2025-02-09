import './App.css'
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import NavBar from './sections/nav'
import Profile from './sections/profile'
import Research from './sections/research';
import Publications from './sections/publications';
import Engagement from './sections/engagement';
import About from './sections/about';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Lora', 'serif'].join(','),
    allVariants: {
      color: '#45555E'
    }
  },
  palette: {
    background: {
      default: '#fbf9ef', // Beige
    },
    primary: {
      main: '#f584a8', // Pink
    },
    secondary: {
      main: '#45555E'
      // main: '#4E606A'
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(254, 252, 244)", // Beige
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#f584a8', // Pink
        },
      },
    },
  },
});



function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters>
        <NavBar/>
        <Profile/>
        <Divider variant="middle"/>
        <About/>
        <Divider variant="middle"/>
        <Research/>
        <Divider variant="middle"/>
        <Publications/>
        <Divider variant="middle"/>
        <Engagement/>
        <Divider variant="middle"/>
      </Container>
    </ThemeProvider>
  )
}

export default App
