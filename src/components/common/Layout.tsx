import Script from 'next/script'
import { NextSeo } from 'next-seo'
import { Footer } from './Footer'
import { Header } from './Header'

const { NEXT_PUBLIC_URL } = process.env

export const Layout: React.FC = (props) => {
  const { children } = props

  return (
    <>
      <NextSeo
        title="YoQuechua"
        description="La lengua de nuestros antepasados que representa nuestra entidad cultural."
        openGraph={{
          images: [
            {
              url: `${NEXT_PUBLIC_URL}/static/cover.png`,
              alt: 'YoQuechua',
            },
          ],
          type: 'website',
        }}
      />
      <Script
        async
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-C0C6MVWRTF"
      />
      <Script async id="gtag" strategy="lazyOnload">
        {`
          ;(() => {
            window.dataLayer = window.dataLayer || []
            function gtag() {
              dataLayer.push(arguments)
            }
            gtag('js', new Date())
          
            gtag('config', 'G-C0C6MVWRTF')
          })()        
        `}
      </Script>
      <Header />
      <div className="page">{children}</div>
      <Footer />
    </>
  )
}

export const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>
