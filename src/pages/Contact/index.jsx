import { Box, Input, Typography } from "@mui/material"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function Contact(){
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
                contato
            </Typography>

            <Typography
                sx={{
                    width: '70%',
                    fontSize: '24px',
                    textAlign: 'left',
                    color: '#000000',
                }}
            >
                Nome
            </Typography>
            <Input
                sx={{
                    bgcolor: '#999999',
                    borderWidth: '0',
                    outlineWidth: 'none',
                    margin: '10px 0px',
                    padding: '10px',
                    width: '70%',
                }}
            />

            <Typography
                sx={{
                    width: '70%',
                    fontSize: '24px',
                    textAlign: 'left',
                    color: '#000000',
                }}
            >
                Email
            </Typography>
            <Input
                sx={{
                    bgcolor: '#999999',
                    borderWidth: '0',
                    outlineWidth: 'none',
                    margin: '10px 0px',
                    padding: '10px',
                    width: '70%',
                }}
            />

            <Typography
                sx={{
                    width: '70%',
                    fontSize: '24px',
                    textAlign: 'left',
                    color: '#000000',
                }}
            >
                Telefone
            </Typography>
            <Input
                sx={{
                    bgcolor: '#999999',
                    borderWidth: '0',
                    outlineWidth: 'none',
                    margin: '10px 0px',
                    padding: '10px',
                    width: '70%',
                }}
            />

            <Typography
                sx={{
                    width: '70%',
                    fontSize: '24px',
                    textAlign: 'left',
                    color: '#000000',
                }}
            >
                Mensagem
            </Typography>
            <Input
                sx={{
                    bgcolor: '#999999',
                    borderWidth: '0',
                    outlineWidth: 'none',
                    margin: '10px 0px',
                    padding: '10px',
                    width: '70%',
                    height: '24vh',
                }}
            />
            <Box
                sx={{
                    bgcolor: '#FAB628',
                    padding: '10px 20px',
                }}
            >
                <Typography
                    sx={{
                        color: '#000000',
                        fontSize: '24px',
                    }}
                >
                    Enviar
                </Typography>
            </Box>
            <Footer />
        </Box>
    )
}

export default Contact