import React from 'react'

const PosProducts = ( {products} ) => {
  return (
    <div className='pos-products'>
        <h5>Productos</h5>
        {
          products && products.length > 0 && 
          products.map ( (prod) => {
            return (
              <div className='pos-product'>
                <h5>{prod.nombre}</h5>
                <img src={"http://localhost:8080/upload/" + prod.url_image} alt="foto producto" />
              </div>
            )
          })
        }
    </div>
  )
}

export default PosProducts