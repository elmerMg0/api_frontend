import React from "react";
import ProductTableCard from "./ProductTableCard.jsx";

const ProductTable = ({
  products,
  pageInfo,
  getProducts,
  setProductToEdit,
  setShow,
  deleteProduct,
  getVarieties,
}) => {
  return (
    <div className="container-products">
      {products && products.length > 0 ? (
        products.map((prod) => (
          <ProductTableCard
            key={prod.id}
            product={prod}
            setProductToEdit={setProductToEdit}
            setShow={setShow}
            getVarieties={getVarieties}
          />
        ))
      ) : (
        <h3>No existem productos aun</h3>
      )}
    </div>
  );
};

export default ProductTable;
