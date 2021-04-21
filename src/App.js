import React, { Fragment, useState } from "react";
import Navbar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <ItemListContainer />
    </Fragment>
  );
}

export default App;
