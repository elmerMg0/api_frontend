import React from "react";
import { Table } from "react-bootstrap";
import Paginator from "../../global/paginador/Paginator";
import UserTableRow from "./UserTableRow";
const UserTable = ({ customers, pageInfo}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Celular</th>
          <th>Direccion</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
        {customers && customers.length > 0 ? (
          customers.map((cus) => {
            return <UserTableRow key={cus.id} customer={cus} />;
          })
        ) : (
          <tr>
            <td colSpan={4}>Nada</td>
          </tr>
        )}
        <tr>
          <td colSpan={4}>
            <Paginator pageInfo={pageInfo} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UserTable;
