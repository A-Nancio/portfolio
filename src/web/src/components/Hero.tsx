import { Box, Grid, Typography } from '@mui/material'
import mascotImage from '../assets/mascot.svg'

const HeroBanner = () => {
    return (
        <Grid container spacing={6} sx={{ justifyContent: "space-between", alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: 1 }} sx={{ width: '70%' }}>
                <Typography variant='h3'>
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
            </Grid>
            <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }} sx={{ justifyContent: 'center' }}>
                <Box component='img' src={mascotImage} alt='mascotImage' sx={{ width: '80%', maxWidth: '250px' }}/>
            </Grid>
        </Grid>
    )
}

export default HeroBanner