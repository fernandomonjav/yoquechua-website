import { NextSeo } from 'next-seo'
import { getLayout } from '~/components/common'
import { Avatar, Card, CardBody, CardHeader, Container, Grid, Heading, Text } from '~/components/ui'

const AcercaPage = () => {
  const members = [
    {
      name: 'Fernando Monja Vasquez',
      avatarUrl: '/static/img/fernandomonjav.png',
      role: 'Desarrollador',
    },
    {
      name: 'Samuel Sánchez Pardo',
      avatarUrl: '/static/img/sanchezpardosam.png',
      role: 'Desarrollador',
    },
    {
      name: 'Jonathan Monja',
      avatarUrl: '/static/img/jonathanmonja.png',
      role: 'Diseñador',
    },
  ]

  return (
    <>
      <NextSeo title="Acerca | YoQuechua" />

      <section className="section">
        <Container>
          <Heading title="Acerca" />

          <Grid>
            <Card>
              <CardHeader title="Nosotros" />
              <CardBody>
                <Text as="p">
                  Somos un proyecto creado para promover el quechua y sus variantes, reuniendo
                  información e iniciativas para aquellos que están empezando.
                </Text>
              </CardBody>
            </Card>

            <Card>
              <CardHeader title="Misión" />
              <CardBody>
                <Text as="p">
                  Somos un proyecto impulsado para promover iniciativas que buscan preservar y
                  fortalecer la lengua quechua.
                </Text>
              </CardBody>
            </Card>

            <Card>
              <CardHeader title="Visión" />
              <CardBody>
                <Text as="p">
                  En unos años nos proyectamos como un referente en la promoción del quechua a nivel
                  nacional e internacional.
                </Text>
              </CardBody>
            </Card>
          </Grid>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Heading title="Equipo" />

          <Grid>
            {members.map((member, i) => (
              <Card key={i}>
                <CardHeader
                  avatar={<Avatar src={member.avatarUrl} name={member.name} />}
                  title={member.name}
                  subtitle={member.role}
                />
              </Card>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  )
}

AcercaPage.getLayout = getLayout

export default AcercaPage
