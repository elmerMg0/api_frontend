import React, {useState}from 'react'

const PosPay = ( { createSale, totalPrice, totalPaid,setTotalPaid } ) => {

  const [accumulateAcount, setAccumulateAcount] = useState(0)

  const handleAccumalateAcount = ( value ) => {
    //setTotalPaid(totalPaid + value);
    createSale( value ); 
   /*  if( totalPaid >= totalPrice){
      console.log('pagado!')
    } */
  }


  return (
    <div className="pos-pay">
        <div className="pos-pay__coins">
          <button className="btn-main" onClick={() => handleAccumalateAcount(1)}>Bs/. 1</button>
          <button className="btn-main" onClick={() => handleAccumalateAcount(5)}>Bs/. 5</button>
          <button className="btn-main" onClick={() => handleAccumalateAcount(10)}>Bs/. 10</button>
          <button className="btn-main" onClick={() => handleAccumalateAcount(20)}>Bs/. 20</button>
          <button className="btn-main" onClick={() => handleAccumalateAcount(50)}>Bs/. 50</button>
          <button className="btn-main" onClick={() => handleAccumalateAcount(100)}>Bs/. 100</button>
          <button className="btn-main" onClick={() => handleAccumalateAcount(200)}>Bs/. 200</button>
          <button className="btn-main" onClick={() => handleAccumalateAcount(totalPrice)}>Exacto</button>
        </div>
        <div className="pos-pay__btns">
          <button className="btn-main-green">Cobrar</button>
          <button className="btn-main-red">Salir</button>
        </div>
      </div>
  )
}

export default PosPay