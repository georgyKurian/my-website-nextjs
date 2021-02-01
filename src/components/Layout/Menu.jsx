import Link from 'next/link';

const Menu = () => {
  const linkClasses = 'ml-6 text-gray-400 font-medium hover:text-white focus:text-white';
  return (
    <nav className="items-center justify-center hidden text-lg md:flex">
      <ul className="flex">
        <li><Link href="/"><a className={linkClasses}>Home</a></Link></li>
        <li><Link href="/posts"><a className={linkClasses}>Blog</a></Link></li>
        <li><Link href="/about"><a className={linkClasses}>About</a></Link></li>
        <li><Link href="/#contact"><a className={linkClasses}>Contact</a></Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
