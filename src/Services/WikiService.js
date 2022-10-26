import axios from 'axios'

const BASE_URL = 'https://fi.wikipedia.org/w/api.php'
const getWikiBase = (langCode) => langCode === 'fi' ? BASE_URL : `https://${langCode}.wikipedia.org/w/api.php`

const getQueryContents = async (query, lang='fi') => {
    const POSTFIX = `?action=query&list=search&srsearch=${query}&utf8=&format=json&origin=*`

    const URL = lang === 'fi'
        ? BASE_URL + POSTFIX
        : getWikiBase(lang) + POSTFIX

    const request = await axios.get(URL)
    return request
}

const getImageURLs = async (query, lang='fi') => {
    const POSTFIX = `?format=json&action=query&titles=${query}&prop=imageinfo|pageimages&iiprop=url&meta=siteinfo&siprop=rightsinfo&origin=*&pithumbsize=1000`
    const URL = getWikiBase(lang) + POSTFIX

    const request = await axios.get(URL)
    return request
}

const getExtlinks = async (query, lang='fi') => {
    const URL = getWikiBase(lang) + `?format=json&action=query&titles=${query}&prop=extlinks&origin=*`
    const request = await axios.get(URL)

    return request
}

const parseWiki = async (query) => {
    const URL = BASE_URL + `?action=parse&page=${query}&format=json&origin=*`
    const request = await axios.get(URL)
    return request
}

export { getQueryContents, getImageURLs, parseWiki, getExtlinks }