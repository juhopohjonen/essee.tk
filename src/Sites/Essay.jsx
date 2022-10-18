import { Skeleton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Results from "../Components/Results"
import { parseWiki } from "../Services/WikiService"

const Essay = () => {
    const { name } = useParams()
    const [doesExist, setExist] = useState(null)

    useEffect(() => {
        const get = async () => {
            // check that data exist in wiki

            const res = await parseWiki(name)
            const resHasError = res.data.error ? true : false

            if (resHasError) {
                return alert('Esseetä ei löydy hakusanalla!')
            } else {
                setExist(true)
            }

            // change title
            document.title = `Essee - ${res.data.parse.title}`

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

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant='h3' component='h1'>{name}</Typography>
            <Results query={name} />

            <hr style={{ marginTop: 25, marginBottom: 25 }} />
            
            <Typography gutterBottom variant='h4' component='h2'>Mikä on Essee.tk?</Typography>
            <Typography gutterBottom paragraph>Essee.tk:n avulla voit saada parempia numeroita koulusta. Säästät myös aikaa. Essee.tk on tekoäly, joka generoi sinulle esseitä ilmaiseksi. Syötät vain aiheen, ja sinulla on essee tai tietoteksti valmiina. Koska essee on tekoälyn tekemä, se on myös erittäin älykkään kuuloinen.
            Ihminen ei osaisi kirjoittaa tällaista. Oletko valmis kokeilemaan?</Typography>
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