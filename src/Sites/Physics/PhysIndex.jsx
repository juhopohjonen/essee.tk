import { Avatar, Box, Card, CardContent, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Tooltip, Typography } from "@mui/material"
import PhysImg from '../../Imgs/fysiikka.webp'

import BoltIcon from '@mui/icons-material/Bolt';
import HeightIcon from '@mui/icons-material/Height';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { NoStyle } from "../../Components/Markup";

const Physics = () => {
    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3' component='h1' gutterBottom>Fysiikka</Typography>
            <Typography paragraph>Tuottaako fysiikka päänvaivaa? Ärsyttääkö, kun tehot eivät riitä tehon laskemiseen ja potentiaalienergiaa ei potentiaalisesti jaksa laskea? Essee.tk on ratkaisu fysiikan ongelmiin: fysiikka on helppoa, kun käyttää vain Essee.tk:ta.</Typography>
            
            <Typography variant='h4' component='h2' gutterBottom>Fysiikan laskimet</Typography>
            <Typography paragraph>Essee.tk ei pelkästään kerro sinulle fysiikasta. Essee.tk myös laskee sinulle tehtävät ja niiden vastaukset - välivaihdeiden kanssa. Sivullamme on lukuisia, laadukkaita laskimia. Katso alla olevaa listaa, niin hoidetaan sinulle laskut kuntoon!</Typography>
            <CalcList />

            <Tooltip placement="right" title='Albertti'>
                <img src={PhysImg} alt='Miten laskea fysiikkaa?' width='500px' />
            </Tooltip>
            <Typography paragraph color='text.secondary'>Fysiikka on helppoa, kunhan vain muistat käyttää Essee.tk:ta.</Typography>

            <Typography variant='h4' component='h2' gutterBottom>Miten laskea fysiikan laskuja?</Typography>
            <Typography paragraph>Fysiikka on erittäin helppoa, kunhan muistat seuraavat vaiheet:
            <ol>
                <li>Mene osoitteeseen essee.tk/fysiikka</li>
                <li>Valitse laskuri</li>
                <li>Laske lasku</li>
            </ol>
            </Typography>

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

const Calculators = [
    {
        primary: 'Teholaskin',
        secondary: 'Laske teho nopeasti!',
        icon: BoltIcon,
        uri: '/fysiikka/teho'
    },
    {
        primary: 'Potentiaalienergia',
        secondary: 'Potentiaalienergialaskujen vastaukset.',
        icon: HeightIcon,
        uri: '/fysiikka/potentiaalienergia'
    },
    {
        primary: 'Nostotyölaskin',
        secondary: 'Laske ilman agressiotasojen nousua.',
        icon: FitnessCenterIcon,
        uri: '/fysiikka/nosto'
    }
]

const CalcList = () => {
    return (
        <Card sx={{ maxWidth: 750, mb: 4 }}>
            <CardContent>
                <Typography variant='h6' component='h6' gutterBottom>Valitse allaolevasta listasta laskuri!</Typography>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {Calculators.map(calc => <NoStyle key={calc.primary} to={calc.uri}><ListItemButton><Calculator Icon={calc.icon} primary={calc.primary} secondary={calc.secondary} /></ListItemButton></NoStyle> )}
                </List>
            </CardContent>
        </Card>
    )
}

const Calculator = ({ Icon, primary, secondary }) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <Icon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
        </ListItem>
    )
}

export default Physics