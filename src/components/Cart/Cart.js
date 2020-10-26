
import React, { UseContext } from 'react';
import { CartContext } from '../../components/Context/CartContext.js';
import ButtonCart from  '../../components/ButtonCart/ButtonCart.js';
import DetalleCarrito from  '../../components/DetalleCarrito/DetalleCarrito.js';

import './cart.css';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, NavItem
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';// ojo Agrega esta linea para que funcione react-router-dom
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Cart = () => {
  const [cart] = React.useContext(CartContext);
  const qtyItems = cart.map((item) => item.count);
  const totalQtyItems = qtyItems.reduce((a, b) => a + b,0);
  const productsInCart = cart.length > 0;
  console.log(cart);
  return (
    <div >

    <p className="tituloPrincipal">Carrito</p>
    {!productsInCart && <ButtonCart />}
    {productsInCart  && <DetalleCarrito />}


    </div>
  )
}

export default Cart;
