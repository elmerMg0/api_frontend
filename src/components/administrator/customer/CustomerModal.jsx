import React from "react";
import { Modal } from "react-boostrap";
import { Form, InputGroup, ModalTitle, Button } from "react-bootstrap";
const UserModal = ({ show }) => {
  return (
    <Modal show={show} size="md" centered>
      <Modal.Header>
        <Modal.Title>
          <h3>Crear Nuevo Cliente</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Text>Nombre</InputGroup.Text>
          <Form.Control 
            placeholder="Nombre"
            type="text"
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button>Cancelar</Button>
        <Button>Confirmar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
