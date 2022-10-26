import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

let defaultValue = 'Essee.tk'
let defaultDescValue = 'Etkö jaksa tehdä opettajan antamaa essee-kirjoitusta? Ei hätää! Nyt sinun ei tarvitse enää kirjoitella tekstejä turhaan. Kirjoitamme puolestasi.'

let value = defaultValue

const titleRoutings = [
    {
        url: '/',
        title: 'Etusivu',
        description: 'Essee.tk:n avulla tekoäly luo sinulle helposti valmiin esseen vain pienessä hetkessä. Valitse Essee.tk, niin saat valmiin ratkaisun ongelmiisi.'
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
                value = defaultValue
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