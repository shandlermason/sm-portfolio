import '@fontsource/roboto/300.css';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import About from './sections/about';
import NavBar from './sections/nav';
import Profile from './sections/profile';
import Publications from './sections/publications';
import Research from './sections/research';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    //fontWeight: 300,
    allVariants: {
      color: '#000000'
      //'#45555E'
    }
  },
  palette: {
    background: {
      default: '#FFFFFF'
      //'#fbf9ef', // Beige
    },
    primary: {
      main: '#005A8D'
      //'#6DB1E1'
      //'#C77A6D', // Darker Dusty Rose (#C77A6D) or Richer Deep Rose (#D16B5A)
      // main: '#f584a8', // Pink
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
          backgroundColor: "#FFFFFF",
          //""rgb(254, 252, 244)", // Beige
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#C77A6D'
          //color: '#f584a8', // Pink
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
        {/*<Divider variant="middle"/>
        <Engagement/>
        <Divider variant="middle"/>*/}
      </Container>
    </ThemeProvider>
  )
}

export default App
