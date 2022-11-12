import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from "@mui/material"
import OtherLangSearch from "../OtherLanguages/OtherLangSearch"

const Info = () => {
    return (
        <Box sx={{ mt: 2 }}>
            <Typography gutterBottom variant='h3' component='h1'>Tietoja</Typography>
            <Typography paragraph>Essee.tk on erinomainen, matemaattinen työkalu esseiden ja muiden artikkelien 😀😀😀 kirjoittamiseen 😀😀😀. Moni meistä tuskailee kirjoittamisen ja muiden hankalien juttujen kanssa,
            joten nyt on aika muutokseen. Essee.tk:lla juuri sinä voit kirjoittaa elämäsi parhaimman esseen! Wou! Cool! Ouuuuuuu! Chillisti. Nettisivultamme löydät <b>kaiken</b>, mitä tarvitset kehittyäksesi parhaaksi kirjoittajaksi.
            Arvosanatkin nousevat. Käytä sinäkin Essee.tk:ta!</Typography>

            <Typography gutterBottom variant='h5' component='h2'>Essee.tk:n hinnoittelu</Typography>
            <Typography paragraph>Essee.tk on ilmainen, eikä vaadi kirjautumista. Essee.tk:ta voivat käyttää kaikki. Myös juuri sinä siellä ruudun takana 👉. Miksi et juuri nyt luo esseetä? Se on ilmaista, eikä se maksa yhtään mitään. Aloita nyt. Heti.</Typography>
            
            <OtherLangSearch />

            <Typography sx={{ mt: 2 }} paragraph>Allaolvevasta jutusta voit kuunnella hyvää musiikkia iloksesi!</Typography>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
            <Typography paragraph>Asiaa tai jotain muuta? Laita sähkäriä osoitteeseen <Link href="mailto:opettaja@essee.tk">opettaja@essee.tk</Link>.</Typography>

        </Box>
    )
}

export default Info