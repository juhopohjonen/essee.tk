// build xml with titleRoutings

const args = process.argv.slice(2)
const url = args[0]

console.log(url)

const { create } = require('xmlbuilder2')
const titleRoutings = require('../src/titleRoutings')

const doc = create({ version: 1.0, encoding: "UTF-8" })
doc.ele('urlset', { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" }).up()

const url_elem = doc.ele('url')

for (let i = 0; i < titleRoutings.length; i++) {
    let routing = titleRoutings[i]
    console.log('looping')
    
    url_elem.ele('loc').txt(url + routing.url)
}


const sitemapXML = root.end({ prettyPrint: true })
console.log(sitemapXML)