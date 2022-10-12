import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Header } from 'components/Layout'
import baseTheme from 'styles/base'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />

    <style jsx global>
      {baseTheme}
    </style>
  </>
)

export default MyApp
