import { Button, Card, CardContent, CircularProgress, MenuItem, Select, Step, StepLabel, Stepper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useRef, useState } from "react"
import Results from "../../Components/Results"
import Search from "../../Components/SuggestiveSearch"
import WikiAttr from "../../Components/WikiAttr"
import { getPossibleWikis } from "../../Services/TextService"

const OtherLangSearch = () => {
    const [lang, setLang] = useState(null)
    const [value, setValue] = useState(null)


    if (!lang)
        return (
            <Card>
                <CardContent>
                    <Typography variant='h5' component='h2' sx={{ mb: 2 }}>
                    Essee valitsemallasi kielellä
                    </Typography>
                    <LangStepper lang={lang} setLang={setLang} />
                </CardContent>
            </Card>
        )

    return (
        <>
            <Typography variant='h5' component='h2' sx={{ mb: 2.5 }}>
                Essee kielellä <b>{lang.toUpperCase()}</b> <Button onClick={(e) => {
                    setLang(null)
                    setValue(null)
                }} variant='outlined' color='error'>Takaisin</Button>
            </Typography>
            <Box>
                <Search lang={lang} setval={setValue} />
                {
                    value ? <Results lang={lang} query={value} /> : null
                }
            </Box>

            {lang ? <WikiAttr lang={lang} sx={{ mt: 2 }} /> : null}
        </>
    )
}

const LangStepper = ({ lang, setLang }) => {
    const step = lang ? 1 : 0

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={step}>
                    <Step>
                        <StepLabel>Valitse kieli</StepLabel>
                    </Step>

                    <Step>
                        <StepLabel>Valitse aihe</StepLabel>
                    </Step>

                </Stepper>
            </Box>

            { step === 0 ? <ChoseLang setLang={setLang} /> : null }    

        </>
    )
}

const ChoseLang = ({ setLang }) => {
    const [possibleValues, setValues] = useState(null)
    const [value, setValue] = useState(null)

    useEffect(() => {
        getPossibleWikis()
            .then(res => setValues(res.data))
            .catch(err => {
                alert('Virhe mahdollisten kielten lataamisessa!')
            })
    }, [])

    if (!possibleValues){
        return (
            <Box sx={{ mt: 2 }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Box sx={{ mt: 2 }}>
            <Select
                onChange={(e) => setValue(e.target.value)}
            >
                {possibleValues.wikis.map(val => (
                    <MenuItem key={val} value={val}>
                        { 
                            possibleValues.definitions.find(def => def.code === val) ? possibleValues.definitions.find(def => def.code === val).name
                            : val.toUpperCase()
                      }
                    </MenuItem>
                ))}
            </Select>
            <br />
            <Button
                color='success'
                variant='outlined'
                sx={{ mt: 1 }}
                onClick={(e) => setLang(value)}
                disabled={!value || value.length === 0}
            >Valitse</Button>
        </Box>
    )
}

export default OtherLangSearch