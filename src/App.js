import React from 'react';
import Navbar from "./components/NavBar/NavBar";
import './App.css';
import Saludo from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <Saludo usuario="Hugo"/>
    </div>
  );
}

export default App;
