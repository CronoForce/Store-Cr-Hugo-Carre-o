import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{

    render(){
        return(
            <nav className = "NavbarItems">
                <h1 className = "navbar-logo">Store CR <i className="fab fa-shopware"></i></h1>
                <div className ="menu-icon">
                </div>
                <ul className='nav-menu'>
                    <li><a className="nav-links" href="#">Inicio</a></li>
                    <li><a className="nav-links" href="#">Categorias</a></li>
                    <li><a className="nav-links" href="#">Lo Más Vendido</a></li>
                    <li><a className="nav-links" href="#">Contacto</a></li>
                    <li><a className="nav-links" href="#">Login</a></li>
                </ul>
            </nav>
        )
    }

}

export default Navbar