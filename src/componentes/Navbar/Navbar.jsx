/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import './Navbar.css';
import "materialize-css/dist/css/materialize.min.css";
import CartWidget from '../CartWidget/CartWidget';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      ItemsMenu: [
        { item: 1, navLinks: "Home", link: "/" },
        { item: 2, navLinks: "Category", link: "/category" },
        { item: 3, navLinks: "Hot Shopping", link: "/hotShopping" },
        { item: 4, navLinks: "Contact", link: "/contact" },
        { item: 5, navLinks: <CartWidget/>, link: "/cartBuy" },
        { item: 6, navLinks: "Sign In", link: "/signIn" },
      ],
    };
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-wrapper navbar-logo">
          <a href="/" className="brand-logo">
          <i className="fab fa-shopify"></i>Store
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.state.ItemsMenu.map((ele) => (
              <li>
                <a href={ele.link} className="nav-links">{ele.navLinks}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
