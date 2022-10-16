import Head from 'next/head'
import { Router } from 'next/router'
import { trackPageview } from 'libs/analytics'
import Footer from './Footer'
import { __prod__ } from 'libs/constants'
import { __seo__keywords } from 'libs/seo'

Router.events.on('routeChangeComplete', (url) => {
  if (__prod__) {
    trackPageview(url)
  }
})

interface PageProps {
  title?: string
  description?: string
  keywords?: string[]
  footer?: boolean
  seo?: boolean
}

const Page: React.FC<PageProps> = ({
  title,
  description = 'abostan.com - Software Engineer.',
  keywords = [],
  seo = true,
  footer = true,
  children,
}) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} – Andrei Bostan`
            : 'Andrei Bostan | Software Engineer'}
        </title>

        {seo ? (
          <>
            <meta name="description" content={description} />
            <meta
              name="keywords"
              content={[...keywords, ...__seo__keywords].join(', ')}
            />
          </>
        ) : (
          <>
            <meta key="robots" name="robots" content="noindex,follow" />
            <meta key="googlebot" name="googlebot" content="noindex,follow" />
          </>
        )}
      </Head>

      <div className="page-content">{children}</div>
      {footer && <Footer />}
    </>
  )
}

export default Page
