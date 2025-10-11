import { Box, Grid, Typography } from '@mui/material'
import { ProjectCard } from './ProjectCard'
import type { ProjectCardProps } from './ProjectCard'

const ProjectList = () => {
    const projectList: ProjectCardProps[] = [
        {
            title: 'portfolio',
            year: '2025',
            description: 'A web page showcasing my portfolio as a Software Engineer',
            url: 'https://github.com/A-Nancio/portfolio',
        },
    ]

    return (
        <Box>
            <Typography variant='h3' gutterBottom>
                Projects
            </Typography>
            <Grid container>
                {
                    projectList.map(project => 
                        <ProjectCard {...project}/>
                    )
                }
            </Grid>
        </Box>
    )
}

export default ProjectList