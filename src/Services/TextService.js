import axios from "axios"

const isDevelopment = process.env.NODE_ENV === 'development'


const BASE_API = 
    isDevelopment 
        ? 'http://localhost:8000/'
        : 'https://marko-generator.herokuapp.com/'

const MARKO_API = BASE_API + 'api/marko/'
const WIKI_API = BASE_API + 'api/wiki/'

const getByTitle = (title, lang='fi') => {
    const URL = MARKO_API + title
    const req = axios.get(URL, { params: {
        lang
    } })
    return req
}

const getPossibleWikis = async () => await axios.get(WIKI_API)

export { getByTitle, getPossibleWikis }