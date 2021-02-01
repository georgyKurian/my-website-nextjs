import Document, {
  Head, Main, NextScript, Html,
} from 'next/document';

import { getSiteMetaData } from '@utils/helpers';

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();

    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
