import Link from "next/link";

const Menu = () => {
    const linkClasses = 'ml-6 text-gray-700 font-semibold hover:text-black';
    return (
        <nav className="hidden lg:flex items-center justify-center text-lg">
            <ul className="flex">
                <li><Link href="/" ><a className={linkClasses}>Home</a></Link></li>
                <li><Link href="/blog" ><a className={linkClasses}>Blog</a></Link></li>
                <li><Link href="/contact" ><a className={linkClasses}>Contact</a></Link></li>                
            </ul>
        </nav>
    )
}

export default Menu;