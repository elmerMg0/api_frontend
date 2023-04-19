import React, { useEffect, useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const initialState = {
  initialAmount: "",
  totalCash: "",
  totalTransfer: "",
  totalCard: "",
  totalGlobal: "",
  total: "",
};

const BoxClosing = ({ closeBox, infoBoxClose }) => {
  const { username } = useSelector((store) => store.user);
  const [infoPeriod, setinfoPeriod] = useState(initialState);

  useEffect(() => {
    if (infoBoxClose !== undefined && Object.keys(infoBoxClose).length > 0) {
      const {
        period,
        totalSaleCash,
        totalSaleTransfer,
        totalSaleCard,
        totalSale,
      } = infoBoxClose;
      setinfoPeriod({
        initialAmount: period.caja_inicial,
        totalCash: totalSaleCash,
        totalTransfer: totalSaleTransfer,
        totalCard: totalSaleCard,
        totalGlobal: totalSale,
      });
      console.log(period.caja_inicial);
    }
  }, [infoBoxClose]);

  const handleOnChange = (e) => {
    setinfoPeriod({ ...infoPeriod, [e.target.name]: e.target.value });
  };

  const handleCloseBox = () => {
    closeBox( infoPeriod.total );
    setinfoPeriod(initialState)
  };

  return (
    <div className="box-closing">
      <h5>Cierre de Caja</h5>
      <div className="box-opening__form">
        <FormGroup>
          <label htmlFor="">Usuario</label>
          <Form.Control type="text" value={username} readOnly />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Monto Inicial</label>
          <Form.Control
            type="number"
            value={infoPeriod.initialAmount}
            placeholder="Bs.- 0"
            readOnly
            //onChange={(e) => setInitialAmount(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="">Total Efectivo</label>
          <Form.Control
            type="number"
            placeholder="Bs.- 0"
            value={infoPeriod.totalCash}
            readOnly
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="">Total Transferencia</label>
          <Form.Control
            type="number"
            placeholder="Bs.- 0"
            value={infoPeriod.totalTransfer}
            readOnly
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="">Total Tarjeta</label>
          <Form.Control
            type="number"
            placeholder="Bs.- 0"
            value={infoPeriod.totalCard}
            readOnly
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="">Total Global</label>
          <Form.Control
            type="number"
            placeholder="Bs.- 0"
            value={infoPeriod.totalGlobal + infoPeriod.initialAmount}
            readOnly
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="">Total</label>
          <Form.Control
            type="number"
            placeholder="Bs.- 0"
            value={infoPeriod.total}
            name="total"
            onChange={handleOnChange}
          />
        </FormGroup>
      </div>

      <div>
        <button className="btn-main-green">Regresar</button>{" "}
        <button className="btn-main" onClick={handleCloseBox}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default BoxClosing;
