import {  Typography, Link as MuiLink } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import Results from "../Components/Results"
import Search from "../Components/SuggestiveSearch"

const Marko = () => {
    const [value, setValue] = useState(null)


    return (
        <Box>
            <Typography sx={{ mt: 3 }} variant='h3' component='h1'>Essee.tk - Ratkaisu ongelmiisi</Typography>
            <Typography sx={{ mb: 5 }} variant='h6' component='h2'>Pakottaako opettajasi kirjoittamaan esseitä? Ei enää ajanhukkaa. Tee esseesi, kirjoitelmasi jne. tällä työkalulla.</Typography>

            <Search setval={setValue} sx={{ mt: 2, width: 500, maxWidth: '95%' }} />

            { 
                value 
                    ? <Results query={value} />
                    : null
            }

            <hr style={{ marginTop: '50px' }} />

            <Esittely />

            
            
        </Box>
        
    )
}

const Esittely = () => {
    return (
        <Box sx={{ mt: '60px' }}>
            <Typography variant='h4' component='h2'>Etkö jaksa kirjoittaa tekstejä?</Typography>
            <Typography sx={{ mt: 1 }} paragraph>Me tiedämme, että kouluhommat ovat <b>todella tylsiä.</b> Siksi kokeneet matemaatikkomme ja ohjelmoijamme loivat työkalun <b>juuri sinulle. </b>
                Nyt sinun ei tarvitse kirjoittaa esseetä, vaan tekoälymme kirjoittaa sen sinulle. Esseesi kuulostaa <i>lähes</i> ihmisen kirjoittamalta: niin hyvältä, että sitä ei melkein voisi
                kutsua ihmisen kirjoittamaksi.
            </Typography>
            <Typography variant='h4' component='h2'>Miten se toimii?</Typography>
            <Typography paragraph>Niilo22:n sanoja lainaten: <MuiLink href='https://www.youtube.com/watch?v=jA6w1lE45b4'><i>"Se on vain korkeempaa matematiikkaa, jotka kaikki ei ymmärrä."</i></MuiLink></Typography>
            <Typography gutterBottom>Essee.tk käyttää tietoina ja tietojen hakijana <MuiLink href="https://fi.wikipedia.org/wiki/Wikipedia:Etusivu">suomenkielistä Wikipediaa, joka on käytettävissä Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)  -lisenssillä.</MuiLink>
        
        </Typography>

        </Box>
    )
}

export default Marko