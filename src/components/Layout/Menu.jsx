import Link from 'next/link';

const Menu = () => {
  const linkClasses = 'ml-6 text-gray-500 font-medium hover:text-white';
  return (
    <nav className="items-center justify-center hidden text-lg md:flex">
      <ul className="flex">
        <li><Link href="/"><a className={linkClasses}>Home</a></Link></li>
        <li><Link href="/#projects-section"><a className={linkClasses}>Projects</a></Link></li>
        <li><Link href="/#skills-section"><a className={linkClasses}>Skills</a></Link></li>
        {/* <li><Link href="/blog"><a className={linkClasses}>Blog</a></Link></li> */}
        <li><Link href="/#contact"><a className={linkClasses}>Contact</a></Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
