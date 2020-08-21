import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HambergerIcon from '../../assets/images/icons/hamberger.svg';
import CloseIcon from '../../assets/images/icons/close.svg';
import MobileMenu from './MobileMenu';

const { default: Menu } = require('./Menu');

const Header = ({ pageWrapperElement }) => {
  const [scrollY, setScrollY] = useState({ offset: 0, isGoingUp: true });
  const [isMenuOpen, setMenuOpen] = useState(false);
  // const [isMenuClosing, setMenuClosing] = useState(false);

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    if (scrollY.offset > currentScrollPos) {
      setScrollY({ offset: currentScrollPos, isGoingUp: true });
    } else {
      setScrollY({ offset: currentScrollPos, isGoingUp: false });
    }
  }

  function handleMenuButtonClick() {
    if (isMenuOpen) {
      // setMenuClosing(true);
      setMenuOpen(false);
      /* setTimeout(() => {
        setMenuOpen(false);
        setMenuClosing(false);
      }, 1000); */
      pageWrapperElement.current.classList.remove('fixed');
    } else {
      setMenuOpen(true);
      pageWrapperElement.current.classList.add('fixed');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header>
      <div className={`fixed top-menu-bar ${!scrollY.isGoingUp ? 'hide' : ''} z-20 w-full h-16 lightBlueGradient`}>
        <div className="flex items-center justify-between h-full inner-wrap">
          <img src="/logo-2.svg" alt="Logo" className="h-10" />
          <div />
          <Menu />
          <button type="button" className="px-2 py-1 lg:hidden" onClick={handleMenuButtonClick} aria-expanded={isMenuOpen} aria-label="Open the menu">
            {!isMenuOpen && <HambergerIcon className="h-8 text-white fill-current" aria-hidden="true" />}
            {isMenuOpen && <CloseIcon className="h-8 text-white fill-current" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div className="h-16 lightBlueGradient" />
      {isMenuOpen
      && (
        <div className="absolute right-0 w-full h-full lg:hidden">
          <div className="absolute w-full h-full bg-black bg-opacity-50" />
          <div className="absolute right-0 w-full h-full bg-white sm:w-2/3">
            <MobileMenu />
          </div>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  pageWrapperElement: PropTypes.oneOfType([
    PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      current: PropTypes.any,
    }),
  ]).isRequired,
};

export default Header;
