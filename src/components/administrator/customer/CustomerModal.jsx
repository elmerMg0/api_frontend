import React, { useState, useEffect} from "react";
import { Modal} from "react-bootstrap";
import { Form, InputGroup, ModalTitle, Button } from "react-bootstrap";

const initialState = {
  nombre:'',
  celular: '',
  direccion: '',
  descripcion_domicilio:''
}

const UserModal = ({ show, setShow, create, customerToEdit}) => {

  const [customer, setCustomer] = useState(initialState)


  useEffect ( ( ) => {
    customerToEdit ? setCustomer(customerToEdit) : setCustomer(initialState)
    console.log(customer)
  },[show])

  const handleConfirm = () => {
    setShow(false);
    create(customer);
  }
  const handleOnChange = (e) => {
    setCustomer({
      ...customer, 
      [e.target.name]:e.target.value
    })
  }

  return (
    <Modal show={show} size="md" centered>
      <Modal.Header>
        <Modal.Title>
          <h3>Crear Nuevo Cliente</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <InputGroup className="mb-3">
          <InputGroup.Text>Nombre</InputGroup.Text>
          <Form.Control 
            placeholder="Nombre"
            type="text"
            onChange={handleOnChange}
            name='nombre'
            value={customer.nombre}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Celular</InputGroup.Text>
          <Form.Control 
            placeholder="65322415"
            type="number"
            onChange={handleOnChange}
            name='celular'
            value={customer.celular}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Direccion</InputGroup.Text>
          <Form.Control 
            placeholder="Av. Petrolera km 5.4"
            type="text"
            onChange={handleOnChange}
            name='direccion'
            value={customer.direccion}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Descripcion domicilio</InputGroup.Text>
          <Form.Control 
            placeholder="Casa roja, puerta verde"
            type="text"
            onChange={handleOnChange}
            name='descripcion_domicilio'
            value={customer.descripcion_domicilio}
          />
        </InputGroup>

      </Modal.Body>
      <Modal.Footer >
        <button variant='danger' onClick={()=> setShow(false)}>Cancelar</button>
        <button onClick={handleConfirm} className="btn-main">Confirmar</button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
