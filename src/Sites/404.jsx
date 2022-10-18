import { Typography, Link } from "@mui/material";
import { Box } from "@mui/system";

const NotFound = () => (
    <Box>
        <Typography variant="h3" component='h1'>Ei ny löytyny!</Typography>
        <Typography gutterBottom paragraph>Ei sille voi mitään. <Link to='/'>Mutta tämän linkin takaa voit luoda oman esseen.</Link></Typography>
    </Box>
)

export default NotFound