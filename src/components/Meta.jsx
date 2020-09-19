import PropTypes from 'prop-types';

const Meta = ({ title, description }) => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />

    <meta charSet="utf-8" />
    <meta name="application-name" content="Georgi's App" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="Georgi's App" />
    <meta name="description" content={description} />
    <meta name="author" content="Georgi Kurian" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="msapplication-config" content="/static/icons/browserconfig.xml" />
    <meta name="msapplication-TileColor" content="#2B5797" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.svg" />
    <link rel="icon" size="32x32" type="image/png" href="/favicon-32x32.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />

    <meta key="type" property="og:type" content="website" />
    <meta key="title" property="og:title" content={title} />
    <meta key="description" property="og:description" content={description} />
    <meta key="site_name" property="og:site_name" content="Georgi's App" />
  </>
);

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Meta;
