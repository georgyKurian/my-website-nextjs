import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Escape({ callback, children }) {
  function keydown(e) {
    if (e.keyCode === 27) {
      callback();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keydown);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', keydown);
    };
  });

  return (
    <>
      {children}
    </>
  );
}

Escape.propTypes = {
  callback: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
};

export default Escape;
