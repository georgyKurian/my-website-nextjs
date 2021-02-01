import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({
  headerContent, children, title, description, mainStyle, isHeaderTransparent = false
}) => {
  const wrapperElementRef = useRef(null);
  return (
    <>
      <Head>       
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
      </Head>

      <div className="flex flex-col lg:static w-full" style={{ minHeight: '100vh' }} ref={wrapperElementRef}>
        <Header pageWrapperElement={wrapperElementRef} isHeaderTransparent={isHeaderTransparent}>{headerContent}</Header>
        <main className={`flex-1 w-full ${mainStyle||''}`} >{children}</main>
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
    PropTypes.string
  ]),
  title: PropTypes.string,
  mainStyle: PropTypes.string,
  isHeaderTransparent: PropTypes.bool,
};

DefaultLayout.defaultProps = {
  headerContent: null,
  children: '',
  title: '',
  mainStyle: '',
};

export default DefaultLayout;
