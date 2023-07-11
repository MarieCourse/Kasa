import React from "react";
import "./Footer.sass";
import footerDesktop from "../../assets/footer desktop.png";
import footerMobile from "../../assets/footer mobile.png";

function Footer() {
  return (
    <div className="footer__banner">
      <img src={footerDesktop} alt="footer" />
    </div>
  );
}

export default Footer;
