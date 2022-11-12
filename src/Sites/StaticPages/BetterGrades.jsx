import { Typography, Link as MuiLink } from '@mui/material'
import OtherLangSearch from '../OtherLanguages/OtherLangSearch'

const BetterGrades = () => {
    return (
        <div>
            <Typography sx={{ mt: 3 }} variant='h3' component='h1'>Miten saada parempia arvosanoja kielistä, kuten englannista?</Typography>
            <ol>
                <li>
                    <Typography  variant='body1' component='p' gutterBottom>Harjoittele lisää</Typography>
                    <Typography color='text.secondary' paragraph>Tämä saattaa kuulostaa itsestäänselvyydeltä, mutta harjoittelu auttaa. Voin sanoa tämän kokemuksesta: sain nopeasti nostettua englannin numeroni lähes hylätystä kymppiin, kun harjoittelin tietyn verran päivässä.
                    Asetin itselleni <b>kohtuullisen</b> tavoitteen, ja sitouduin siihen. Sinäkin pystyt siihen.
                    </Typography>
                </li>

                <li style={{ marginTop: '20px' }}>
                    <Typography variant='body1' component='p' gutterBottom>Ole aktiivinen oppitunneilla</Typography>
                    <Typography color='text.secondary' paragraph>
                        Opettajaa kannattaa kuunnella, koska hän on juuri se henkilö, jonka puoleen sinun tulisi kääntyä oppimiseen liittyvissä pulmissa.
                        Sinulla on myös <MuiLink href="https://www.finlex.fi/fi/laki/ajantasa/1998/19980628">lakisääteinen oikeus</MuiLink> saada tukiopetusta.
                    </Typography>
                </li>

                <li style={{ marginTop: '20px' }}>
                    <Typography variant='body1' paragraph>Käytä Essee.tk:ta</Typography>
                    <Typography color='text.secondary' paragraph>
                        Essee.tk on erinomainen työkalu esseiden ja muiden kirjoitelmien kirjoittamiseen ja valmisteluun. Essee.tk:n käyttäminen on sinulle täysin ilmaista. Kokeile sitä. Se kestää vain muutaman sekunnin. Ja arvosanasi paranevat.
                    </Typography>
                </li>
            </ol>

            <Typography variant='h4' component='h2' gutterBottom>Miten kirjoittaa hyvä kirjoitelma tai essee?</Typography>
            <Typography paragraph gutterBottom>Sanotaan nyt suoraan: <i>hyvän esseen kirjoittaminen on erittäin vaikeaa</i>.
            Siksi on tärkeää käyttää työkaluja. Yksi parhaimmista työkaluista nimittäin on Essee.tk: työkalu, jonka avulla 
            saat parempia arvosanoja - <b>ilman plagiointisyytöksiä</b>.</Typography>

            <Typography variant='h5' component='h3' gutterBottom>Aletaan kirjoittamaan!</Typography>
            <Typography paragraph>Oletko nyt vakuuttunut siitä, että Essee.tk:n avulla kirjoitat hyviä kirjoitelmia ja parannat arvosanojasi?
            Hyvä. Tuon halusinkin kuulla. <b>Aletaan hommiin!</b></Typography>

            <OtherLangSearch />

            <br />
            
        </div>
    )


}

export default BetterGrades