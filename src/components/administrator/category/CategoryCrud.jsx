import React, { useEffect, useState } from "react";
import CategoryTable from "./CategoryTable";
import { APISERVICE } from "../../../services/api.services";
import { Button } from "react-bootstrap";
import CategoryModal from "./CategoryModal";
import ModalConfirmCategory from "../../administrator/category/ModalConfirmCategory";
import SearchBarCategory from "./SearchBarCategory";
import { Toaster, toast} from "react-hot-toast";

const CategoryCrud = () => {
  const [categories, setcategories] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [show, setShow] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [categoryToEdit, setcategoryToEdit] = useState({});
  const [categoryToDelete, setcategoryToDelete] = useState({});
  const [categoriesAll, setcategoriesAll] = useState([]);
  const [categoriesFilter, setcategoriesFilter] = useState([]);
  const [inputSearchCustomer, setInputSearchCustomer] = useState("");
  const [imageCategory, setimageCategory] = useState(null);

  useEffect(() => {
    getCategories();
    getCategoriesAll();
  }, []);

  const getCategories = async (pageNumber = 1) => {
    let url = "categoria/?";
    let params = `page=${pageNumber}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
    }
    setPageInfo(response.pageInfo);
    setcategories(response.pageInfo.categories);
  };

  const getCategoriesAll = async () => {
    let url = "categoria/categories";
    const response = await APISERVICE.get(url);
    if (response.status === 200) {
      setcategoriesAll(response.categories);
    }
  };

  const createNewCategory = async (customer) => {
    let url = "categoria/create";
    const response = await APISERVICE.post(customer, url);
    if (response.status === 201) {
      messageToast('Cliente agregado exitosamente!')
    }
    const formData = new FormData();
    formData.append('image',imageCategory)
    const response2 = await APISERVICE.uploadImage();

    
    getCategories();


  };

  const messageToast = ( message ) =>{
    toast.success(message)
  }

  const updateCategory = async (customer) => {
    let $url = `cliente/update?`;
    let $params = `idCustomer=${customer.id}`;
    const response = await APISERVICE.post(customer, $url, $params);
    if (response.status === 200) {
      messageToast('Cliente Actualizado con exito!')
      getCategories();
    }
  };

  const deleteCategory = async (id) => {
    setShowModalConfirm(true);
    setcategoryToDelete(id);
  };

  const deleteCategoryToServer = async () => {
    let url = "cliente/delete?";
    const response = await APISERVICE.delete(url, categoryToDelete);
    if (response.status === 200) {
      getCategories();
      messageToast('Cliente eliminado con exito!')
    }
    setShowModalConfirm(false);
  };

  const filtercategories = (customer) => {
    setInputSearchCustomer(customer);
    setcategoriesFilter(
      categories.filter((cus) =>
        cus.nombre.toLowerCase().includes(customer.toLowerCase())
      )
    );
  };

  return (
    <div className="users">
      <h3>Categorias</h3>
      <SearchBarCategory setShow={setShow} filtercategories={filtercategories} />
      {categoriesFilter.length > 0 ? (
        <CategoryTable
          categories={categoriesFilter}
          pageInfo={pageInfo}
          getCategories={getCategories}
          setcategoryToEdit={setcategoryToEdit}
          setShow={setShow}
          deleteCategory={deleteCategory}
        />
      ) : (
        <>
          {inputSearchCustomer.length > 0 ? (
            <CategoryTable
              categories={{}}
              pageInfo={pageInfo}
              getCategories={getCategories}
              setcategoryToEdit={setcategoryToEdit}
              setShow={setShow}
              deleteCategory={deleteCategory}
            />
          ) : (
            <CategoryTable
              categories={categories}
              pageInfo={pageInfo}
              getCategories={getCategories}
              setcategoryToEdit={setcategoryToEdit}
               setShow={setShow}
              deleteCategory={deleteCategory}
            />
          )}
        </>
      )}
        <CategoryModal
        show={show}
        setShow={setShow}
        create={createNewCategory}
        customerToEdit={categoryToEdit}
        setCustomerToEdit={setcategoryToEdit}
        updateCustomer={updateCategory}
      />
      <ModalConfirmCategory
        show={showModalConfirm}
        onHide={setShowModalConfirm}
        deleteCustomer={deleteCategoryToServer}
      />
        <Toaster
      position="top-right"
      reverseOrder={false}
     />
    </div>
  );
};

export default CategoryCrud;
