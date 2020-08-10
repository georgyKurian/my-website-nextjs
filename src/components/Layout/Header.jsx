const { default: Menu } = require('./Menu');

const Header = () => (
  <header>
    <div className="fixed z-20 w-full h-16 bg-white border-b border-themeGray-600">
      <div className="flex items-center justify-center h-full inner-wrap">
        <Menu />
      </div>
    </div>
    <div className="h-16" />
  </header>
);

export default Header;
