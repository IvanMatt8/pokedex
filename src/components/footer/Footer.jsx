import React from "react";
import "./Footer.css";
import Instagram from "../../assets/insta.png";
import Git from "../../assets/git.png";
import Linkedin from "../../assets/linkedin.png";
import Gmail from "../../assets/gmail.png";

function Footer() {
  return (
    <div className="footerContent">
      <div>
        <h3>CONTATOS e REDES SOCIAIS</h3>
      </div>
      <ul>
        <li>
          <a href="https://www.instagram.com/ivanmatt8/">
            <img src={Instagram} alt="logo Instagram" />
            @ivanmatt8
          </a>
        </li>
        <li>
          <a href="https://github.com/IvanMatt8">
            <img src={Git} alt="logo git" /> ivanmatt8
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ivan-matheus-56530422b/">
            <img src={Linkedin} alt="imagem Linkedin" /> Ivan Matheus
          </a>
        </li>
        <li>
          <a href="ivanmatt1995@gmail.com">
            <img src={Gmail} alt="imagem gmail" />
            ivanmatt1995@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
