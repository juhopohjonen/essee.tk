import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

let defaultValue = 'Essee.tk'
let defaultDescValue = 'Etkö jaksa tehdä opettajan antamaa essee-kirjoitusta? Ei hätää! Nyt sinun ei tarvitse enää kirjoitella tekstejä turhaan. Kirjoitamme puolestasi.'

let value = defaultValue

const titleRoutings = [
    {
        url: '/',
        title: 'Etusivu',
        description: 'Oletko miettinyt, miten saada parempia arvosanoja koulusta? Essee.tk on tekoäly, joka kirjoittaa esseitä, tietotekstäjä, kirjoitelmia ja muita tekstejä.'
    },
    {
        url: '/info',
        title: 'Tietoa',
        description: 'Mikä ihme Essee.tk on? No, kärjistetysti se on työkalu, jonka avulla voit tehdä esseitä ilman, että kirjoitat niitä. Kurkkaa lisää!'
    },
    {
        url: '/kielet',
        title: 'Kielten essee',
        description: 'Essee.tk:n avulla voi myöskin luoda mm. englanninkielisiä esseitä ja kirjoitelmia. Essee.tk on työkalu, jonka avulla voit saada parempia numeroita. Kokeile ilmaiseksi!'
    },
    {
        url: '/kielet/parempia-arvosanoja',
        title: 'Parempia arvosanoja kielistä',
        description: 'Tiedätkö, miten voisit saada parempia arvosanoja kielistä, kuten englannista, ruotsista tai saksasta? Listasimme parhaimmat vinkit sivullemme. Tervetuloa lukemaan!'
    },
    {
        url: '/kielet/englanti',
        title: 'Englanninkielinen essee',
        description: 'Oletko miettinyt, miten saada parempia numeroita englannista? Essee.tk tarjoaa mahdollisuuden mm. englanninkielisten esseiden luomiseen. Testaa sitä!'
    },
    {
        url: '/fysiikka',
        title: 'Fysiikka',
        description: 'Fysiikka on vaikeaa. Oletko koskaan miettinyt, miten saada parempia numeroita Fysiikasta? Tiedätkö, miten laskea potentiaalienergia? Kiinnostaako sinua fysiikka? Laske fysiikan laskut nettisivumme avulla.'
    },
    {
        url: '/lunttilappu',
        title: 'Lunttilappu',
        description: 'Lunttilappu-ohjelman avulla voit muistaa paljon enemmän asioita, kuin muuten muistaisit. Lunttilappu tallentaa kaikki kirjoituksesi automaattisesti selaimellesi. Lunttilapun avulla voit saada parempia numeroita!'
    }
]

const TitleChanger = () => {
    const descriptionTag = document.getElementById('description')

    const changeTitle = (title) => {
        document.title = `${title} - Essee.tk`
    }

    let location = useLocation()
    const routePath = location.pathname

    console.log(routePath)

    useEffect(() => {
        const handleTitleChange = (titleObject) => {
            if (titleObject && titleObject.title) {
                value = titleObject.title
            } else {
                return document.title = defaultValue
            }
    
            changeTitle(value)
            handleDescChange(titleObject)

        }

        const handleDescChange = (object) => {

            if (object && object.description) {
                descriptionTag.content = object.description
            } else {
                descriptionTag.content = defaultDescValue
            }
        }

        const findTitle = () => {
            return titleRoutings.find(title => title.url === routePath)
        }

        handleTitleChange(findTitle())

    }, [routePath, location, descriptionTag])

}
export default TitleChanger