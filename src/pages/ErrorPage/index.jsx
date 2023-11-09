import { Link } from 'react-router-dom'
import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'

import { Box, Typography } from '@mui/material'
function ErrorPage(){
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
            <Box
                sx={{
                    padding: '10px',
                    marginTop: '50px',
                    width: '70%',
                    minHeight: '300px',
                    bgcolor: '#999999',
                    position: 'relative',
                }}
            >
                <Typography
                    sx={{
                        color: "#000000",
                        fontSize: '60px',
                    }}
                    variant="body2"
                >
                    Página indisponivel no momento ou não encontrada
                </Typography>
                <Box
                    sx={{
                        bgcolor: '#ffffff',
                        width: '100px',
                        borderRadius: '5px',
                        margin: '0 auto',
                        position: 'absolute',
                        bottom: '2%',
                        left: '45%',
                    }}
                >
                    <Link to="/">
                        <Typography
                            sx={{
                                textAlign: 'center',
                                textDecoration: 'none',
                                fontSize: '24px',
                            }}
                        >
                            Home
                        </Typography>
                    </Link>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default ErrorPage