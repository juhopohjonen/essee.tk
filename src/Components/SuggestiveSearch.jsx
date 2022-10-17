import { Autocomplete, Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import { useState } from "react"
import { getQueryContents } from "../Services/WikiService"

const Search = (props) => {
    const [query, setQuery] = useState('')
    const [options, setOptions] = useState([])

    const [chosen, setChosen] = useState('')
    console.log(chosen)

    useEffect(() => {
        const updateOptions = (query) => {
            getQueryContents(query)
                .then(res => setOptions(res.data.query.search))
                .catch(err => alert('error'))
        }

        if (query.length !== 0) {
            updateOptions(query)
        }
    }, [query])

    return (
        <Box>
            <Autocomplete

                sx={props.sx}
                id="articleselect"
                disableClearable
                options={options.map(op => op.title)}
                onChange={(event, newValue) => {
                    setChosen(newValue)
                }}
                renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Hae aiheita kirjoittamalla..."
                      InputProps={{
                        ...params.InputProps,
                        type: 'search',
                      }}
                      
                      onChange={(e) => setQuery(e.target.value)}
                    />
                )}
            />
            <Button disabled={!query} onClick={() => props.setval(chosen)} sx={{ mt: 1 }} variant='outlined' color='primary'>Luo teksti</Button>            
        </Box>
    )
}

export default Search