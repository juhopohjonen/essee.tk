import { Skeleton, Typography, Link as MuiLink } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Results from "../Components/Results"
import Search from "../Components/SuggestiveSearch"
import { parseWiki } from "../Services/WikiService"

const Essay = () => {
    const { name } = useParams()
    const [doesExist, setExist] = useState(null)
    const navigate = useNavigate()

    const [stateSize, setState] = useState(null)

    useEffect(() => {
        const get = async () => {

            document.title = `Essee - ${name}`
            // check that data exist in wiki

            const res = await parseWiki(name)
            const resHasError = res.data.error ? true : false

            if (resHasError) {
                return alert('Esseetä ei löydy hakusanalla!')
            } else {
                setExist(true)
            }

            // change title
            document.title = `Essee aiheesta ${res.data.parse.title}`

        }

        try {
            get()
        } catch (e) {
            alert('Virhe!')
            console.error(e)
        }
    }, [name]) 

    if (doesExist === false) {
        return (
            <Box>
                <Typography variant='h3' component='h1'>404 - Esseetä ei löydy</Typography>
            </Box>
        )
    }

    if (doesExist === null)
    {
        return (
            <Box sx={{ mt: 2 }}>
                <Typography variant='h3' component='h1' gutterBottom><b>{name}</b></Typography>
                <EssayLoader />
            </Box>
        )
    } 

    const changeVal = (val) => {
        navigate(`/${val}`)
    }

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3' component='h1'>{name}</Typography>
            <Results accr={stateSize} query={name} />

            <hr style={{ marginTop: 25, marginBottom: 25 }} />
            
            <Typography gutterBottom variant='h4' component='h2'>Mikä on Essee.tk?</Typography>
            <Typography gutterBottom paragraph>Essee.tk:n avulla voit saada parempia numeroita koulusta. Säästät myös aikaa. Essee.tk on tekoäly, joka generoi sinulle esseitä ilmaiseksi. Syötät vain aiheen, ja sinulla on essee tai tietoteksti valmiina. Koska essee on tekoälyn tekemä, se on myös erittäin älykkään kuuloinen.
            Ihminen ei osaisi kirjoittaa tällaista. Oletko valmis kokeilemaan? Alta löydät hakupalkin.</Typography>

            <Search setState={setState} setval={changeVal} />
            <br />

            <Typography gutterBottom>Essee.tk käyttää tietolähteenä ja tietojen hakijana <MuiLink href="https://fi.wikipedia.org/wiki/Wikipedia:Etusivu">suomenkielistä Wikipediaa, joka on käytettävissä Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)  -lisenssillä.</MuiLink></Typography>

        </Box>
    )
}

const EssayLoader = () => {
    return (
        <Box
            sx={{ maxWidth: '95%', width: 500 }}
        >
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </Box>
    )
}

export default Essay