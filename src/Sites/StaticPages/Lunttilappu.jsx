import { Box, TextField, Typography } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"
import { RouterLink } from "../../Components/Markup"

const Lunttilappu = () => {

    const lappuContent = window.localStorage.getItem('lunttilappu_content') 
    ? window.localStorage.getItem('lunttilappu_content')
    : ''

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3' component='h1' gutterBottom>Lunttilappu</Typography>
            <Typography paragraph>Onko paperista, perinteistä lunttilappua hankala kuljettaa mukana? Ei hätää, sillä olemme luoneet uudenlaisen, virtuaalisen lunttilapun. Se on nopea käyttää, eikä vaadi kirjautumista. Lunttilapun voi tallentaa selaimen muistiin, voit avata sen nopeasti ja sulkea sen silmänräpäyksessä.</Typography>
        
            <Lappu lappuContent={lappuContent} />

            <Typography sx={{ mt: 2 }} variant='h4' component='h2' gutterBottom>Näin saat parempia arvosanoja</Typography>
            <Typography paragraph>Lunttilappu-ohjelman avulla voit muistaa paljon enemmän asioita, kuin muuten muistaisit. Lunttilappu tallentaa kaikki kirjoituksesi automaattisesti selaimelliesi. Sinun tarvitsee vain avata tämä sivu, ja siellä lappusi jo näkyy!
            Lunttilappu on myös kätevä tapa muistaa asioita, koska sitä on kevyempi käyttää, kuin esimerkkiksi puhelimen omaa muistiosovellusta.
            </Typography>            

            <Typography paragraph>Lunttilapun käyttäminen omalla vastuulla.</Typography>

            <Typography variant='h4' component='h2' gutterBottom>Essee.tk auttaa sinua monenlaisissa ongelmissa</Typography>
            <Typography paragraph>Onko esseiden, tietotekstien, arvosteluiden tai muiden kirjoitelmien kirjoittaminen hankalaa? <RouterLink to='/kielet'>Silloin esseegeneraattori auttaa</RouterLink>. Etkö tiedä potentiaalienergian kaavaa? <RouterLink to='/fysiikka'>Voit laskea sen ja muut fysiikan ongelmat fysiikan sivustollamme</RouterLink>.</Typography>
        </Box>
    )
}

const Lappu = ({lappuContent}) => {
    useEffect(() => {

    }, [])



    const [content, setContent] = useState(lappuContent)
    const contentChange = (e) => {
        window.localStorage.setItem('lunttilappu_content', e.target.value)
        setContent(e.target.value)
        
    }

    return (
        <Box sx={{ mt: 2 }}>
            <TextField
                label="Kirjoita lunttilappusi sisältö tähän..."
                multiline
                value={content}
                onChange={(e) => contentChange(e)}
                fullWidth
                minRows={5}
            />
        </Box>
    )
}

export default Lunttilappu