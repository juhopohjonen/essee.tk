import { Box, Typography } from '@mui/material'
import { RouterLink } from '../../Components/Markup'
import OtherLangSearch from './OtherLangSearch'

const EngIndex = () => {
    return (
        <Box>
            <Typography sx={{ mt: 3 }} variant='h3' component='h1'>Luo kielten essee tai kirjoitelma</Typography>
            <Typography sx={{ mt: 2, mb: 3 }} paragraph gutterBottom>Mietitkö usein, että miten saisit parempia arvosanoja kielistä? Tuntuuko englannin opiskelu sinusta haastavalta? Essee.tk:n avulla voit luoda helposti englanninkielisen esseen tai kirjoitelman ilman plagiointisyytöksiä. Ja kokeileminen ei maksa mitään, 
            joten aloita parempien arvosanojen saaminen jo tänään!</Typography>

            <Typography variant='h5' component='h2' sx={{ mb: 2.5 }}>
                Englanninkielinen essee
            </Typography>
            <OtherLangSearch />

            <Typography variant='h5' component='h2' gutterBottom sx={{ mt: 3.5 }}>
                Vinkkejä parempiin arvosanoihin
            </Typography>

            <Typography paragraph>
                Kirjoitimme avuksesi vinkkiartikkelin, <RouterLink to='/kielet/parempia-arvosanoja'>miten voisit saada parempia arvosanoja.</RouterLink> 
                Listasimme sinne parhaimmat vinkit arvosanojen ja koulunumeroiden kohottamiseen. Löydät sieltä varmasti ohjeet.
            </Typography>
        </Box>
    )
}

export default EngIndex