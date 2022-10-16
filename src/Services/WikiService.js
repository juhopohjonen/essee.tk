import axios from 'axios'

const getQueryContents = async (query) => {
    const URL = `https://fi.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&utf8=&format=json&origin=*`
    const request = await axios.get(URL)
    return request
}

export { getQueryContents }