import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { titleRoutings } from './titleRoutings'

let defaultValue = 'Essee.tk'
let defaultDescValue = 'Etkö jaksa tehdä opettajan antamaa essee-kirjoitusta? Ei hätää! Nyt sinun ei tarvitse enää kirjoitella tekstejä turhaan. Kirjoitamme puolestasi.'

let value = defaultValue



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