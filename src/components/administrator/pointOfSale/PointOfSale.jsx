import React, { useEffect, useState } from "react";
import "../../../styles/pointOfSale.css";
import PosCategories from "./PosCategories";
import PosProducts from "./PosProducts";
import PosAcount from "./PosAcount";
import PosPay from "./PosPay";
import { APISERVICE } from "../../../services/api.services";
import { useSelector, useDispatch} from 'react-redux'
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

  const addProductOrder = ( product ) => {
    if(orderDetail){
      let exists = orderDetail.some( prod => prod.id === product.id);
      if(exists){
        //incrementar la cantidad
       /*    orderDetail.map( prod => {
          if(prod.id === product.id){
            product.cantidad += 1;
          }
        })
        dispatch(updateCarrito([...orderDetail])); */
      // setOrderDetail([...orderDetail]);
    }else{
      console.log('existe')
        product.cantidad = 1;
        //dispatch(updateCarrito(product))
      //  setOrderDetail([...orderDetail, product]);
      }
  }
    //console.log(orderDetail);
  }

  return (
    <div className="point-of-sale">
      <div className="pos-content">
        <PosAcount orderDetail={orderDetail}/>
        <PosCategories categories={categories} getProducts={getProducts} />
        <PosProducts products={products} addProductOrder={addProductOrder} />
      </div>
      <PosPay/>
    </div>
  );
};

export default PointOfSale;
