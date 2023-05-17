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
            <a className="header__nav__item" href="/home">
              Home
            </a>
            <a className="header__nav__item" href="/ispit">
              Ispit
            </a>
            <a className="header__nav__item" href="/exe">
              Exe
            </a>
            <a className="header__nav__item" href="/mlinar">
              Mlinar
            </a>
            <a className="header__nav__item" href="/varijable">
              Varijable
            </a>
            <a className="header__nav__item" href="/petlje">
              Petlje
            </a>
            <a className="header__nav__item" href="/vjezba2604">
              Vjezba2604
            </a>
            <a className="header__nav__item" href="/vjezba2804">
              Vjezba2804
            </a>
            <a className="header__nav__item" href="/vjezba0305">
              Vjezba0305
            </a>
            <a className="header__nav__item" href="/breweries">
              Breweries
            </a>
            <a className="header__nav__item" href="/pokemons">
              Pokemons
            </a>
            <a className="header__nav__item" href="/europe">
              Europe
            </a>
            <a className="header__nav__item" href="/africa">
              Africa
            </a>
            <a className="header__nav__item" href="/vjezba1505">
              Vjezba1505
            </a>
            <a className="header__nav__item" href="/todo">
              Todo
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
