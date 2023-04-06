import React, { useEffect, useState } from "react";
import "../../../styles/pointOfSale.css";
import PosCategories from "./PosCategories";
import PosProducts from "./PosProducts";
import PosAcount from "./PosAcount";
import { APISERVICE } from "../../../services/api.services";

const PointOfSale = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async (pageNumber = 1) => {
    let url = "categoria/?";
    let params = `page=${pageNumber}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
    }
    setCategories(response.pageInfo.categories);
  };

  const getProducts = async (idCategory) => {
    let url = "categoria/get-products-by-category/?";
    let params = `idCategory=${idCategory}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
    }
    setProducts(response.products);
  };

  return (
    <div className="point-of-sale">
      <div className="pos-content">
        <PosAcount />
        <PosCategories categories={categories} getProducts={getProducts} />
        <PosProducts products={products} />
      </div>
      <div className="pos-pay">
        <div className="pos-pay__coins">
          <button className="btn-main">Bs. 20</button>
          <button className="btn-main">Bs. 20</button>
          <button className="btn-main">Bs. 20</button>
          <button className="btn-main">Bs. 20</button>
          <button className="btn-main">Bs. 20</button>
          <button className="btn-main">Bs. 20</button>
          <button className="btn-main">Bs. 20</button>
          <button className="btn-main">Bs. 20</button>
        </div>
        <div className="pos-pay__btns">
          <button className="btn-main-green">Cobrar</button>
          <button className="btn-main-red">Salir</button>
        </div>
      </div>
    </div>
  );
};

export default PointOfSale;
