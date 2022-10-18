import Document, { Head, Main, NextScript, Html } from 'next/document'
import { GA_TRACKING_ID } from 'libs/analytics'
import { __prod__ } from 'libs/constants'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://www.google-analytics.com" />

          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link rel="preload" href="/assets/global.css" as="style" />
          <link href="/assets/global.css" rel="stylesheet" />

          <link rel="manifest" href="/static/manifest.json" />
        </Head>

        <body>
          <Main />
          <NextScript />

          {__prod__ && (
            <>
              <script
                data-goatcounter="https://abostan.goatcounter.com/count"
                async
                src="//gc.zgo.at/count.js"
              ></script>
            </>
          )}
        </body>
      </Html>
    )
  }
}
