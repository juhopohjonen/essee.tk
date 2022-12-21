import { Box, Button, Card, CardContent, TextField, Typography, useScrollTrigger, Slide, Toolbar, AppBar } from "@mui/material"
import { useState } from "react"
import { getCompletion } from "../../Services/AiService"

class Message {
    constructor(isAI, content) {
        this.isAI = isAI
        this.content = content
    }
}

const AI = () => {
    const [messageInput, setInput] = useState('')
    const [messages, setMessages] = useState([])

    const send = () => {
        const yourMessage = new Message(false, messageInput)
        setMessages([...messages, yourMessage])

        getCompletion(messageInput)
            .then(res => {
                console.log(res)
                setMessages([...messages, yourMessage, new Message(true, res.data)])
            })
            .catch(err => {
                if (err && err.response && err.response.status && err.response.status === 422) {
                    return setMessages([...messages, yourMessage, new Message(true, 'Valitanpa nyt hieman: en halua vastata sinulle viestiisi. Koitappa kysyä minulta asiallisia asioita, perkele!')])
                } 
                
                console.error(err)
                return setMessages([...messages, yourMessage, new Message(true, 'Heh hehe heh, eipä taida kuulua! Virhe, perkele!')])
                
            })
    }


    return (
        <>

        <Box sx={{ mt: 2 }}>
            <Typography variant="h3" component='h1'>Tekoäly</Typography>
            <Typography variant='subtitle1' component='p' gutterBottom>Nyt voit keskustella teköälyn kanssa!!!</Typography>

            {
                messages.map((msg, i) => {

                    return msg.isAI ? <AIMessage key={i} content={msg.content} /> : <UserMessage content={msg.content} key={i} />
                })
            }



            

        </Box>

            <AppBar position="sticky"  sx={{ bottom: 0, top: 'auto', left: 0, right: 0, width: '100%' }}>
                <Toolbar component='form' onSubmit={(e) => { e.preventDefault(); send() }} sx={{ width: '100%' }}>
                    <TextField
                        label='Kirjoita viesti'
                        value={messageInput}
                        onChange={(e) => setInput(e.target.value)}
                        sx={{ width: '95%', mr: 0.5, mt: 1, mb: 1 }}
                    />

                    <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        sx={{ }}

                        type='submit'
                    >
                        Lähetä
                    </Button>
                </Toolbar>
            </AppBar>

        </>
    )
}

const AIMessage = ({ content }) => {
    return (
        <Box sx={{ display: 'flex', mt: 1.5, mb: 1.5, alignItems: 'left', justifyContent: 'left' }}>
            <Card sx={{ width: '35rem' }}>
                <CardContent sx={{ maxWidth: '34rem' }}>
                    <Typography variant='h6' color='text.secondary'>Teköälyn viesti</Typography>
                    <Typography>{content}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

const UserMessage = ({ content }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'right', justifyContent: 'right', mt: 1.5, mb: 1.5 }}>
            <Card sx={{ width: '35rem' }}>
                <CardContent sx={{ maxWidth: '34rem' }}>
                    <Typography variant='h6' color='text.secondary'>Sinun viestisi</Typography>
                    <Typography>{content}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default AI