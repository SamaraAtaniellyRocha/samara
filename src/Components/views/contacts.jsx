import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contacts extends Component {
  render() {
    return (
      <div className="contact">
        <Link to="/page=5" className="form-btn">
          Formulário de contato
        </Link>
      </div>
    );
  }
}
