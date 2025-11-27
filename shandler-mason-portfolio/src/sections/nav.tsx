import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as React from 'react';
import { FaHome } from 'react-icons/fa';

const pages = ['About', 'Research', 'Publications', 'CV'];
//const pages = ['About', 'Research', 'Publications', 'Engagement', 'CV'];

function ElevateScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

const openCV = () => {
  window.open('/sm-portfolio/Website_CV.pdf', '_blank'); 
};

export default function NavBar(props: any) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <ElevateScroll {...props}>
      <AppBar position="fixed">
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Typography
              color="secondary"
              variant="h6"
              noWrap
              component="a"
              href="#About"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                // color: 'inherit',
                textDecoration: 'none',
                color: 'white'
              }}
            >
              <FaHome style={{ marginRight: '8px' }} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <React.Fragment key={page}> {/* Added Fragment */}
                  {page === 'CV' ? (
                    <Button
                      onClick={openCV}
                      sx={{ my: 2, color: 'primary', display: 'block' }}
                    >
                      {page}
                    </Button>
                  ) : (
                    <Button
                      onClick={handleCloseNavMenu}
                      href={'#' + page}
                      sx={{ my: 2, color: 'primary', display: 'block' }}
                    >
                      {page}
                    </Button>
                  )}
                </React.Fragment>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#profile"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              S.A.Mason
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <React.Fragment key={page}> {/* Added Fragment */}
                {page === 'CV' ? (
                  <Button
                    onClick={openCV}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ) : (
                  <Button
                    onClick={handleCloseNavMenu}
                    href={'#' + page}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                )}
              </React.Fragment>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevateScroll>
  );
}