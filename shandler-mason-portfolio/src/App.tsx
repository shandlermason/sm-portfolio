import './App.css'
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import NavBar from './sections/nav'
import Profile from './sections/profile'
import Research from './sections/research';
import Publications from './sections/publications';
import Impact from './sections/impact';

function App() {

  return (
    <>
      <Container maxWidth={false} disableGutters>
        <NavBar/>
        <Profile/>
        <Divider variant="middle"/>
        <Research/>
        <Divider variant="middle"/>
        <Publications/>
        <Divider variant="middle"/>
        <Impact/>
        <Divider variant="middle"/>
      </Container>
    </>
  )
}

export default App
