import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({
  headerContent, children, title, description,
}) => {
  const wrapperElementRef = useRef(null);
  return (
    <>
      <Head>
        { /* Global site tag (gtag.js) - Google Analytics */ }
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-80050463-3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-80050463-3');
              `,
          }}
        />
        <title>{`${title} | Georgi Kurian's Website`}</title>

        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />

        <meta charSet="utf-8"></meta>
        <meta name="application-name" content="Georgi's App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Georgi's App" />
        <meta name="description" content={description} />
        <meta name="author" content="Georgi Kurian"/>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/static/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.svg" />
        <link rel="icon" size="32x32" type="image/png" href="/favicon-32x32.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />

        <meta key="type" property="og:type" content="website" ></meta>
        <meta key="title" property="og:title" content={title} ></meta>
        <meta key="description" property="og:description" content={description} ></meta>
        <meta key="site_name" property="og:site_name" content="Georgi's App"></meta>
      </Head>

      <div className="flex flex-col lg:static" style={{ minHeight: '100vh' }} ref={wrapperElementRef}>
        <Header pageWrapperElement={wrapperElementRef}>{headerContent}</Header>
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </div>

    </>
  );
};

DefaultLayout.propTypes = {
  headerContent: PropTypes.element,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string]),
  title: PropTypes.string,
};

DefaultLayout.defaultProps = {
  headerContent: null,
  children: '',
  title: '',
};

export default DefaultLayout;
