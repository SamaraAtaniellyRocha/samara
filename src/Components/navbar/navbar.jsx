import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavbarItems } from "./navbar-items";

export default class Navbar extends Component {
  state = { active: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="menu-instagram">
          <a href="https://www.instagram.com/p/CE4TiKYjxqG/?igshid=1x6yx6ae6m92b">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <h1 className="navbar-logo">Enf. Samara Rocha</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {NavbarItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  onClick={this.handleClick}
                  className={item.cName}
                  to={item.url}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
