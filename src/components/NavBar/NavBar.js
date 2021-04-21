import React, { Component} from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import "materialize-css/dist/css/materialize.min.css"


class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      opMenu: [
        { Item: 1, op: "Inicio", ruta: "/"},
        { Item: 2, op: "Categorias", ruta: "/categoria" },
        { Item: 3, op: "Lo Más Vendido", ruta: "/lomasvendido" },
        { Item: 4, op: <CartWidget /> , ruta: "/carrito" },
        { Item: 5, op: "Contacto", ruta: "/contacto" },
        { Item: 6, op: "Login | Registro", ruta: "/login" },
      ],
    };
  }

  render() {
    return (

        <nav className="NavbarItems">
          <div className="nav-wrapper navbar-logo">
            <a href="/" className="brand-logo">
            Store CR <i className="fab fa-shopware"></i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.state.opMenu.map((Item) => (
                <li>
                  <a href={Item.ruta} className="nav-links">{Item.op}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;
