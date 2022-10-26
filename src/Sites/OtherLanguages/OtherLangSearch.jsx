import { Box } from "@mui/system"
import { useState } from "react"
import Results from "../../Components/Results"
import Search from "../../Components/SuggestiveSearch"

const OtherLangSearch = () => {
    const lang = 'en'
    const [value, setValue] = useState(null)

    return (
        <Box>
            <Search lang={lang} setval={setValue} />

            {
                value ? <Results lang={lang} query={value} /> : null
            }
        </Box>
    )
}

export default OtherLangSearch