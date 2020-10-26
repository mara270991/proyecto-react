
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';



import './icono.css';



const Example = (props) => {
return (
  <FontAwesomeIcon className="icono" icon={faShoppingCart} size="3x" />


);
}

export default Example;
