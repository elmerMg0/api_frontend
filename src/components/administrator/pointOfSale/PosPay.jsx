import React from 'react'

const PosPay = () => {
  return (
    <div className="pos-pay">
        <div className="pos-pay__coins">
          <button className="btn-main">Bs/. 1</button>
          <button className="btn-main">Bs/. 5</button>
          <button className="btn-main">Bs/. 10</button>
          <button className="btn-main">Bs/. 20</button>
          <button className="btn-main">Bs/. 50</button>
          <button className="btn-main">Bs/. 100</button>
          <button className="btn-main">Bs/. 200</button>
        </div>
        <div className="pos-pay__btns">
          <button className="btn-main-green">Cobrar</button>
          <button className="btn-main-red">Salir</button>
        </div>
      </div>
  )
}

export default PosPay