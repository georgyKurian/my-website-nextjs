import Link from 'next/link';
import { useRef, useEffect } from 'react';
import FocusLock from 'react-focus-lock';

const MobileMenu = () => {
  const mobileMenuRef = useRef();
  const linkClasses = '';
  useEffect(() => {
    mobileMenuRef.current.focus();
  }, [mobileMenuRef.current]);
  return (
    <FocusLock>
      <nav className="">
        <ul ref={mobileMenuRef} className="flex flex-col items-center justify-center text-lg mobile-menu" tabIndex="-1">
          <li><Link href="/"><a className={linkClasses}>Home</a></Link></li>
          <li><Link href="/posts"><a className={linkClasses}>Blog</a></Link></li>
          <li><Link href="/about"><a className={linkClasses}>About</a></Link></li>
          <li><Link href="/#contact"><a className={linkClasses}>Contact</a></Link></li>
        </ul>
      </nav>
    </FocusLock>
  );
};

export default MobileMenu;
