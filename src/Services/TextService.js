import axios from "axios"

const isDevelopment = process.env.NODE_ENV === 'development'


const MARKO_API = 
    isDevelopment 
        ? 'http://localhost:8000/api/marko/'
        : 'https://marko-generator.herokuapp.com/api/marko/'

console.log(MARKO_API)

const getByTitle = (title, lang='fi') => {
    const URL = MARKO_API + title
    const req = axios.get(URL, { params: {
        lang
    } })
    return req
}

export { getByTitle }