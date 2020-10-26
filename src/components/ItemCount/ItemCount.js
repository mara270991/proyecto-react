import React, {useState, useEffect} from "react"; //importo useeffect también
import Boton from './Botones.js';
import './formulario.css';



function ItemCount (props){
const [contador, setContador] = useState(0);

useEffect(()=>{
  console.log(contador)
})

return (
  <div className="d-flex justify-content-center estilodiv" onClick={props.func(contador)}>
  <Boton  onClick={()=> setContador(contador-1)}  contenido={'-'}/>
  <input type="number" className="form-control inputcontador" id='contador' value={contador} style={{'width': '45%'}}  />
  <Boton onClick={()=> setContador(contador+1)}  contenido={'+'}/>
</div>
);
}
export default ItemCount;
