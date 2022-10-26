import { Box, Button, Card, CardActions, CardContent, Skeleton, Typography, Link as MuiLink, CardMedia, CircularProgress as Spinner } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"
import { getByTitle } from "../Services/TextService"
import { getExtlinks, getImageURLs } from "../Services/WikiService"

const Results = ({ query, lang='fi' }) => {
    const [text, setText] = useState(null)
    const [essayGenerationTimes, setTimes] = useState(0)

    const title = getTitleByLang(lang)

    useEffect(() => {
        setText(null)
        getByTitle(query, lang)
            .then(res => {
                setText(res.data)
            })
            .catch(err => {
                console.error(err)
                alert('Virhe esseen lataamisessa!')
            })
    }, [query, essayGenerationTimes, lang])

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
                <ImageView q={query} lang={lang} title={title} />

                <Typography sx={{ mb: 2 }} variant='h5'>{title.essayTitle} <b>{query}</b></Typography>


                {text.map((text, index) => (
                    <>
                        <Typography key={index} paragraph>{text}</Typography>
                    </>
                ))}

                <Citations postfix={title.citationPostfix} citationTitle={title.citationTitle} q={query} lang={lang} />

                </CardContent>
                <CardActions>
                    <Button component={MuiLink} href={wikipediaURL} variant='outlined' color='secondary'>Katso lähde</Button>
                    <Button onClick={() => setTimes(essayGenerationTimes + 1)} sx={{ ml: 0.5 }} variant='outlined' color='success'>Generoi uusi</Button>
                </CardActions>
            </Card>



        </Box>
    )
}

const Citations = ({ q, lang, citationTitle, postfix }) => {
    const [extlinks, setLinks] = useState(null)
    useEffect(() => {
        getExtlinks(q, lang)
            .then(req => {
                const { pages } = req.data.query
                const page = Object.values(pages)[0]
                if (!page.extlinks) {
                    return setLinks([])
                }     
                setLinks(page.extlinks)
            })
            .catch (err => {
                console.error(err)
                alert('Virhe lähteiden hakemisessa!')
            })
    }, [q, lang])

    // do not show the heading if there is no
    // content

    console.log('el', extlinks)

    if (extlinks && extlinks.length === 0) {
        return null
    }

    return (
        <>
            <Typography gutterBottom variant='h5' component='h6' sx={{ mt: 4, mb: 1 }}>{ citationTitle }</Typography>
            {
                extlinks 
                    ? extlinks.map((link, index) => {
                        const url = Object.values(link)[0]
                        const date = new Date()

                        return (
                            <Typography key={index} paragraph><MuiLink href={url}>{url}</MuiLink>. {postfix} {date.toLocaleDateString()}.</Typography>
                        )
                    })
                    : <Spinner />
            }
        </>
    )
}

const ImageView = ({ q, title }) => {
    const [imageResp, setResp] = useState(null)

    useEffect(() => {
        const getImageData = async (lang) => {
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
                alt={title.getImageText(q)}
            />


            <Typography sx={{ mb: 2 }} variant='caption' color='text.secondary'><MuiLink href={source}>{title.getImageText(q)}</MuiLink> {title.licence} <MuiLink href={imageResp.query.rightsinfo.url} >{imageResp.query.rightsinfo.text}</MuiLink></Typography>
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

const getTitleByLang = (lang='fi') => {
    const titles = [
        {
            code: 'fi',
            essayTitle: 'Esseeni aiheesta ',
            citationTitle: 'Lähteet',
            licence: 'lisenssillä',
            citationPostfix: 'Verkkosivu. Viitattu ',

            getImageText: (dest) => `Kuva kohteesta ${dest}`,
        },
        {
            code: 'en',
            essayTitle: 'My essay about ',
            citationTitle: 'Citations',
            citationPostfix: 'Website. Referenced at ',
            licence: 'licenced under ',

            
            getImageText: (dest) => `Image about ${dest}`,
        }
    ]

    return titles.find(title => title.code === lang)
}

export default Results