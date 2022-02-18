import Document, { Head, Main, NextScript, Html } from "next/document";
import { GA_TRACKING_ID } from "libs/analytics";
import { __prod__ } from "libs/constants";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://www.google-analytics.com" />

          {/* <link
            rel="preload"
            href="https://cdn.etraining.md/assets/fonts/inter/inter-var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="https://cdn.etraining.md/assets/fonts/inter/inter-var-ext.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          /> */}

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
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />

              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                  `,
                }}
              />
            </>
          )}
        </body>
      </Html>
    );
  }
}