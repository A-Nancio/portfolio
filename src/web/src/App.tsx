import '@fontsource/Nunito'
import Header from './components/Header'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import HeroBanner from './components/Hero'
import Footer from './components/Footer'
import ProjectList from './components/ProjectList'

const App = () => {
    const theme = createTheme({
        typography: {
            fontFamily: 'Nunito',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Container maxWidth='md'>
                <HeroBanner />
                <ProjectList />
                <Footer />
            </Container>
        </ThemeProvider>
    )
}

export default App
