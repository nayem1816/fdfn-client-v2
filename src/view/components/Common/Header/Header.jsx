import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../../../assets/icons/fdfn-logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const pages = [
    { id: 1, name: 'Home', link: 'home' },
    { id: 2, name: 'Pay bill', link: 'payBill' },
    { id: 3, name: 'Packages', link: 'packages' },
    { id: 4, name: 'FTP Site', link: 'ftpSite' },
    { id: 5, name: 'Live Tv', link: 'liveTv' },
    { id: 6, name: 'Movies', link: 'movies' },
    { id: 7, name: 'Coverages', link: 'coverage' },
    { id: 8, name: 'Contact', link: 'contact' },
    { id: 9, name: 'About', link: 'about' },
];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar
            position="static"
            style={{ backgroundColor: 'white' }}
            sx={{ boxShadow: 0, py: '10px' }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link to="/">
                            <img
                                className="logo-responsive"
                                src={logo}
                                alt=""
                            />
                        </Link>
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                            order: 2,
                            justifyContent: 'flex-end',
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            style={{ color: 'black' }}
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
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.id}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        <Link to={`/${page.link}`}>
                                            {page.name}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                            order: 1,
                        }}
                    >
                        <Link to="/">
                            <img
                                className="logo-responsive"
                                src={logo}
                                alt=""
                            />
                        </Link>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'flex-end',
                        }}
                    >
                        {pages.map((page) => (
                            <Link
                                key={page.id}
                                style={{ color: 'black' }}
                                to={`/${page.link}`}
                            >
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        mx: '2px',
                                        color: 'black',
                                        display: 'block',
                                        ':hover': {
                                            color: 'red',
                                        },
                                    }}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
