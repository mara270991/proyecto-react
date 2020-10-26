import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './nav.css';
import Icon from './../CartIcon/CartonIcon.js';
import Shop from './../CartIcon/Shop.js';
import { Badge } from 'reactstrap';
import { CartContext } from '../../components/Context/CartContext.js';
import { NavLink as RRNavLink } from 'react-router-dom';// ojo Agrega esta linea para que funcione react-router-dom
import { Link } from 'react-router-dom';


const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cart] = React.useContext(CartContext);
  const qtyItems = cart.map((item) => item.count);
  const totalQtyItems = qtyItems.reduce((a, b) => a + b,0);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <div className="row navtop">
        <div className="col-6 d-flex align-items-center pl-3">
          <Icon/>
          <p className="tituloNav">Shop Pet </p>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center pr-5">

          <NavItem>
          <NavLink tag={RRNavLink} exact to="/cart" activeClassName="active" className="itemnav">
              <Shop/>
              <Badge color="secondary">{totalQtyItems}</Badge>
            </NavLink>
          </NavItem>

            </div>
        </div>
      <div className="row navbottom pb-3 pt-3">
        <div className="col-12 d-flex justify-content-center align-items-center">
        <Nav pills >

          <NavItem>
          <NavLink tag={RRNavLink} exact to="/" className="itemnav" style={{'background': 'none'}}>HOME</NavLink>
          </NavItem>

          <NavItem>
          <NavLink tag={RRNavLink} exact to="/categorias" className="itemnav" style={{'background': 'none'}}>CATEGORIAS</NavLink>
          </NavItem>

          <NavItem>
          <NavLink tag={RRNavLink} exact to="/listado" className="itemnav" style={{'background': 'none'}}>PRODUCTOS TOTAL</NavLink>
          </NavItem>

          <NavItem>
          <NavLink tag={RRNavLink} exact to="/cart" className="itemnav" style={{'background': 'none'}}>CARRITO
          <Badge color="secondary ml-3">{totalQtyItems}</Badge>
          </NavLink>
          </NavItem>

          </Nav>
          </div>
      </div>

  </div>


  );
}

export default Example;
