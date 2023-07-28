import { NavLink } from "react-router-dom";
import "./Header.sass";
import Logo from "../../assets/logo kasa.svg";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={Logo} alt="Logo Kasa" className="header__logo" />
      </NavLink>
      <nav className="header__nav">
        <NavLink to="/" className="header__nav__link" activeclassname="active">
          Accueil
        </NavLink>
        <NavLink
          to="/About"
          className="header__nav__link"
          activeclassname="active"
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
