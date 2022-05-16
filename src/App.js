import React from 'react';
import './App.css';
import './components/NavBar/NavBar'
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Home from './pages/inicio';
import Productos from './pages/productos';
import Servicios from './pages/servicios';
import Contacto from './pages/contacto';
import Salir from './pages/Salir';
import NavBar from "./components/NavBar/NavBar";
import Carrito from "./components/CartWidget";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
      <Router>
          <NavBar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/productos' element={<Productos/>} />
          <Route path='/servicios' element={<Servicios/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/sign-up' element={<Salir/>} />
          <Route path='/carrito' element={<Carrito/>} />
          <Route path='/detail/:id' element={<ItemDetail/>} />
        </Routes>
      </Router>
  );
}

export default App;
