import Link from 'next/link';
import { useRef, useEffect } from 'react';

const MobileMenu = () => {
  const mobileMenuRef = useRef();
  const linkClasses = 'w-full block text-gray-800 text-lg hover:text-gray-900 px-2 py-3 text-center';
  useEffect(() => {
    mobileMenuRef.current.focus();
  }, [mobileMenuRef.current]);
  return (
    <nav className="">
      <ul ref={mobileMenuRef} className="flex flex-col items-center justify-center text-lg" tabIndex="-1">
        <li className="w-full"><Link href="/"><a className={linkClasses}>Home</a></Link></li>
        <li className="w-full"><Link href="/#projects-section"><a className={linkClasses}>Projects</a></Link></li>
        <li className="w-full"><Link href="/#skills-section"><a className={linkClasses}>Skills</a></Link></li>
        <li className="w-full"><Link href="/blog"><a className={linkClasses}>Blog</a></Link></li>
        <li className="w-full"><Link href="/#contact"><a className={linkClasses}>Contact</a></Link></li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
