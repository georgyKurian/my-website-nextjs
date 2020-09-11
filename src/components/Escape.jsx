import { useEffect } from 'react';

export default function Escape({ callback, children }) {
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
