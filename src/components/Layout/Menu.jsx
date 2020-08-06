import Link from "next/link";

const Menu = () => {
    return (
        <nav>
            <ul className="flex">
                <li><Link href="/" ><a>Home</a></Link></li>
                <li><Link href="/blog" ><a>Blog</a></Link></li>
                <li><Link href="/contact" ><a>Contact</a></Link></li>                
            </ul>
        </nav>
    )
}

export default Menu;