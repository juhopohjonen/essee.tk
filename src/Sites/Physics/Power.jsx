import { Box, Typography } from "@mui/material"
import { RouterLink } from "../../Components/Markup"
import PowerCalculator from "../../Components/PhysicsCalcs/PowerCalculator"

import tehoImage from '../../Imgs/teho.jpg'

const PowerIndex = () => {
    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3' component='h1' gutterBottom>Teholaskuri</Typography>
            <Typography paragraph gutterBottom>Jotkut ajattelevat, että tehon laskeminen on erittäin työlästä. Tehon laskeminenkin vaatii ihmiseltä tehoa: energiaa kuluu, kun joudut liikkumaan ja kirjoittamaan vastauksia. Essee.tk kehitteli
            tällaisen välttämiseksi työkalun, joka laskee sinulle tehon puolestasi. Välivaiheet kaupan päälle.
            </Typography>
    
            <Typography variant='h4' component='h2'>Laske laskusi!</Typography>
            <Typography variant='subtitle1' component='p' gutterBottom>Tässä se nyt on: teholaskuri. Laske tällä ihan minkä tahansa hommelin teho.</Typography>

            <PowerCalculator sx={{ mt: 2, mb: 4 }} />

            <Typography variant='h4' component='h2' gutterBottom>Mikä teho on ja miten se lasketaan?</Typography>
            <Typography paragraph>Teho on sellainen asia, jonka voi laskea Essee.tk:n laskurin avulla. Se lasketaan siten, että menet osoitteeseen <RouterLink to='/fysiikka/teho'>essee.tk/fysiikka/teho</RouterLink>, ja lasket siellä laskusi.</Typography>

            <img src={tehoImage} alt='Kuva tehosta.' width='450' />
            <Typography component='p' variant="subtitle1" color='text.secondary'>Tällainen kuva löytyi interwebsien ihmeellistä maailmasta! 😮</Typography>
        </Box>
    )
}

export default PowerIndex