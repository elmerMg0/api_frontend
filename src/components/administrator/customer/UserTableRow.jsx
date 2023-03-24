import React from "react";
import { Button } from "react-bootstrap";
const UserTableRow = ({ customer, setCustomerToEdit, setShow }) => {

  const handleEditCustomer = ()  => {
    setCustomerToEdit(customer);
    setShow(true);
  }

  return (
    <tr>
      <td>{customer.nombre}</td>
      <td>{customer.celular}</td>
      <td>{customer.direccion}</td>
      <td>{customer.descripcion_domicilio}</td>
      <th>
        <button className="btn-main" onClick={() => handleEditCustomer() }>Editar</button>{" "}
        <Button variant="danger" className="color-main">
          Eliminar
        </Button>
      </th>
    </tr>
  );
};

export default UserTableRow;
