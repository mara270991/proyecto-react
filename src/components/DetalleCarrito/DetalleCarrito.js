

import React, { UseContext } from 'react';
import { CartContext } from '../../components/Context/CartContext.js';
import ButtonCart from  '../../components/ButtonCart/ButtonCart.js';
import './detalleCarrito.css';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, NavItem
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';// ojo Agrega esta linea para que funcione react-router-dom
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function Total(props){
  return <h2 className="codigoList"> ${props.total} </h2>
}

function Subtotal(props){
  return <h2 className="totalPrice"> Total: ${props.total} </h2>

}

const DetalleCarrito = () => {
  const [cart] = React.useContext(CartContext);
  const productsInCart = cart.length > 0;
  console.log(cart);
  return (
    <div >

      {cart.map((item_data) => {
          return (
                 <Card className="imgCard" style={{'margin': '30px'}} key={item_data.id}>
                   <CardBody>
                     <CardTitle className='tituloList'>{item_data.count} x {item_data.product.nombre}</CardTitle>
                     <hr/>
                     <CardSubtitle  className='subtotalPrice'  > Precio por producto: ${item_data.product.precio}</CardSubtitle>
                     <Total total={item_data.subtotal} />
                   </CardBody>
                 </Card>)
      })}
      <NavItem>
      <Subtotal total={cart.reduce((a,c) => (a+c.product.precio*c.count), 0)} />
      <NavLink tag={RRNavLink} exact to="/orden" className="btn btn-success d-flex justify-content-center" style={{'width': '50%','margin': 'auto'}}>
         Finalizar
        </NavLink>
      </NavItem>
    </div>
  )
}

export default DetalleCarrito;
