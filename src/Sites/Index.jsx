import {  Typography, Link as MuiLink, Button, Card, CardContent, CardActions } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Results from "../Components/Results"
import Search from "../Components/SuggestiveSearch"

import TranslateIcon from '@mui/icons-material/Translate';
import CalculateIcon from '@mui/icons-material/Calculate';

import WikiAttr from "../Components/WikiAttr"

const Marko = () => {
    const [value, setValue] = useState(null)
    const [stateSize, setState] = useState(null)

    return (
        <Box>
            <Typography sx={{ mt: 3 }} variant='h3' component='h1'>Essee.tk - Ratkaisu ongelmiisi</Typography>
            <Typography sx={{ mb: 3 }} variant='h6' component='h2'>Pakottaako opettajasi kirjoittamaan esseitä? Ei enää ajanhukkaa. Tee esseesi, kirjoitelmasi jne. tällä työkalulla.</Typography>

            <Search setState={setState} setval={setValue} sx={{ mt: 2, width: 500, maxWidth: '95%' }} />

            { 
                value 
                    ? <Results accr={stateSize} query={value} />
                    : null
            }

            <hr style={{ marginTop: '30px' }} />

            <Esittely />

            
            
        </Box>
        
    )
}

const Esittely = () => {
    const navigate = useNavigate()

    return (
        <Box sx={{ mt: '30px' }}>
            <Card>
                <CardContent>
                <Typography variant='h5' component='h5' gutterBottom>Kielten kirjoitelma</Typography>
                <Typography paragraph>Ovatko esimerkiksi ruotsi tai englanti hankalia aineita? Ei hätää. Essee.tk auttaa myös mm. ruotsin ja englannin kirjoitelmissa. Nyt sinun ei
                tarvitse enää hukata aikaa ruotsin tai englannin oikeinkirjoituksen opettelemiseen. Eikä sinun enää tarvitse palkata kirjoittamaan ketään esseetä puolestasi!</Typography>
                </CardContent>
                <CardActions sx={{ mt: -3, ml: 1 }}>
                    <Button onClick={() => navigate('/kielet')} sx={{ mb: 1 }} variant='contained' color='secondary'>Kirjoita kielten essee <TranslateIcon sx={{ ml: 1 }} fontSize="small" /> </Button>

                </CardActions>
            </Card>

            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Typography sx={{ mt: 1 }} variant='h5' component='h2' gutterBottom>Etkö jaksa laskea fysiikan laskuja?</Typography>
                    <Typography paragraph>Etkö millään jaksaisi tehdä fysiikan tehtäviä? Onko potentiaalienergian laskeminen haastavaa? Etkö jaksa laskea tehoa? Nostaako nostotyön laskeminen agressiotasojasi?
                    Enää sinun ei tarvitse käyttää fysiikkaan ja fysiikan laskemiseen turhaa aikaa, vaan voit laskea laskut Essee.tk:n laskurilla.</Typography>
            
                </CardContent>
                <CardActions sx={{ mt: -3, ml: 1, mb: 1 }}>
                    <Button onClick={() => navigate('/fysiikka')} color='secondary' variant='contained'>Välty fysiikan laskuilta<CalculateIcon sx={{ ml: 1 }} /></Button>
                </CardActions>
            </Card>


            <Typography sx={{ mt: 3 }} variant='h5' component='h2'>Etkö jaksa kirjoittaa tekstejä?</Typography>
            <Typography sx={{ mt: 1 }} paragraph gutterBottom>Me tiedämme, että kouluhommat ovat <b>todella tylsiä.</b> Siksi kokeneet matemaatikkomme ja ohjelmoijamme loivat työkalun <b>juuri sinulle. </b>
                Nyt sinun ei tarvitse kirjoittaa esseetä, vaan tekoälymme kirjoittaa sen sinulle. Esseesi kuulostaa <i>lähes</i> ihmisen kirjoittamalta: niin hyvältä, että sitä ei melkein voisi
                kutsua ihmisen kirjoittamaksi.
            </Typography>

           

            <Typography variant='h5' component='h2'>Miten se toimii?</Typography>
            <Typography paragraph>Niilo22:n sanoja lainaten: <MuiLink href='https://www.youtube.com/watch?v=jA6w1lE45b4'><i>"Se on vain korkeempaa matematiikkaa, jotka kaikki ei ymmärrä."</i></MuiLink></Typography>
            <WikiAttr />

            

        </Box>
    )
}

export default Marko