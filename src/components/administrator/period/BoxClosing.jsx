import React from 'react'
import { Form, FormGroup} from 'react-bootstrap';
import { useSelector } from 'react-redux';
const BoxClosing = ( {closeBox, infoCloseBox} ) => {

  //const username = useSelector = useSelector(store => store.user.username);

  const handleCloseBox = () => {

  }

  return (
    <div className="box-closing">
      <h5>Apertura de Caja</h5>
      <div className="box-opening__form">
        <FormGroup>
          <label htmlFor="">Usuario</label>
          <Form.Control 
           //value={username}
           readOnly 
           />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Monto Inicial</label>
          <Form.Control
            //value={infoCloseBox.totalSaleCash}
            placeholder="Bs 100"
            //onChange={(e) => setInitialAmount(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="">Total Efectivo</label>
          <Form.Control 
          //value={infoCloseBox.totalSaleCard} readOnly 
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="">Total Transferencia</label>
          <Form.Control
            type="text"
            readOnly
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="">Total Tarjeta</label>
          <Form.Control
            type="text"
            readOnly
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="">Total Global</label>
          <Form.Control
            type="text"
            readOnly
          />
        </FormGroup>

        <div>
            <button className="btn-main-green">Regresar</button>{" "} 
            <button className="btn-main" onClick={handleCloseBox}>Guardar</button> 
        </div>
      </div>
    </div>
  )
}

export default BoxClosing