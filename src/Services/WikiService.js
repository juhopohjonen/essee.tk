import axios from 'axios'

const BASE_URL = 'https://fi.wikipedia.org/w/api.php'

const getQueryContents = async (query) => {
    const URL = BASE_URL + `?action=query&list=search&srsearch=${query}&utf8=&format=json&origin=*`
    const request = await axios.get(URL)
    return request
}

const getImageURLs = async (query) => {
    // const URL = BASE_URL + `?action=query&titles=${query}&prop=pageimages&format=json&pithumbsize=1000&origin=*&meta=siteinfo&siprop=rightsinfo`
    const URL = BASE_URL + `?format=json&action=query&titles=${query}&prop=imageinfo|pageimages&iiprop=url&meta=siteinfo&siprop=rightsinfo&origin=*&pithumbsize=1000`

    const request = await axios.get(URL)
    return request
}

const parseWiki = async (query) => {
    const URL = BASE_URL + `?action=parse&page=${query}&format=json&origin=*`
    const request = await axios.get(URL)
    return request
}

export { getQueryContents, getImageURLs, parseWiki }