import { Link } from 'react-router-dom'
import { Box, Typography } from "@mui/material"
function Navbar(){
    return(
        <Box
            sx={{
                minWidth: '100%',
                bgcolor: "#2832FA",
                margin: '0px',
                padding: '0px',
                display: "flex",
                alignItems: "center",
                padding: '20px',
            }}
        >
            <Link to="/">
                <Typography
                    sx={{
                        color: "#ffffff",
                        fontSize: "30px",
                        textDecoration: "none",
                    }}
                    variant='h1'
                >
                    Five Store
                </Typography>
            </Link>
            <Box
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'space-around',
                    padding: '0px 25vw',
                }}
            >

                <Link to="/">
                    <Typography
                        sx={{
                            textDecoration: 'underline',
                            textDecoration: 'none',
                            color: "#ffffff",
                            fontSize: "20px",
                            padding: '10px',
                        }}
                        variant='subtitle1'
                    >
                        Home
                    </Typography>
                </Link>
                <Link to="/products">
                    <Typography
                        sx={{
                            textDecoration: 'none',
                            color: "#ffffff",
                            fontSize: "20px",
                            padding: '10px',
                        }}
                        variant='subtitle1'
                    >
                        Produtos
                    </Typography>
                </Link>
                <Link to="/contact">
                    <Typography
                        sx={{
                            textDecoration: 'none',
                            color: "#ffffff",
                            fontSize: "20px",
                            padding: '10px',
                        }}
                        variant='subtitle1'
                    >
                        Contact
                    </Typography>
                </Link>
                <Link to="/about">
                    <Typography
                        sx={{
                            textDecoration: 'none',
                            color: "#ffffff",
                            fontSize: "20px",
                            padding: '10px',
                        }}
                        variant='subtitle1'
                    >
                        Sobre
                    </Typography>
                </Link>
                <Link to="/error">
                    <Typography
                        sx={{
                            textDecoration: 'none',
                            color: "#ffffff",
                            fontSize: "20px",
                            padding: '10px',
                        }}
                        variant='subtitle1'
                    >
                        Erro
                    </Typography>
                </Link>

            </Box>
        </Box>
    )
}

export default Navbar