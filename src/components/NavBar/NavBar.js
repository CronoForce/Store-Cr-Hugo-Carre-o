import React, { Component} from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import "materialize-css/dist/css/materialize.min.css"

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      opMenu: [
        { Item: 1, op: "Inicio" },
        { Item: 2, op: "Categorias" },
        { Item: 3, op: "Lo Más Vendido" },
        { Item: 4, op: <CartWidget /> },
        { Item: 5, op: "Contacto" },
        { Item: 6, op: "Login | Registro" },
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
              {this.state.opMenu.map((Item) => (
                <li>
                  <a href="#" className="nav-links">{Item.op}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;
