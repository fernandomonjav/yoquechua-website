import { NextSeo } from 'next-seo'
import { getLayout } from '~/components/common'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Grid,
  Heading,
  Text,
} from '~/components/ui'

const IniciativasPage = () => {
  const iniciatives = [
    {
      name: 'Pukllaspa Yachay',
      imageUrl: '/static/img/pukllaspa-yachay.png',
      text: 'Aprende jugando. ¡El quechua es lo máximo! Sigue todas las emisiones del primer programa concurso en quechua que puede hacerte ganar.',
      websiteUrl: 'https://www.tvperu.gob.pe/programas/pukllaspa-yachay',
      type: 'Estado',
    },
    {
      name: 'Habla Quechua',
      imageUrl: '/static/img/habla-quechua.png',
      text: 'Conéctate con la magia de la lengua de nuestros ancestros. “Habla Quechua” es la aplicación que PROMPERÚ lanza con el apoyo de la Academia Mayor de Lengua Quechua. ¡Descárgala ya!',
      websiteUrl: 'https://play.google.com/store/apps/details?id=com.promperu.hablaquechua',
      type: 'Estado',
    },
    {
      name: 'Ñuqanchik',
      imageUrl: '/static/img/nuqanchik.png',
      text: 'Es el primer noticiero hecho en quechua de la televisión nacional. De lunes a viernes a las 5:30 a.m., en simultáneo por las señales de TVPerú y radio Nacional.',
      websiteUrl: 'https://www.tvperu.gob.pe/programas/nuqanchik',
      type: 'Estado',
    },
    {
      name: 'Qichwa 2.0',
      imageUrl: '/static/img/qichwa-2-0.png',
      text: 'Es una iniciativa creada con el objetivo de producir herramientas para el aprendizaje y la difusión del idioma y cultura quechua.',
      websiteUrl: 'https://qichwa.net',
      type: 'Comunidad',
    },
    {
      name: 'Wikipidiya',
      imageUrl: '/static/img/wikipidiya.png',
      text: 'Con más de 22 000 artículos,​ es la versión más grande en una lengua indígena de América. A mayo de 2020 llevaba 22 889 artículos.',
      websiteUrl: 'https://qu.wikipedia.org',
      type: 'Comunidad',
    },
    {
      name: 'Peruapi',
      imageUrl: '/static/img/peruapi.png',
      text: 'Una iniciativa que reúne lo que amamos del Perú disponible en quechua.',
      websiteUrl: 'https://peruapi.com/qu',
      type: 'Comunidad',
    },
  ]

  return (
    <>
      <NextSeo title="Iniciativas | YoQuechua" />

      <section className="section">
        <Container>
          <Heading title="Estado" />

          <Grid>
            {iniciatives
              .filter((iniciative) => iniciative.type === 'Estado')
              .map((iniciative, i) => (
                <Card key={i}>
                  <CardHeader
                    avatar={<Avatar src={iniciative.imageUrl} name={iniciative.name} />}
                    title={iniciative.name}
                  />
                  <CardBody>
                    <Text as="p">{iniciative.text}</Text>
                  </CardBody>
                  <CardFooter>
                    <Button
                      as="a"
                      primary
                      href={iniciative.websiteUrl}
                      rel="noopener nofollow"
                      target="_blank"
                    >
                      Visitar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </Grid>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Heading title="Comunidades" />

          <Grid>
            {iniciatives
              .filter((iniciative) => iniciative.type === 'Comunidad')
              .map((iniciative, i) => (
                <Card key={i}>
                  <CardHeader
                    avatar={<Avatar src={iniciative.imageUrl} name={iniciative.name} />}
                    title={iniciative.name}
                  />
                  <CardBody>
                    <Text as="p">{iniciative.text}</Text>
                  </CardBody>
                  <CardFooter>
                    <Button
                      as="a"
                      primary
                      href={iniciative.websiteUrl}
                      rel="noopener nofollow"
                      target="_blank"
                    >
                      Visitar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </Grid>
        </Container>
      </section>
    </>
  )
}

IniciativasPage.getLayout = getLayout

export default IniciativasPage
