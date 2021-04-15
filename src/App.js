import React, {Fragment} from "react";
import Navbar from "./components/NavBar/NavBar";
import "./App.css";
import ItmeListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <ItmeListContainer />
    </Fragment>
  );
}

export default App;
