const { default: Menu } = require("./Menu")

const Header = () => {
    return (
        <header>
            <div className="fixed h-12 flex items-center">
                <Menu></Menu>
            </div>            
            <div className="h-12"></div>
        </header>
    )
}

export default Header;