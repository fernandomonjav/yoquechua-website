import type { AppProps } from 'next/app'
import '~/styles/main.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
