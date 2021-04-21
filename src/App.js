import React, { Fragment, useState } from "react";
import Navbar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./components/Home/Home";
import Categorias from "./components/Categorias/Categorias";
import Login from "./components/Login/Login";
import Contacto from "./components/Contacto/Contacto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categoria" component={Categorias} />
          <Route path="/lomasvendido" component={ItemListContainer} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/login" component={Login} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
