import axios from "axios"

const isDevelopment = process.env.NODE_ENV === 'development'


const BASE_API = 
    isDevelopment 
        ? 'http://localhost:8000/'
        : 'https://esseetk2.fly.dev/'

const completion_api = BASE_API + 'api/ai/completion'

const getCompletion = async (query) => {
    const req = await axios.post(completion_api, { query })
    return req
}

export {
    getCompletion
}