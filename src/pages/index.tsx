import Link from 'next/link'
import { getLayout } from '~/components/common'
import { BoyInLandscape } from '~/components/illustrations'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Grid,
  Heading,
  Text,
} from '~/components/ui'

const HomePage = () => {
  const quotes = [
    {
      artist: {
        name: 'Sylvia Falcón',
        avatar: '/static/img/sylviafalcon.png',
        type: 'Cantante',
      },
      text: 'Hacer énfasis en los niños son la esperanza de que este legado perdure, que el quechua es nuestro, es lo más nuestro que tenemos, está ahí hace miles de año.',
    },
    {
      artist: {
        name: 'Renata Flores',
        avatar: '/static/img/renataflores.png',
        type: 'Cantante',
      },
      text: 'Nunca imaginé la responsabilidad que iba a tener por cantar en quechua. No pensé que podría llegar a transmitir a mucha gente los problemas que tenemos.',
    },
    {
      artist: {
        name: 'Liberato Kani',
        avatar: '/static/img/liberatokani.png',
        type: 'Cantante',
      },
      text: 'Cuando uno aprende quechua, no solo se trata de aprender a hablar un idioma, hay que conocer su historia. Estamos en una lucha por construir nuestra identidad.',
    },
  ]

  return (
    <>
      <section className="home-hero">
        <Container>
          <div className="home-hero__container">
            <div className="home-hero__content">
              <h1 className="home-hero__title">Descubre el quechua</h1>
              <p className="home-hero__description">
                La lengua de nuestros antepasados que representa nuestra entidad cultural.
              </p>
              <div className="home-hero__button">
                <Link href="/iniciativas" passHref>
                  <Button primary>Ver iniciativas</Button>
                </Link>
              </div>
            </div>
            <div className="home-hero__image">
              <BoyInLandscape />
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Heading title="Promotores" />

          <Grid>
            {quotes.map((quote, i) => (
              <Card key={i}>
                <CardHeader
                  avatar={<Avatar src={quote.artist.avatar} />}
                  title={quote.artist.name}
                  subtitle={quote.artist.type}
                />
                <CardBody>
                  <Text as="blockquote" italic>
                    {quote.text}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  )
}

HomePage.getLayout = getLayout

export default HomePage
