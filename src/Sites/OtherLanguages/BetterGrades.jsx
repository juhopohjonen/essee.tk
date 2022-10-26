import { Typography, Link as MuiLink } from '@mui/material'

const BetterGrades = () => {
    return (
        <div>
        <Typography sx={{ mt: 3 }} variant='h5' component='h2'>Miten saada parempia arvosanoja kielistä, kuten englannista?</Typography>
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
                    <Typography variant='body1' paragraph>Käytä apunasi Essee.tk:ta</Typography>
                    <Typography color='text.secondary' paragraph>
                        Essee.tk on erinomainen apuri esseiden ja muiden kirjoitelmnien kirjoittamiseen ja valmisteluun. Essee.tk:n käyttäminen on sinulle täysin ilmaista. Kokeile sitä. Se kestää vain muutaman sekunnin.
                    </Typography>
                </li>
            </ol>
        </div>
    )


}

export default BetterGrades