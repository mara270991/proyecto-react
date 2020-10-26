import React, {useEffect, useState, useContext} from 'react';
import { getFirestore } from '../../firebase';
import Loader from '../../components/loader/Loader';

import {NavLink} from 'react-router-dom';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import { CartContext } from '../../components/Context/CartContext.js';




import './categoria.css';


const Listado = (props) => {
      const [items, setItems] = useState([]);
      const [loading, setLoading] = useState(false);
      const [cart] = React.useContext(CartContext);



      useEffect(() => {
      setLoading(true);
      const db = getFirestore();
      const itemCollection = db.collection("categorias")
      itemCollection.get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log('No data!');
        }
        setItems(querySnapshot.docs.map(doc => {
          return ({ id: doc.id, ...doc.data() });
        }));
      })
      .catch((error) => {
        console.log("There was an error trying to get items: ", error);
      })
      .finally(() => {
        setLoading(false);
      })
    }, []);

useEffect(() =>{
  console.log(items);
}, [items])



if (!loading) {
  return (
      <div>
      <p className="tituloPrincipalListado mt-3">NUESTROS PRODUCTOS</p>
      <CardGroup className="mt-3"style={{'margin': '30px'}}>
      {items.map((item_data) => {
          return (
                 <Card className="imgCard" style={{'margin': '30px'}} key={item_data.id}>
                 <CardTitle className='tituloPrincipalCategorias mt-3 '>{item_data.nombre}</CardTitle>
                 <hr />
                   <CardImg top width="100%" src={item_data.img} alt="Card image cap" />
                   <CardBody>
                      <NavLink to={`/categorias/${item_data.id}`} style={{'color': 'white'}}>
                     <Button  className='mt-3 btn btn-block'>Ir</Button>
                     </NavLink>
                   </CardBody>
                 </Card>)
      })}
      </CardGroup>
      </div>
  );
}
if (loading) {
  return (
    <div className="Home">
      <Loader />
    </div>
  );
}
}





export default Listado;
