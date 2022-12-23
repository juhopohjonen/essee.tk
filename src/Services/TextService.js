import axios from "axios"

const isDevelopment = process.env.NODE_ENV === 'development'


const BASE_API = 
    isDevelopment 
        ? 'http://localhost:8000/'
        : 'https://esseetk2.fly.dev/'

console.log(BASE_API)

const MARKO_API = BASE_API + 'api/marko/'
const WIKI_API = BASE_API + 'api/wiki/'

const getByTitle = (title, lang='fi', accr) => {
    const URL = MARKO_API + title
    const req = axios.get(URL, { params: {
        lang,
        accuracy: accr
    } })
    return req
}

const getPossibleWikis = async () => await axios.get(WIKI_API)

export { getByTitle, getPossibleWikis }