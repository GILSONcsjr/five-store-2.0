import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'
import { Box, Typography } from '@mui/material'
function About(){
    return(
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Navbar />
            <Typography
                sx={{
                    textAlign: 'center',
                    color: '#000000',
                    fontSize: '50px',
                    margin: '10px 0px',
                    textTransform: 'uppercase',
                }}
                variant="h1"
            >
                Sobre nós
            </Typography>
            <Box
                sx={{
                    padding: '10px',
                    marginTop: '50px',
                    width: '70%',
                    minHeight: '300px',
                    bgcolor: '#999999',
                }}
            >
                <Typography
                    sx={{
                        color: "#000000",
                        fontSize: '50px',
                    }}
                    variant="body2"
                >
                    Somos uma empresa especializada em vendas de variados tipos de produtos, desde eletrodomésticos a sementes, a escolha é sua! Estamos no mercado a 45 anos, sendo uma das maiores empresas nacionais!
                </Typography>
            </Box>
            <Footer />
        </Box>
    )
}

export default About