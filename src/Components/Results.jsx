import { Box, Button, Card, CardActions, CardContent, Skeleton, Typography, Link as MuiLink } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"
import { getByTitle } from "../Services/TextService"

const Results = ({ query }) => {
    const [text, setText] = useState(null)
    const [essayGenerationTimes, setTimes] = useState(0)

    useEffect(() => {
        setText(null)
        getByTitle(query)
            .then(res => {
                setText(res.data)
            })
            .catch(err => alert('Error!'))
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
                <Typography sx={{ mb: 2 }} variant='h5'>Esseeni aiheesta <b>{query}</b></Typography>
 

                {text.map(text => (
                    <Typography paragraph>{text}</Typography>
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


const ResultsSkeleton = () => (
    <div style={{ width: 500, marginTop: 10 }}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
    </div>

)

export default Results