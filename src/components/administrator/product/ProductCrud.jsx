import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import { APISERVICE } from "../../../services/api.services";
import ProductModal from "./ProductModal";
import ModalConfirmProduct from "../../administrator/category/ModalConfirmCategory";
import { Toaster, toast } from "react-hot-toast";
import productCrud from "../../../styles/productCrud.css";
import SearchInput from "../../global/search/SearchInput";

const CategoryCrud = () => {
  const [products, setProducts] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [show, setShow] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [productToEdit, setProductToEdit] = useState({});
  const [productToDelete, setProductToDelete] = useState({});
  const [productsAll, setProductsAll] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [inputSearchProduct, setInputSearchProduct] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts();
    getProductsAll();
    getCategories();
  }, []);

  const getProducts = async (pageNumber = 1) => {
    let url = "producto/?";
    let params = `page=${pageNumber}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
    }
    setPageInfo(response.pageInfo);
    setProducts(response.pageInfo.products);
  };

  const getProductsAll = async () => {
    let url = "producto/products";
    const response = await APISERVICE.get(url);
    if (response.status === 200) {
      setProductsAll(response.products);
    }
  };

  const getCategories = async () => {
    let url = "categoria/categories?";
    const response = await APISERVICE.get(url);
    if (response.status === 200) {
      setCategories(response.categories);
    }
  };

  const createNewProduct = async (product, image) => {
    //envio de info en body
    let url = "producto/create";
    const formData = new FormData();
    let data = {
      nombre: product.nombre,
      descripcion: product.descripcion,
    };
    formData.append("data", JSON.stringify(data));
    if (image) formData.append("file", product.url_image);

    const response = await APISERVICE.postWithImage(formData, url);
    if (response.status === 201) {
      messageToast("producto agregado exitosamente!");
    }
    //envio de imagen producto
    getProducts();
  };

  const messageToast = (message) => {
    toast.success(message);
  };

  const updateProduct = async (product, image) => {
    let $url = `producto/update?`;
    let $params = `idProduct=${product.id}`;

    const fd = new FormData();

    let body = {
      nombre: product.nombre,
      descripcion: product.descripcion,
    };
    fd.append("data", JSON.stringify(body));
    if (image) fd.append("file", product.url_image);
    const response = await APISERVICE.postWithImage(fd, $url, $params);
    if (response.status === 200) {
      messageToast("producto Actualizado con exito!");
    }
    getProducts();
  };

  const deleteProduct = async (id) => {
    setShowModalConfirm(true);
    setProductToDelete(id);
  };

  const deleteProductToServer = async () => {
    let url = "producto/delete?";
    let params = `idProduct=${productToDelete}`;
    const response = await APISERVICE.delete(url, params);
    if (response.status === 200) {
      getProducts();
      messageToast("producto eliminado con exito!");
    }
    setShowModalConfirm(false);
  };

  const filterproducts = (product) => {
    if (product.length > 0) {
      setInputSearchProduct(product);

      setProductsFilter(
        productsAll.filter((cus) =>
          cus.nombre.toLowerCase().includes(product.toLowerCase())
        )
      );
    } else {
      setInputSearchProduct("");
      setProductsFilter([]);
    }
  };

  return (
    <div className="product">
      <h3>productos</h3>
      <SearchInput
        setShow={setShow}
        filterSomething={filterproducts}
        placeHolder="pastas.."
      />
      {productsFilter.length > 0 || inputSearchProduct.length > 0 ? (
        <ProductTable
          products={productsFilter}
          pageInfo={pageInfo}
          getProducts={getProducts}
          setProductToEdit={setProductToEdit}
          setShow={setShow}
          deleteProduct={deleteProduct}
        />
      ) : (
        <>
          <ProductTable
            products={products}
            pageInfo={pageInfo}
            getProducts={getProducts}
            setProductToEdit={setProductToEdit}
            setShow={setShow}
            deleteProduct={deleteProduct}
          />
        </>
      )}
      <ProductModal
        show={show}
        setShow={setShow}
        create={createNewProduct}
        productToEdit={productToEdit}
        setProductToEdit={setProductToEdit}
        updateCategory={updateProduct}
        categories={categories}
      />
      {/*  <ModalConfirmCategory
        show={showModalConfirm}
        onHide={setShowModalConfirm}
        deleteProduct={deleteProductToServer}
      /> */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default CategoryCrud;
