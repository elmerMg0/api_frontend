import React, { useEffect, useState } from "react";
import calendar from "../../../assets/svg/calendar.svg";
import clock from "../../../assets/svg/clock.svg";
import { Table } from "react-bootstrap";
import OrderDetailRow from "./OrderDetailRow";
import { useSelector } from 'react-redux'
const PosAcount = ( {totalPrice} ) => {
  const [dateCurrently, setDateCurrently] = useState("");
  const [hourCurrently, setHourCurrently] = useState("");
  const orderDetail = useSelector( state => state.carrito.orderDetail);
/*   const [totalPrice, setTotalPrice] = useState(0); */
  const updateDate = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let hourcurrenty = `${hour}:${minute}:${second}`;

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let x = `${day}/${month}/${year}`;
    setDateCurrently(x);
    setHourCurrently(hourcurrenty);
  };

/*   useEffect( () => {
    settotalPrice();
  },[orderDetail])

  const settotalPrice = () => {
      setTotalPrice( orderDetail.reduce( (ac, prod) => ac + prod.cantidad * prod.precio_venta,0 ))
  } */
  setInterval(() => {
    updateDate();
  }, 1000);

  return (
    <div className="pos-acount">
      <div className="pos-acount-row">
        <div colSpan={4} className="pos-acount__header">
          <img src={calendar} alt="fecha" />
          {dateCurrently}
          <img src={clock} alt="hora" />
          {hourCurrently}
        </div>
      </div>
      <table className="pos-acount__table">
        <thead>
          <tr>
            <th>Eliminar</th>
            <th>Cantidad</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orderDetail && orderDetail.length > 0 ? (
            orderDetail.map((prod) => {
              return (
                <OrderDetailRow
                  key={`${prod.id + prod.nombre}`}
                  product={prod}
                />
              );
            })
          ) : (
            <tr>
              <td colSpan={5}>No existen pedidos aun :(</td>
            </tr>
          )}
          <tr>
              <td colSpan={5}>
                <div className='pos-acount__footer'>
                  <h5>Total (Bs.)</h5>
                  <h5>{totalPrice}</h5>
                </div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PosAcount;
