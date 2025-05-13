import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <p>@Todos os direitos reservados - {new Date().getFullYear()}</p> */}
      <p>Desenvolvido por: Cristiano Gonçalves</p>
      <ul className="social_list">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaYoutube />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
