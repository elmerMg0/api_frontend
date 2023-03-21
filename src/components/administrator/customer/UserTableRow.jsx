import React from 'react'

const UserTableRow = ({customer}) => {
  return (
    <tr>
        <td>{customer.nombre}</td>
        <td>{customer.celular}</td>
        <td>{customer.direccion}</td>
        <td>{customer.descripcion_domicilio}</td>
    </tr>
  )
}

export default UserTableRow