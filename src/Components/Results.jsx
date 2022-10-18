import { Box, Button, Card, CardActions, CardContent, Skeleton, Typography, Link as MuiLink, CardMedia } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"
import { getByTitle } from "../Services/TextService"
import { getImageURLs } from "../Services/WikiService"

const Results = ({ query }) => {
    const [text, setText] = useState(null)
    const [essayGenerationTimes, setTimes] = useState(0)

    useEffect(() => {
        setText(null)
        getByTitle(query)
            .then(res => {
                setText(res.data)
            })
            .catch(err => alert('Virhe esseen lataamisessa!'))
    }, [query, essayGenerationTimes])

    if (!text) {
        return <ResultsSkeleton />
    }

    if (text.length === 1 && !text[0]) {
        return <Typography sx={{ mt: 0.5 }} paragraph>Valitettavasti emme pystyneet tekemään tästä aiheesta esseetä 😰😰😰</Typography>
    }

    const wikipediaURL = `https://fi.wikipedia.org/wiki/${query}`

    
    return (
        <Box sx={{ mt: 2 }}>
            <Card>
                
                <CardContent>
                <ImageView q={query} />

                <Typography sx={{ mb: 2 }} variant='h5'>Esseeni aiheesta <b>{query}</b></Typography>


                {text.map((text, index) => (
                    <>
                        <Typography key={index} paragraph>{text}</Typography>
                    </>
                ))}

                </CardContent>
                <CardActions>
                    <Button component={MuiLink} href={wikipediaURL} variant='outlined' color='secondary'>Katso lähde</Button>
                    <Button onClick={() => setTimes(essayGenerationTimes + 1)} sx={{ ml: 0.5 }} variant='outlined' color='success'>Generoi uusi</Button>
                </CardActions>
            </Card>



        </Box>
    )
}

const ImageView = ({ q }) => {
    const [imageResp, setResp] = useState(null)

    useEffect(() => {
        const getImageData = async () => {
            const imageURLres = await getImageURLs(q)
            setResp(imageURLres.data)
        }

        try {
            getImageData()
        } catch (e) {
            alert('Virhe kuvien lataamisessa!')
        }

    }, [q])

    console.log('ir', imageResp)


    if (!imageResp) {
        return null
    }

    const pages = Object.values(imageResp.query.pages)

    if (pages.length === 0 || !pages[0].thumbnail)
        return null

    const page = pages[0]
    const { source } = page.thumbnail

    return (
        <>
            <CardMedia
                component='img'
                sx={{
                    maxWidth: 500,
                    mb: 0.5
                }}
                src={source}
                alt={`Kuva kohteesta ${q}`}
            />


            <Typography sx={{ mb: 2 }} variant='caption' color='text.secondary'><MuiLink href={source}>Kuva kohteesta {q}</MuiLink> lisenssillä <MuiLink href={imageResp.query.rightsinfo.url} >{imageResp.query.rightsinfo.text}</MuiLink></Typography>
            <hr />

        </>
    )
}

const ResultsSkeleton = () => (
    <div style={{ width: 500, marginTop: 10, maxWidth: '95%' }}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
    </div>

)

export default Results