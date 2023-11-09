import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Box, Typography } from '@mui/material'
import Card from "../../components/Card"
function Products(){
    return(
        <Box>
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
                Produtos
            </Typography>
            <Box 
                sx={{
                    width: '100vw',
                    flexWrap: 'wrap',
                    display: 'flex',
                }}
            >
                <Card />
                <Card />
                <Card />
                
                <Card />
                <Card />
                <Card />

                <Card />
                <Card />
                <Card />
            </Box>
            <Footer />
        </Box>
    )
}

export default Products