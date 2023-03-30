import logo from "./../assets/logo.png";
import hamburger from "./../assets/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img className="header__logoimg" src={logo} alt="Logo" />
          <span>ComputerHome</span>
        </div>
        <div className="header__actions">
          <nav className="header__nav">
            <a className="header__nav__item" href="">
              Home
            </a>
            <a className="header__nav__item" href="">
              About
            </a>
          </nav>
          <p>SC</p>
        </div>
        <div className="header__hamburger">
          <img src={hamburger} alt="hamburger" />
          <a className="header__nav__item" href="">
            Home
          </a>
          <a className="header__nav__item" href="">
            About
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
