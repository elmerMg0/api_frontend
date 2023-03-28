import React from "react";

const ProductTableCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={`http://localhost:8080/upload/${product.url_image}`}
        alt="product"
      />
      <h5>{product.nombre}</h5>
      <h5>{product.descripcion}</h5>
      <h5>{product.precio_venta}</h5>
      <button className="btn-main">Ver mas</button>
    </div>
  );
};

export default ProductTableCard;
