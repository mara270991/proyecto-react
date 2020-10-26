import React, {Component, UseState} from 'react';


function Boton(props){
  return <button onClick={props.onClick} className='btn btn-secondary botoncontador'>{props.contenido}</button>
}

export default Boton;
