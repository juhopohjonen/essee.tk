import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RouterLink } from "../Components/Markup";

const NotFound = () => (
    <Box>
        <Typography variant="h3" component='h1'>Sivua ei löydy - 404</Typography>
        <Typography gutterBottom paragraph>Ei sille voi mitään. Sivua ei löytynyt. <RouterLink to='/'>Mutta tämän linkin takaa voit luoda oman esseen.</RouterLink></Typography>
    </Box>
)

export default NotFound