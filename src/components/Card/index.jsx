import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

function Card(){
    return(
        <Box
            sx={{
                width: '29.6%',
                margin: '0px 20px',
            }}
        >
            <Box
                    sx={{
                        margin: '0px 20px',
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        height: '180px',
                        width: '100%',
                        bgcolor: '#d9d9d9',
                        border: '1px solid #000000',
                        borderRadius: '6px',
                    }}
                    >
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <StarIcon
                        sx={{
                            marginTop: '5px',
                            marginLeft: '20px',
                            fontSize: '26px',
                        }}
                        color="warning"
                    />
                    <Typography
                        sx={{
                            fontSize: '18px',
                        }}
                    >
                        4,5
                    </Typography>
                </Box>
            </Box>
    )
}

export default Card