import { Autocomplete, Button, Box, Typography, CircularProgress, Slider, TextField, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { Fragment, useEffect } from "react"
import { useState } from "react"
import { getQueryContents } from "../Services/WikiService"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Search = (props) => {
    const [query, setQuery] = useState('')
    const [options, setOptions] = useState([])

    const [chosen, setChosen] = useState('')
    const [loading, setLoading] = useState(false)

    const [accuracy, setAccuracy] = useState(2)
    
    const language = props.lang
        ? props.lang
        : 'fi'

    console.log('acc', accuracy)

    useEffect(() => {
        const updateOptions = (query) => {
            setLoading(true)
            getQueryContents(query, language)
                .then(res => {
                    setLoading(false)
                    setOptions(res.data.query.search)
                })
                .catch(err => 
                {
                    alert('Virhe hakutulosten lataamisessa!')
                })
            }

        if (query.length !== 0) {
            updateOptions(query)
        }
    }, [query, language])

    const setSearchValues = () => {
        props.setval(chosen)
        props.setState(accuracy)
    }

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
            
            <Accordion sx={{ maxWidth: 340, mt: 1 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label='more'
                    id='more-options'
                >
                    <Typography>Lisää valintoja...</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color='text.secondary'>Tarkkuus</Typography>

                    <Slider
                        size='medium'
                        aria-label='accuracy'
                        value={accuracy}
                        step={1}
                        marks
                        min={1}
                        max={5}
                        valueLabelDisplay='auto'
                        sx={{ maxWidth: '300px', mt: 0, ml: 0.75 }}
                        onChange={(e) => setAccuracy(e.target.value)}
                    />

                    <Typography gutterBottom color='text.secondary'>Mitä pienempi tarkkuus, sitä enemmän sanoja.</Typography>
                </AccordionDetails>
            </Accordion>


            <Button disabled={!query} onClick={setSearchValues} sx={{ mt: 1 }} variant='outlined' color='primary'>Luo teksti</Button>            
        </Box>
    )
}

export default Search