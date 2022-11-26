import { Box, Typography } from '@mui/material'
import { RouterLink } from '../../Components/Markup'
import PotentialCalc from '../../Components/PhysicsCalcs/PotentialEnergyCalc'

const PotentialEnergy = () => {
    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3' component='h1'>Potentiaalienergia</Typography>
            <Typography variant='subtitle1' component='p' gutterBottom color='text.secondary'>
                Potentiaalienergian laskeminen on erittäin haastavaa. Onneksi voit nyt laskea potentiaalienergian erittäin nopeasti laskurimme avulla! Laskurimme sisältää paljon potentiaalia: 
                potentiaalienergialaskuria käyttämällä saat potentiaalisesti parempia arvosanoja potentiaalienergialaskuja sisältävistä tehtävistä.
            </Typography>

            <Typography variant='h4' componet='h2'>Potentiaalienergialaskuri</Typography>
            <Typography paragraph>Sinulla on ainutlaatuinen tilaisuus: voit nyt laskea laskut potentiaalienergialaskimellamme. Eikä sinun tarvitse kuluttaa aivokapasiteettiasi moiseen!</Typography>
        
            <PotentialCalc sx={{ mb: 2 }} />

            <Typography variant='h4' component='h2'>Muut fysiikan laskimet</Typography>
            <Typography paragraph>Sivustollamme on runsaasti erilaisia ominaisuuksia: esseiden kirjoittaminen sekä monentyyppisten fysiikan laskujen laskeminen. Jos et tiedä, miten laskuja lasketaan, niin käytä <RouterLink to='/fysiikka'>fysiikan</RouterLink> laskimia.</Typography>
        </Box>
    )
}

export default PotentialEnergy