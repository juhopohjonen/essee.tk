import { Box, Typography, Card, CardContent } from '@mui/material'
import Latex from 'react-latex'

const ResultCard = ({ res, header, resultUnit='J' }) => {
    if (!res) {
        return null
    }    

    const resValues = Object.values(res.inters)

    return (
        <Box sx={{ mt: 2 }}>
            <Card>
                <CardContent>
                    <Typography variant='h4'>{header}</Typography>
                    {resValues.map(val => <LatexAnswer key={val} ans={val} /> )}
                    <Typography variant='h6'>Vastaus: {res.finalRes} {resultUnit}</Typography>
                </CardContent>
            </Card>


        </Box>
    )
    }


const LatexAnswer = ({ ans }) => {
    return (
        <Box>
            <Latex displayMode={true}>{ans}</Latex>
        </Box>
    )
}

export default ResultCard