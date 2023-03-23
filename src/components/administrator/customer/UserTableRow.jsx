import React from "react";
import { Button } from "react-bootstrap";
const UserTableRow = ({ customer }) => {
  return (
    <tr>
      <td>{customer.nombre}</td>
      <td>{customer.celular}</td>
      <td>{customer.direccion}</td>
      <td>{customer.descripcion_domicilio}</td>
      <th>
        <Button>Editar</Button>{" "}
        <Button variant="danger" className="color-main">
          Eliminar
        </Button>
      </th>
    </tr>
  );
};

export default UserTableRow;
