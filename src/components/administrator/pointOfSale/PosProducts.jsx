import React from "react";

const PosProducts = ({ products, addProductOrder }) => {

  const handleAddProduct = ( prod ) => {
    addProductOrder(prod)
  }

  return (
    <div className="pos-products">
      <h5>Productos</h5>
      <div className="pos-products-flex">
        {products &&
          products.length > 0 &&
          products.map((prod) => {
            return (
              <div key={prod.id} className="pos-product" onClick={() => handleAddProduct(prod)}>
                <h5>{prod.nombre}</h5>
                <img
                  src={"http://localhost:8080/upload/" + prod.url_image}
                  alt="foto producto"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PosProducts;
