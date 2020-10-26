import React, { useState, useContext } from 'react';
import ButtonCart from  '../../components/ButtonCart/ButtonCart.js';
import { Formik } from "formik"; // Importamos el component <Formik />
import { CartContext } from '../../components/Context/CartContext.js';
import {getFirestore} from '../../firebase';
import * as firebase from 'firebase/app';
import "./formulario.css"
import 'firebase/firestore';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardHeader,
  FormFeedback,
} from "reactstrap";

function Orden(props) {
  const [cart, setCart] = React.useContext(CartContext);
  const [inputs, setInputs] = useState({});
  const [orderId, setOrderID] = useState()
  const [total, setTotal] = useState({});

  const price = cart.map((item) => item.total);
  const sum = price.reduce((a, b) => a + b,0);


      return (
  <Container className="p-5">
    <Card>
      <CardHeader></CardHeader>
      <CardBody>
        <Formik
          initialValues={{
            name: "",
            email: "",
            conEmail: "",
            telefono: "",
          }}
          validate={(values) => {
            const errors = {};

            // We need a name
            if (!values.name) errors.name = "No puede estar vacío";

            // We need a valid e-mail
            if (!values.email) errors.email = "No puede estar vacío";
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
              errors.email = "No es un email valido";


              // We need a valid e-mail
              if (!values.conEmail) errors.conEmail = "No puede estar vacío";
              else
              if (values.email !== values.conEmail)
                errors.conEmail = "No son iguales";
              // We need a valid e-mail
              if (!values.telefono) errors.telefono = "No puede estar vacío";



            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {

                const db = getFirestore();
                const orders = db.collection("orders");

                console.log(cart);
                orders.add(
                    {
                    buyer: values,
                    items: cart,
                    data: firebase.firestore.Timestamp.fromDate(new Date()),
                    total: cart.reduce((a,c) => (a+c.product.precio*c.count), 0),
                  }
                  ).then(({id})=>{
                    setOrderID(id)//sucess
                    setSubmitting(false);
                    setCart([]) //vacío el carrito después de ejectura la compra

                  }).catch((error) =>{
                    console.log('Error add orders: ', error);
                 }).finally(() =>{
                    console.log(orderId);
                  });

            }, 250);
          }}
        >
          {(props) => {
            const {
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* y otras más */
            } = props;
            return (
              <Form onSubmit={handleSubmit}>
              <p className="tituloOrden mt-3"> ¡Último paso! </p>
                <FormGroup>
                  <Label for="name">Nombre</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    invalid={errors.name && touched.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="nombre@dominio.com"
                    invalid={errors.email && touched.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="conEmail"
                    placeholder="nombre@dominio.com"
                    invalid={errors.conEmail && touched.conEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.conEmail}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="telefono">Telefono</Label>
                  <Input
                    type="number"
                    name="telefono"
                    placeholder="1565656565"
                    invalid={errors.telefono && touched.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.telefono}
                  />
                  <FormFeedback>{errors.telefono}</FormFeedback>
                </FormGroup>

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? `Cargando datos` : `Enviar`}
                  </Button>

                  {orderId ? <div>
                  <h1 className="gracias mt-4"> ¡Gracias por realizar la compra! </h1>
                  <p className="orden" >Orden: {orderId}</p>
                  </div> : ''}
              </Form>
            );
          }}
        </Formik>
      </CardBody>
    </Card>
  </Container>
);
}
export default Orden;
