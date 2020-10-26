import React, {Component, UseState} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Button } from 'reactstrap';




function ButtonCart(){
  return <NavItem >
    <NavLink className="" href={`/`} active>
    <Button className="d-flex" style={{'margin': 'auto'}}color="secondary">Seguir Comprando</Button>
   </NavLink>
  </NavItem>
}

export default ButtonCart;
