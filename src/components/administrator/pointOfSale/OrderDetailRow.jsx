import React from 'react'
import { Button } from 'react-bootstrap'
import plus from '../../../assets/svg/plus.svg'
import minus from '../../../assets/svg/minus.svg'
const OrderDetailRow = ( { product }) => {
  return (
    <tr>
        <td className='col-2'>{product.cantidad}</td>
        <td>{product.nombre}</td>
        <td>{product.precio_venta}</td>
        <td className='btns-quantity'><button><img src={plus} alt="" /></button> <button><img src={minus} alt="" /></button></td>
    </tr>
  )
}

export default OrderDetailRow