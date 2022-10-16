import axios from "axios"

const MARKO_API = 'https://marko-generator.herokuapp.com/api/marko/'

const getByTitle = (title) => {
    const URL = MARKO_API + title
    const req = axios.get(URL)
    return req
}

export { getByTitle }