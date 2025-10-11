import { Box, Button, Grid, Typography } from '@mui/material'
import mascotImage from '../assets/mascot.svg'

const HeroBanner = () => {
    return (
        <Grid container sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', mb: 5 }}>
            <Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: 1 }} sx={{ width: '70%', textAlign: { md: 'left', xs: 'center'} }}>
                <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
                    Hi! I'm António
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    I'm a software engineer, a music enthusiast and I've been building software since 2023. 
                    This is my small, digital corner where I can express my journey, 
                    frustration and lessons as a Software Engineer.
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    Everything on this site is written & developed by me, not AI.
                </Typography>
                <Button variant='outlined' color='inherit' sx={{ mt: 1 }}>
                    About me
                </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
                <Box component='img' src={mascotImage} alt='mascotImage' sx={{ width: '80%', maxWidth: '250px' }}/>
            </Grid>
        </Grid>
    )
}

export default HeroBanner