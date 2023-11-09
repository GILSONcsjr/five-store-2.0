import { Box, Typography } from "@mui/material"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function Home(){
    return(
        <Box
            sx={{
                flex: 1,
                margin: "0px",
                padding: "0px",
                justifyContent: 'flex-start',
                alignItems: "center",
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
                Ofertas
            </Typography>
                <Box
                    sx={{
                        margin: '0 auto',
                        width: '80%',
                        height: '200px',
                        bgcolor: '#d9d9d9',
                        border: '1px solid #000000',

                    }}
                ></Box>
                <Box
                    sx={{
                        width: '80%',
                        padding: '0px',
                        display: 'flex',
                        margin: '0 auto',
                        marginTop: '20px',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            width: '20%',
                            height: '200px',
                            bgcolor: '#d9d9d9',
                            border: '1px solid #000000',
                        }}
                    ></Box>
                    <Box
                        sx={{
                            width: '20%',
                            height: '200px',
                            bgcolor: '#d9d9d9',
                            border: '1px solid #000000',
                        }}
                    ></Box>
                    <Box
                        sx={{
                            width: '20%',
                            height: '200px',
                            bgcolor: '#d9d9d9',
                            border: '1px solid #000000',
                        }}
                    ></Box>
                    <Box
                        sx={{
                            width: '20%',
                            height: '200px',
                            bgcolor: '#d9d9d9',
                            border: '1px solid #000000',
                        }}
                    ></Box>
                    
                </Box>

                <Footer />
        </Box>   
    )
}

export default Home