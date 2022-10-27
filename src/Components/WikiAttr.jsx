// attribution for wikipedia (creative commons)

import { Typography, Box, Link as MuiLink } from "@mui/material"


const WikiAttr = ({ lang='fi', sx }) => {
    return (
        <Box sx={sx}>
            <Typography color='text.secondary' paragraph>Essee.tk käyttää tietoina ja tietojen hakijana <MuiLink href={`https://${lang}.wikipedia.org`}>{lang}-kielistä Wikipediaa</MuiLink>, joka on käytettävissä <MuiLink href='https://creativecommons.org/licenses/by-sa/3.0/deed.fi'>Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)</MuiLink>  -lisenssillä.</Typography>
        </Box>
    )
}

export default WikiAttr
