import Link from 'next/link';

const Menu = () => {
  const linkClasses = 'ml-6 text-white font-semibold hover:text-gray-200';
  return (
    <nav className="items-center justify-center hidden text-lg lg:flex">
      <ul className="flex">
        <li><Link href="/"><a className={linkClasses}>Home</a></Link></li>
        <li><Link href="#projects-section"><a className={linkClasses}>Projects</a></Link></li>
        <li><Link href="#skills-section"><a className={linkClasses}>Skills</a></Link></li>
        <li><Link href="/blog"><a className={linkClasses}>Blog</a></Link></li>
        <li><Link href="#contact"><a className={linkClasses}>Contact</a></Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
