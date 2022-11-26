import { Box, Divider, Typography } from "@mui/material"
import PotentialCalc from "../../Components/PhysicsCalcs/PotentialEnergyCalc"

import punttis from '../../Imgs/punttis.webp'

const LiftWork = () => {
    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3' component='h1'>Nostotyö</Typography>
            <Typography variant='subtitle1' component='p' color='text.secondary' gutterBottom>Joskus nostaminen voi olla työlästä. Onneksi noston työn laskeminen ei ole, sillä sivustomme laskee sinulle ainutlaatuisen automaattisesti laskun ja välivaiheet siihen. 
            Voit suoraan kirjoittaa painon ja korkeuden, ja saat SI-järjestelmän mukaisen, fysikaalisen, laadukkaan, erinomaisen, mahtavan, coolin, superin vastauksen.
            </Typography>

            <Typography sx={{ mt: 1 }} variant='h4' component='h2'>Nostotyölaskuri</Typography>
            <Typography variant='subtitle1' component='p' color='text.secondary'>Mitä vielä odotat? Mikset jo laske nostotyötä! 😡</Typography>

            <PotentialCalc isLiftWork={true} sx={{ mt: 2, mb: 2 }} />

            <Divider sx={{ mb: 2 }} />
            <Typography variant='h4' component='h2'>Nostotyö kuntosalilla</Typography>
            <Typography paragraph>Jos et osaa harjoittaa nostotyötä, niin mene nyt salille siitä! Puntilla kun nostat niitä hitsin esineitä, niin kyllä se nostotyö nousee siinä samalla!</Typography>

            <img src={punttis} alt="Nostotyötä tekevä mies" width='500' />
            <Typography variant='subtitle1' color='text.secondary' gutterBottom component='p'>TIESITKÖ, että kuvan mies tekee nostotyötä? 😮🤯</Typography>
        </Box>
    )
}

export default LiftWork