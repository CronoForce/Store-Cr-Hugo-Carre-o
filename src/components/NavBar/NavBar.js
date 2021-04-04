import React, { Component } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import "materialize-css/dist/css/materialize.min.css";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      opMenu: [
        { opItem: 1, op: "Inicio" },
        { opItem: 2, op: "Categorias" },
        { opItem: 3, op: "Lo Más Vendido" },
        { opItem: 4, op: <CartWidget /> },
        { opItem: 5, op: "Contacto" },
        { opItem: 6, op: "Login | Registro" },
      ],
    };
  }

  render() {
    return (
      <nav className="NavbarItems">
        <div className="nav-wrapper navbar-logo">
          <a href="#" className="brand-logo">
            Store CR <i className="fab fa-shopware"></i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.state.opMenu.map((opItem) => (
              <li>
                <a className="nav-links">{opItem.op}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
