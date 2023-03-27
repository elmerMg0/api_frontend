import React from "react";
import { Button } from "react-bootstrap";
import  edit from '../../../assets/svg/edit.svg'
import  trash from '../../../assets/svg/trash.svg'
const CategoryTableRow = ({ category, setCategoryToEdit, setShow, deleteCategory }) => {
  const APIURLIMG =  process.env.REACT_APP_API_URL_IMG

  let {nombre, descripcion } = category;

  const handleEditcategory = ()  => {
    setCategoryToEdit(category);
    setShow(true);
  }
  const handleDeletecategory = () => {
    deleteCategory(category.id)
  }

  return (
    <tr>
      <td>{category.nombre}</td>
      <td>{category.descripcion}</td>
      <td className="row-table-img"><img src={`http://localhost:8080/upload/${category.url_image}`} alt="foto categoria" /></td>
      <td className="col-2" style={{textAlign: 'center'}}>
        <button className="btn-main" onClick={() => handleEditcategory() }> <img src={edit} alt="icon-edit" /> </button>{" "}
        <button className="btn-main-red" onClick={() => handleDeletecategory()}>
          <img src={trash} alt="icon-basura" />
        </button>
      </td>
    </tr>
  );
};

export default CategoryTableRow;
