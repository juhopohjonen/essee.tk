import { Box, Typography, Divider } from "@mui/material"
import PotentialCalc from "../../Components/PotentialEnergyCalc"

const Physics = () => {
    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3' component='h1' gutterBottom>Fysiikka</Typography>

            <Typography variant='h5' component='h2' gutterBottom>Potentiaalienergia ja sen laskeminen</Typography>
            <Typography paragraph>Me emme rupea lätisemään turhia, kuten sinulle yleensä asia selitettäisiin. Me kerromme vastaukset sinulle suoraan. Mukisematta. Laske potentiaalienergia alla olevalla laskimella.</Typography>
            
            <PotentialCalc sx={{ mt: 3, mb: 3 }} />

            <Divider />

            <Typography sx={{ mt: 2 }} variant='h5' component='h2' gutterBottom>Nostotyö ja sen laskeminen</Typography>
            <Typography paragraph gutterBottom>Nyt sinun ei enää IKINÄ tarvitse laskea nostotyötä, vaan sivusto laskee sen sinulle puolestasi! Saat välivaiheet kaupan päälle.</Typography>

            <PotentialCalc sx={{ mb: 3 }} isLiftWork={true} />

            <Divider />

            <Things />
        </Box>
    )
}

const Things = () => {
    return (
        <>
            <Typography sx={{ mt: 3 }} variant='h5' component='h2'>Laitetaanko sinutkin opiskelemaan Fysiikkaa?</Typography>
            <Typography variant='subtitle1' gutterBottom>Nyt sinun ei enää tarvitse, sillä laskemme laskut sinulle. Puolestasi.</Typography>

            <Typography paragraph>Me Essee.tk:lla haluamme varmistaa, että saat erittäin hyvän numeron fysiikasta. Nämä laskurit kertovat sinulle ratkaisuja monenlaisiin eri fysiikan tehtäviin. Eikä pelkästään vain ratkaisuja: laskuja, vastauksia, välivaiheita ja jopa sanallisia vastauksia, jos niitä vaaditaan.
            Haluamme varmistaa myös sen, että sinulla ei kulu yhtään turhaa aikaa Fysiikkaan. Fysiikka ei ikinä ole ollut helpompaa! Ja aikaakin säästyy.
            </Typography>
            

        </>
    )
}

export default Physics