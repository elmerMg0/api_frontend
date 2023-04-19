import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const ModalCollectMoney = ({
  showModal,
  totalPrice,
  setShowModal,
  customers,
  createSale,
  setPayType,
}) => {
  const [change, setChange] = useState(0);
  const [paid, setPaid] = useState('');
  const handleChangeMoney = (e) => {
    let value = e.target.value;
    setPaid(value);
    if (value > totalPrice) {
      setChange(value - totalPrice);
    } else {
      setChange(0);
    }
    //setChange(e.target.value - totalPrice);
  };
  const handleAcceptSale = () => {
    createSale(paid);
    setPaid('');
    setChange(0);
  };

  const handleCancel = () => {
    setShowModal(false);
    setPaid('')
    setChange(0)
  }
  return (
    <Modal show={showModal} centered>
      <Modal.Header>
        <Modal.Title>Cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Metodo de pago</h5>
        <div className="options-pay">
          <label>
            Efectivo
            <input
              name="payType"
              type="radio"
              onChange={() => setPayType("efectivo")}
            />
          </label>
          <label>
            Transferencia
            <input
              name="payType"
              type="radio"
              onChange={() => setPayType("transferencia")}
            />
          </label>
          <label>
            Tarjeta
            <input
              name="payType"
              type="radio"
              onChange={() => setPayType("tarjeta")}
            />
          </label>
        </div>
        <table>
          <thead>
            <tr>
              {/* <th></th>
                        <th></th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div className="pos-acount__footer">
                  <h5>Total (Bs.)</h5>
                  <h5>{totalPrice}</h5>
                </div>
              </td>
            </tr>
            <tr style={{backgroundColor: 'white'}}>
              <td colSpan={2}>
                <div className="pos-acount__footer">
                  <h5>Pago (Bs.)</h5>
                  <input
                    style={{margin: '0'}}
                    className="pos-acount__change"
                    value={paid}
                    type="number"
                    placeholder="0"
                    onChange={handleChangeMoney}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className="pos-acount__footer">
                  <h5>Vuelto: (Bs.)</h5>
                  <h5>{change}</h5>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
  
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-main-red" onClick={handleCancel}>
          Cancelar
        </button>
        <button className="btn-main" onClick={handleAcceptSale}>
          Aceptar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCollectMoney;
