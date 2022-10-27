import { Box, Typography } from "@mui/material"
import { RouterLink } from "../../Components/Markup"
import OtherLangSearch from "./OtherLangSearch"

const Englanti = () => {
    return (
        <Box>
            <Typography variant='h3' component='h1' gutterBottom>
                Englanninkielinen essee - Esseegeneraattori
            </Typography>

            <Typography paragraph>
                Onko englanti haastavaa sinulle? Ei ole enää! Essee.tk on esseegeneraattori, jonka avulla voit luoda englanninkielisen esseen nopeasti - ja helposti. Eikä siihen mene kuin muutama sekuntti!
                Jos et ole vielä vakuuttunut, kokeile itse!
            </Typography>


            <OtherLangSearch lang='en' />

            <br />

            <Typography variant='h4' component='h2' gutterBottom>
                Muut kielet
            </Typography>
            <Typography>
                Essee.tk:lla voit <RouterLink to='/kielet'>luoda lukuisia erilaisia ja erikielisiä esseitä.</RouterLink> Etkö usko Essee.tk:n auttavan? Edes toimivan? Kohta uskot. Testaa. Tämä ei ole pyyntö. Tämä on <b>käsky</b>.
            </Typography>
        </Box>
    )
}

export default Englanti