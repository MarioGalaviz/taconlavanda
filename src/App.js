import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Typography, Box, Grid, Card, Button } from '@mui/material';
import capturaDashDueno from './media/captura-dash-dueno.png'

function App() {
    const theme =  createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#8656ac',
            },
            secondary: {
                main: '#7dac56',
            },
            background: {
                default: '#ede7f3',
                paper: '#d3c3e1',
            },
        },
        typography: {
            fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
            h1: {
                fontWeight: 500,
            },
        },
    
    })
    return (
        <div className="App">
        <ThemeProvider theme={theme}>
            
            <Typography variant='h2' sx={{color: 'text.secondary', pb: 2.5, pt: 4.5 }}>Esto apenas está comenzando</Typography>
            
            <Grid container justifyContent='center'>
                <Grid item xs={10} sx={{ my: 2 }}>
                    <Card width=''>
                        <Typography variant='h4' sx={{ color: 'text.secondary', pb: 1, pt: 4 }}>Lavanderías</Typography>
                        <Typography variant='h5' sx={{ color: 'text.secondary', py: .5}}>lavandaal.com</Typography>
                        <Box width="100%" sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
                            <img src={capturaDashDueno} alt='captura' className="capturas"/>
                        </Box>
                        <Box width="100%" sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                            <Button variant="contained" onClick={() => {window.open("https://www.lavandaal.com", "_blank")}}>Ir</Button>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={10} sx={{ my: 2 }}>
                    <Card width=''>
                        <Typography variant='h4' sx={{color: 'text.secondary', pb: 1, pt: 4 }}>Cafeterías</Typography>
                        <Typography variant='h5' sx={{color: 'text.secondary', py: .5}}>cafeel.mx</Typography>
                        <Typography variant='h5' sx={{color: 'text.secondary', py: .5}}>(en construcción)</Typography>
          
                        <Box width="100%" sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                            <Button variant="contained" onClick={() => {window.open("https://www.cafeel.mx", "_blank")}}>Ir</Button>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={10} sx={{ my: 2 }}>
                    <Card width=''>
                        <Typography variant='h4' sx={{color: 'text.secondary', pb: 1, pt: 4 }}>Taquerías</Typography>
                        <Typography variant='h5' sx={{color: 'text.secondary', py: .5}}>tacool.mx</Typography>
                        <Typography variant='h5' sx={{color: 'text.secondary', pt: .5 , pb: 4}}>(próximamente)</Typography>
                    </Card>
                </Grid>
            </Grid>
            <Box height='5vh'/>
            
        </ThemeProvider>
        </div>
    );
}

export default App;
