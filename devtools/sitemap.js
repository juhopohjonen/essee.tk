// build xml with titleRoutings

const fs = require('fs')

const args = process.argv.slice(2)
const url = args[0]

console.log(url)

const { create } = require('xmlbuilder2')
const routingObj = require('../src/titleRoutings')

const titleRoutings = routingObj.titleRoutings

const doc = create({ version: "1.0", encoding: "UTF-8" })
const url_elem = doc.ele('urlset', { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" }).ele('url')

for (let i = 0; i < titleRoutings.length; i++) {
    let routing = titleRoutings[i]
    url_elem.ele('loc').txt(url + routing.url)
}


const sitemapXML = doc.end({ prettyPrint: true })
fs.writeFileSync('./sitemap.xml', String(sitemapXML))

console.log(sitemapXML)