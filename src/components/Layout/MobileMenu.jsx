import Link from 'next/link';
import { useRef, useEffect } from 'react';
import FocusLock from 'react-focus-lock';

const MobileMenu = () => {
  const mobileMenuRef = useRef();
  useEffect(() => {
    mobileMenuRef.current.focus();
  }, [mobileMenuRef.current]);
  return (
    <FocusLock>
      <nav className="">
        <ul ref={mobileMenuRef} className="flex flex-col items-center justify-center text-lg mobile-menu" tabIndex="-1">
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/#projects-section"><a>Projects</a></Link></li>
          <li><Link href="/#skills-section"><a>Skills</a></Link></li>
          {/* <li>
          <Link href="/blog"><a className={linkClasses}>Blog</a></Link></li>
        */}
          <li><Link href="/#contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </FocusLock>
  );
};

export default MobileMenu;
