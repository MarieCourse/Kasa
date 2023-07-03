import { Link } from "react-router-dom";
import "./Header.sass";
import Logo from "../../assets/logo kasa.svg";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo Kasa" className="header__logo" />
      <nav className="header__nav">
        <Link to="/" className="header__nav__link">
          Accueil
        </Link>
        <Link to="/About" className="header__nav__link">
          A propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
