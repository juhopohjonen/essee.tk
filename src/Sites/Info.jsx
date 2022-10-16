import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const Info = () => {
    return (
        <Box>
            <Typography variant='h3' component='h1'>Tietoja</Typography>
            <Typography paragraph>Laitan tähän jotain tietoa joskus. Jos jaksan. Mutta perustuu Markovin ketjuun.</Typography>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
    )
}

export default Info