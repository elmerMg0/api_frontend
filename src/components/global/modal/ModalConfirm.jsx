import React from "react";
import { Modal } from "react-bootstrap";
const ModalConfirm = ({ show, onHide, deleteSomething }) => {
  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>
          <h3>Advertencia</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Esta usted seguro de que quiere eliminar este elemento?</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-main-red" onClick={() => onHide(false)}>
          Cancelar
        </button>
        <button className="btn-main" onClick={() => deleteSomething()}>
          Aceptar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirm;
