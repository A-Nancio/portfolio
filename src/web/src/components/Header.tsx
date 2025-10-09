import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return (
        <AppBar position='static' color='transparent'>
            <Container maxWidth='xl'>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        António Venâncio
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Typography>
                            About me
                        </Typography>
                        <Typography>
                            My projects
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default Header;