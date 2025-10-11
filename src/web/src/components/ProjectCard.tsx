import { Card, Grid, Link, Typography } from "@mui/material"

export interface ProjectCardProps {
    year: string;
    title: string;
    description: string;
    url: string;
}

export const ProjectCard = ({ year , title, description, url }: ProjectCardProps) => {
    return (
        <Grid size={4}>
            <Card>
                <Typography>
                    {year}
                </Typography>
                <Link href={url}>
                    <Typography>
                        {title}
                    </Typography>
                </Link>
                <Typography>
                    {description}
                </Typography>
            </Card>
        </Grid>
    )
}
