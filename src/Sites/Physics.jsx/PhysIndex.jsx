import { Box, Typography } from "@mui/material"
import PotentialCalc from "./PotentialEnergyCalc"

const Physics = () => {
    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3' component='h1' gutterBottom>Fysiikka</Typography>

            <Typography variant='h5' component='h2' gutterBottom>Potentiaalienergia ja sen laskeminen</Typography>
            <Typography paragraph>Me emme rupea lätisemään turhia, kuten sinulle yleensä asia selitettäisiin. Me kerromme vastaukset sinulle suoraan. Mukisematta. Laske potentiaalienergia alla olevalla laskimella.</Typography>
        
            <PotentialCalc />

            <Things />
        </Box>
    )
}

const Things = () => {
    return (
        <>
            <Typography variant='h5' component='h2'>Laitetaanko sinut opiskelemaan Fysiikkaa?</Typography>
            <Typography variant='subtitle1' gutterBottom color='text.secondary'>Nyt sinun ei enää tarvitse, sillä laskemme laskut sinulle. Puolestasi.</Typography>

            <Typography paragraph>Me Essee.tk:lla haluamme varmistaa, että saat erittäin hyvän numeron fysiikasta. Nämä laskurit kertovat sinulle ratkaisuja monenlaisiin eri fysiikan tehtäviin. Eikä pelkästään vain ratkaisuja: laskuja, vastauksia, välivaiheita ja jopa sanallisia vastauksia, jos niitä vaaditaan.
            Haluamme varmistaa myös sen, että sinulla ei kulu yhtään turhaa aikaa Fysiikkaan. Fysiikka ei ikinä ole ollut helpompaa! Ja aikaakin säästyy.
            </Typography>

        </>
    )
}

export default Physics