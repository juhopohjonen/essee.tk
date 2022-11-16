import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Link as MuiLink } from "@mui/material"
import Layout from "./Layout"
import NotFound from "./Sites/404"
import Marko from "./Sites/Index"
import Info from "./Sites/StaticPages/Info"

import CookieConsent from 'react-cookie-consent'

import { useState } from "react"
import Essay from "./Sites/Essay"
import EngIndex from "./Sites/OtherLanguages/OtherIndex"
import BetterGrades from "./Sites/StaticPages/BetterGrades"
import Englanti from "./Sites/OtherLanguages/Englanti"
import Physics from "./Sites/Physics.jsx/PhysIndex"

const HOTJAR_ID = "3204204"

const App = () => {
  const [cookiesAccepted, setCookies] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout cookiesAccepted={cookiesAccepted} HOTJAR_ID={HOTJAR_ID} />}>
            <Route index element={<Marko />} />
            <Route path="info" element={<Info />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/:name' element={<Essay />} />

            <Route path="kielet">
              <Route index element={<EngIndex />} />
              <Route path='englanti' element={<Englanti />} />

              <Route path="parempia-arvosanoja" element={<BetterGrades />} />
            </Route>

            <Route path="fysiikka">
              <Route index element={<Physics />} />   
            </Route>  

          </Route>
        </Routes>
    </BrowserRouter>

    <CookieConsent onAccept={() => setCookies(true)}>
      Käytämme 🍪 keksejä 🍪, eli evästeitä, jotta sinä voisit tehdä parempia esseitä. Lue lisää <MuiLink href="https://marko-generator.herokuapp.com/static/privacy.txt">tietosuojakäytännöstämme.</MuiLink>
    </CookieConsent>
    

    </>
  )
}



export default App