import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({
  headerContent, children, title,
}) => {
  return (
    <>
      <Head>
        <title>{`E | ${title}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
             
        <div className="relative flex flex-col" style={{ minHeight: '100vh' }}>
            <Header>{headerContent}</Header>
            <main className={`w-full flex-1`} >{children}</main>
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
      PropTypes.string]
  ),
  title: PropTypes.string,
};

DefaultLayout.defaultProps = {
  headerContent: null,
  children: '',
  title: '',
};

export default DefaultLayout;