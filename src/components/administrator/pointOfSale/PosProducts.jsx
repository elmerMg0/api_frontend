import React from "react";

const PosProducts = ({ products, addProductOrder }) => {

  const handleAddProduct = ( prod ) => {
    addProductOrder(prod)
  }

  return (
    <div className="pos-products">
      <h5 className='pos-title-contenedor'>Productos</h5>
      <div className="pos-products-flex">
        {products &&
          products.length > 0 &&
          products.map((prod) => {
            return (
              <div key={prod.id} className="pos-product" onClick={() => handleAddProduct(prod)}>
                <img
                  src={"http://localhost:8080/upload/" + prod.url_image}
                  alt="foto producto"
                  />
                  <h5> <span>Bs. </span>{prod.precio_venta}</h5>
                  <p>{prod.nombre}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PosProducts;
