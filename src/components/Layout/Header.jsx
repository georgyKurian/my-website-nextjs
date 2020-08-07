const { default: Menu } = require("./Menu")

const Header = () => {
    return (
        <header>
            <div className="fixed w-full h-16">
                <div className="inner-wrap h-full flex justify-center items-center">
                    <Menu></Menu>
                </div>            
            </div>            
            <div className="h-16"></div>
        </header>
    )
}

export default Header;