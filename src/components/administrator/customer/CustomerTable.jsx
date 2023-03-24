import React from "react";
import { Table } from "react-bootstrap";
import Paginator from "../../global/paginador/Paginator";
import UserTableRow from "./UserTableRow";
const UserTable = ({ customers, pageInfo, getCustomers, setCustomerToEdit, setShow}) => {
  return (
    <Table>
      <thead className="head-table">
        <tr>
          <th>Nombre</th>
          <th>Celular</th>
          <th>Direccion</th>
          <th>Descripcion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {customers && customers.length > 0 ? (
          customers.map((cus) => {
            return <UserTableRow key={cus.id} customer={cus} setCustomerToEdit={setCustomerToEdit} setShow={setShow}/>;
          })
        ) : (
          <tr>
            <td colSpan={5}>No existen usuarios aun!</td>
          </tr>
        )}
        <tr>
          <td colSpan={5}>
            <Paginator pageInfo={pageInfo} getCustomers={getCustomers}/>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UserTable;
