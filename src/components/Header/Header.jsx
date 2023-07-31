import { NavLink } from 'react-router-dom';
import './Header.sass';
import Logo from '../../assets/logo kasa.svg';

function Header() {
  return (
    <div className="header">
      {/* Logo de Kasa, en utilisant NavLink pour rediriger vers la page d'accueil lorsqu'on clique dessus */}
      <NavLink to="/">
        <img src={Logo} alt="Logo Kasa" className="header__logo" />
      </NavLink>
      {/* Navigation du header avec les liens */}
      <nav className="header__nav">
        {/* Lien vers la page d'accueil, le lien sera actif (avec une classe "active") lorsqu'on est sur cette page */}
        <NavLink to="/" className="header__nav__link" activeclassname="active">
          Accueil
        </NavLink>
        {/* Lien vers la page "A Propos", le lien sera actif lorsqu'on est sur cette page */}
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
