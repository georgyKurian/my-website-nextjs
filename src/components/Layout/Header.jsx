import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const { default: Menu } = require('./Menu');

const Header = ({ pageWrapperElement }) => {
  const [scrollY, setScrollY] = useState({ offset: 0, isGoingUp: true });
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuClosing, setMenuClosing] = useState(false);

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    if (scrollY.offset > currentScrollPos) {
      setScrollY({ offset: currentScrollPos, isGoingUp: true });
    } else {
      setScrollY({ offset: currentScrollPos, isGoingUp: false });
    }
  }

  function handleMenuOpenButtonClick() {
    setMenuOpen(true);
    pageWrapperElement.current.classList.add('fixed');
  }

  function handleMenuCloseButtonClick() {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 1000);

    pageWrapperElement.current.classList.remove('fixed');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <header>
      <div className={`fixed top-menu-bar ${!scrollY.isGoingUp ? 'hide' : ''} z-20 w-full h-16 lightBlueGradient`}>
        <div className="flex items-center justify-between h-full inner-wrap">
          <img src="/Logo-2.svg" alt="Logo" className="h-10" />
          <div />
          <Menu />
        </div>
      </div>
      <div className="h-16 lightBlueGradient" />
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
