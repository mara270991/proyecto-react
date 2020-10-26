import React from 'react';
import logo from './logo.png';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext.js'
import './App.css';
import Nav from './components/Nav/NavBar.js';
import Listado from './components/Listado/Listado.js';
import Cart from './components/Cart/Cart.js';
import Orden from './components/Orden/Orden.js';
import Categorias from './components/Categorias/Categorias.js';
import Producto from './components/Producto/Producto.js';
import Home from './components/Home/Home.js';
import ListadoSinFiltro from './components/ListadoSinFiltro/ListadoSinFiltro.js';






function App() {
  return (
    <CartProvider>
       <BrowserRouter>
       <Nav />
       <Route exact path="/">
       <Home />
       </Route>
       <Switch>
       <Route exact path="/categorias">
       <Categorias />
       </Route>
       <Route exact path="/categorias/:categoria">
       <Listado />
       </Route>
       <Route exact path="/listado">
       <ListadoSinFiltro />
       </Route>
       <Route  path="/detail/:id" >
       <Producto/>
       </Route>
       <Route  path="/cart">
       <Cart />
       </Route>
       <Route  path="/orden">
       <Orden />
       </Route>
       </Switch>
       </BrowserRouter>
   </CartProvider>


  );
}

export default App;
