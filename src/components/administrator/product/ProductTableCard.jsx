import React from "react";

const ProductTableCard = ({
  product,
  setProductToEdit,
  setShow,
  getVarieties,
}) => {
  const handleShowMore = () => {
    setProductToEdit(product);
    getVarieties(product.id);
    //setShow(true);
  };

  return (
    <div className="product-card">
      <img
        src={`http://localhost:8080/upload/${product.url_image}`}
        alt="product"
      />
      <div className="product-card__text">
        <h5>{product.nombre}</h5>
        <h5>{product.descripcion}</h5>
        <h5>Bs.-{product.precio_venta}</h5>
        <button className="btn-main" onClick={() => handleShowMore()}>
          Editar
        </button>
      </div>
    </div>
  );
};

export default ProductTableCard;
