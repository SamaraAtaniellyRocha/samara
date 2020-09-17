import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/samara.png";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={Logo} alt={Logo} className="samara-logo" />
        <h2 className="name">Samara Atanielly</h2>
        <p className="description">Descrição de no maximo 3 linhas</p>
        <div className="home-items">
          <a
            href="https://www.instagram.com/p/CE4TiKYjxqG/?igshid=1x6yx6ae6m92b"
            className="item"
          >
            <h2>Instagram</h2>
            <p>Rede social para você acompanhar o meu dia a dia.</p>
          </a>
          <Link to="/page=1" className="item">
            <h2>Artigos</h2>
            <p>Artigos escritos por mim.</p>
          </Link>
          <Link to="/page=2" className="item">
            <h2>Materiais</h2>
            <p>Veja meus materiais de estudo.</p>
          </Link>
        </div>
      </div>
    );
  }
}
