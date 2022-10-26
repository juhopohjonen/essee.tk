import { Autocomplete, Button, CircularProgress, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { Fragment, useEffect } from "react"
import { useState } from "react"
import { getQueryContents } from "../Services/WikiService"

const Search = (props) => {
    const [query, setQuery] = useState('')
    const [options, setOptions] = useState([])

    const [chosen, setChosen] = useState('')
    const [loading, setLoading] = useState(false)

    const language = props.lang
        ? props.lang
        : 'fi'

    useEffect(() => {
        const updateOptions = (query) => {
            setLoading(true)
            getQueryContents(query, language)
                .then(res => {
                    setLoading(false)
                    setOptions(res.data.query.search)
                })
                .catch(err => alert('error'))
        }

        if (query.length !== 0) {
            updateOptions(query)
        }
    }, [query, language])

    return (
        <Box>
            <Autocomplete
                noOptionsText='Ei hakutuloksia!'
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
                        endAdornment: (
                            <Fragment>
                                {loading ? <CircularProgress color='inherit' size={20} /> : null}
                            </Fragment>
                        )
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