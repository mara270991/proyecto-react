import React, {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import Loader from '../../components/loader/Loader';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../components/Context/CartContext.js';
import ItemCount from "../../components/ItemCount/ItemCount.js";



import './product.css';


function Producto() {
  const [count, setCount] = useState(0);

  const { id } = useParams();
  const [size, setSize] = useState('');
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [cart, setCart, sumaProductos] = React.useContext(CartContext);


  function giveMeCount(c){
    setCount(c)
  }



  useEffect(() => {
    setLoading(true)
    const db = getFirestore()
    const itemCollection = db.collection('items');
    const item = itemCollection.doc(id);

    item.get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("Item does not exist!");
        return true;
      }
      const dataQuery = doc.data();
      console.log(dataQuery);
      setProduct({ id: doc.id, ...doc.data() });
    })
    .catch((error) => {
      console.log('Error searching item: ', error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [id]);

  useEffect(() => {
    console.log(size)
  }, [size]);




  // Set the Cart Context with the added product
  const addToCart = () => {
    if(count === 0){
        alert('Seleccione una cantidad de ' + product.nombre)
    }else{
      const subtotal = product.precio*count;
      setCart(currentCart => [...currentCart, {product, count, subtotal}]);
    }
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);


  return(
    <>
      {loading && <Loader />}
      {!loading &&
        <div className="Product" style={{"display": "flex", "justifyContent": "center"}}>
        <div className="row mt-4"  style={{'padding': '40px'}}>
        <div className="col-6 divimagen" >
        <img src={product.img} width="70%" className="d-flex" style={{'margin': 'auto'}}/>
        </div>
        <div className="col-6">
        <h4 className="titulo mt-3">{product.nombre}</h4>
        <hr />
        <p className="codigo"> {product.descripcion}</p>
        <p className="precio" >${product.precio}</p>
        <ItemCount func={giveMeCount}/>
        <button className="btn btn-primary boton mt-3" onClick={addToCart}> Agregar {count}</button>
        </div>

        </div>
        </div>
      }
    </>
  );

}

export default Producto;
