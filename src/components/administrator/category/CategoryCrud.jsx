import React, { useEffect, useState } from "react";
import CategoryTable from "./CategoryTable";
import { APISERVICE } from "../../../services/api.services";
import CategoryModal from "./CategoryModal";
import ModalConfirm from "../../global/modal/ModalConfirm";
import { Toaster, toast} from "react-hot-toast";
import categoryCrud from '../../../styles/categoryCrud.css'
import SearchInput from "../../global/search/SearchInput";

const CategoryCrud = () => {
  const [categories, setcategories] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [show, setShow] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState({});
  const [categoryToDelete, setCategoryToDelete] = useState({});
  const [categoriesAll, setCategoriesAll] = useState([]);
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [inputSearchCategory, setInputSearchCategory] = useState("");

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
      setCategoriesAll(response.categories);
    }
  };

  const createNewCategory = async (category, image) => {
    //envio de info en body
    let url = "categoria/create";
    const formData = new FormData();
    let data = {
      nombre: category.nombre,
      descripcion: category.descripcion
    }
    formData.append('data',JSON.stringify(data))
    if(image)formData.append('file', category.url_image) 

    const response = await APISERVICE.postWithImage(formData, url);
    if (response.status === 201) {
      messageToast('Categoria agregado exitosamente!')
    }
    //envio de imagen categoria
    getCategories();


  };

  const messageToast = ( message ) =>{
    toast.success(message)
  }

  const updateCategory = async (category, image) => {
    let $url = `categoria/update?`;
    let $params = `idCategory=${category.id}`;

    const fd = new FormData()
    
    let body = {
      nombre: category.nombre,
      descripcion: category.descripcion
    }
    fd.append('data', JSON.stringify(body));
    if(image)fd.append('file', category.url_image) 
    const response = await APISERVICE.postWithImage(fd, $url, $params);
    if (response.status === 200) {
      messageToast('Categoria Actualizado con exito!')
    }
    getCategories();
  };

  const deleteCategory = async (id) => {
    setShowModalConfirm(true);
    setCategoryToDelete(id);
  };

  const deleteCategoryToServer = async () => {
    let url = "categoria/delete?";
    let params = `idCategory=${categoryToDelete}`
    const response = await APISERVICE.delete(url, params);
    if (response.status === 200) {
      getCategories();
      messageToast('Categoria eliminado con exito!')
    }
    setShowModalConfirm(false);
  };

  const filtercategories = (category) => {
    if(category.length > 0){
      setInputSearchCategory(category);
      
      setCategoriesFilter(
        categoriesAll.filter((cus) =>
        cus.nombre.toLowerCase().includes(category.toLowerCase())
        )
        );
      }else{
        setInputSearchCategory('');
        setCategoriesFilter([])
    }
  };

  return (
    <div className="category">
      <h3>Categorias</h3>
      <SearchInput setShow={setShow} filterSomething={filtercategories} placeHolder='pastas..' />
      {categoriesFilter.length > 0 || inputSearchCategory.length > 0? (
        <CategoryTable
          categories={categoriesFilter}
          pageInfo={pageInfo}
          getCategories={getCategories}
          setCategoryToEdit={setCategoryToEdit}
          setShow={setShow}
          deleteCategory={deleteCategory}
        />
      ) : (
        <>
         <CategoryTable
              categories={categories}
              pageInfo={pageInfo}
              getCategories={getCategories}
              setCategoryToEdit={setCategoryToEdit}
               setShow={setShow}
              deleteCategory={deleteCategory}
            />
        </>
      )}
        <CategoryModal
        show={show}
        setShow={setShow}
        create={createNewCategory}
        categoryToEdit={categoryToEdit}
        setCategoryToEdit={setCategoryToEdit}
        updateCategory={updateCategory}
      />
      <ModalConfirm
        show={showModalConfirm}
        onHide={setShowModalConfirm}
        deleteSomething={deleteCategoryToServer}
      />
        <Toaster
      position="top-right"
      reverseOrder={false}
     />
    </div>
  );
};

export default CategoryCrud;
