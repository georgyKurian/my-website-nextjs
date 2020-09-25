import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HambergerIcon from '../../assets/images/icons/hamberger.svg';
import CloseIcon from '../../assets/images/icons/close.svg';
import MobileMenu from './MobileMenu';
import Escape from '../Escape';

const { default: Menu } = require('./Menu');

const Header = ({ pageWrapperElement, isHeaderTransparent }) => {
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

  function closeMenu() {
    if (isMenuOpen) {
      setMenuOpen(false);
      pageWrapperElement.current.classList.remove('fixed');
    }
  }

  function openMenu() {
    setMenuOpen(true);
    pageWrapperElement.current.classList.add('fixed');
  }

  function handleMenuButtonClick(e) {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
    e.stopPropagation();
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener('click', closeMenu);
      return () => window.removeEventListener('click', closeMenu);
    }
    return undefined;
  }, [isMenuOpen]);

  return (
    <header>
      <div className={`fixed top-menu-bar ${!scrollY.isGoingUp ? 'hide' : ''} ${scrollY.offset > 0 ? 'shadow-lg bg-secondaryColor' : ''} ${!isHeaderTransparent ? ' bg-secondaryColor' : ''} z-20 w-full h-16`}>
        <div className="container flex items-center justify-between h-full">
          <img src="/logo-2.svg" alt="Logo" className="h-10" />
          <div />
          <Menu />
          <button type="button" className="px-2 py-1 md:hidden" onClick={handleMenuButtonClick} aria-expanded={isMenuOpen} aria-label="Open the menu">
            {!isMenuOpen && <HambergerIcon className="h-8 text-gray-300 fill-current" aria-hidden="true" />}
            {isMenuOpen && <CloseIcon className="h-8 text-gray-700 fill-current" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {!isHeaderTransparent && (<div className="h-16" />)}
      {isMenuOpen
      && (
      <div className="absolute right-0 w-full h-full lg:hidden">
        <div className="absolute w-full h-full bg-black bg-opacity-50" />
        <div className="absolute right-0 w-full h-full bg-white sm:w-2/3">
          <Escape callback={closeMenu}>
            <MobileMenu />
          </Escape>
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
  isHeaderTransparent: PropTypes.bool.isRequired,
};

export default Header;
