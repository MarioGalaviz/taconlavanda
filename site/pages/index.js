import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
// import styles from '../styles/Home.module.css'
import { Box, Typography, Grid, Card, Button } from '@mui/material'
import tacos from '../components/media/tacos-g192d02e58_1920.webp'
import capturaDashDueno from '../components/media/captura-dash-dueno.png'
import { useRouter } from 'next/router'

export default function Home() {

    const router = useRouter()


    const sectionStyle = {
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: 'center',
        minHeight: '100vh'
    }
  return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            

            <Box style={sectionStyle} >
                <Image style={{ zIndex: 0, opacity: '30%' }} src={tacos} layout="fill" objectFit="cover"/>
                <Box height='12vh' />
                
                <Box height='88vh' display='flex' alignItems='center'  justifyContent='center'>
                    <Box width='74%'>
                        <Typography variant='h5' zIndex={1}>Esto apenas está comenzando</Typography>
                    </Box>
                </Box>
            </Box>

            <Grid container justifyContent='center'>
                        <Grid item xs={10} sx={{ my: 2 }}>
                            <Card width='' display='flex' alignItems='center'>
                                <Typography variant='h4' sx={{ color: 'text.secondary', pb: 1, pt: 4 }} align='center'>Lavanderías</Typography>
                                <Typography variant='h5' sx={{ color: 'text.secondary', py: .5}} align='center'>lavandaal.com</Typography>
                                <Box width="100%" sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
                                    <Image src={capturaDashDueno} alt='captura'/>
                                </Box>
                                <Box width="100%" sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                                    <Button variant="contained" onClick={() => {window.open("https://www.lavandaal.com", "_blank")}}>Ir</Button>
                                </Box>
                                <Box width="100%" sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                                    <Button variant="outlined" onClick={() => router.push('/lavandaal')}>Ver más</Button>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={10} sx={{ my: 2 }}>
                            <Card width=''>
                                <Typography variant='h4' sx={{color: 'text.secondary', pb: 1, pt: 4 }} align='center'>Cafeterías</Typography>
                                <Typography variant='h5' sx={{color: 'text.secondary', py: .5}} align='center'>cafeel.mx</Typography>
                                <Typography variant='h5' sx={{color: 'text.secondary', py: .5}} align='center'>(en construcción)</Typography>
                
                                <Box width="100%" sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                                    <Button variant="contained" onClick={() => {window.open("https://www.cafeel.mx", "_blank")}}>Ir</Button>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={10} sx={{ my: 2 }}>
                            <Card width=''>
                                <Typography variant='h4' sx={{color: 'text.secondary', pb: 1, pt: 4 }} align='center'>Taquerías</Typography>
                                <Typography variant='h5' sx={{color: 'text.secondary', py: .5}} align='center'>tacool.mx</Typography>
                                <Typography variant='h5' sx={{color: 'text.secondary', pt: .5 , pb: 4}} align='center'>(próximamente)</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                
            <Footer />
        </div>
  )
}
