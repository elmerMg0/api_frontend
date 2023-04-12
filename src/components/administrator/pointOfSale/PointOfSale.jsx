import React, { useEffect, useState } from "react";
import "../../../styles/pointOfSale.css";
import PosCategories from "./PosCategories";
import PosProducts from "./PosProducts";
import PosAcount from "./PosAcount";
import PosPay from "./PosPay";
import { APISERVICE } from "../../../services/api.services";
import { useSelector, useDispatch } from "react-redux";
import { updateCarrito } from "../../../redux/states/carrito";

const PointOfSale = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  //const [orderDetail, setOrderDetail] = useState([])
  const dispatch = useDispatch();
  const orderDetail = useSelector((store) => store.carrito.orderDetail);
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

  const addProductOrder = (product) => {
   /*  if (orderDetail) {
      let exists = orderDetail.some((prod) => prod.id === product.id);
      if (exists) {
        //incrementar la cantidad
        const orderDetail2 = [...orderDetail];
        const test = orderDetail2.map((prod) => {
          if (prod.id === product.id) {
            prod.precio_venta += 1;
          }
          return prod;
        });
        console.log(orderDetail2)
        //dispatch(updateCarrito([...orderDetail]));
        // setOrderDetail([...orderDetail]);
      } else {  
        console.log("no existe");
        let newProduct = {...product, cantidad: 1}
        Object.defineProperty(newProduct, 'cantidad', {
          writable: true
        });
        product.cantidad = 1;
        dispatch(updateCarrito( product ));
        //  setOrderDetail([...orderDetail, product]);
      }
    } */
    console.log(orderDetail)
    dispatch( updateCarrito(product));
    //console.log(orderDetail);
  };


  const createStore = async () => {
    let url = ''
    const resposne = await APISERVICE.post( orderDetail, url);
    
  }

  return (
    <div className="point-of-sale">
      <div className="pos-content">
        <PosAcount />
        <PosCategories categories={categories} getProducts={getProducts} />
        <PosProducts products={products} addProductOrder={addProductOrder} />
      </div>
      <PosPay />
    </div>
  );
};

export default PointOfSale;
