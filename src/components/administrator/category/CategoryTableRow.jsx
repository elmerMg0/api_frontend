import React from "react";
import { Button } from "react-bootstrap";
import  edit from '../../../assets/svg/edit.svg'
import  trash from '../../../assets/svg/trash.svg'
const CategoryTableRow = ({ category, setCategoryToEdit, setShow, deleteCategory }) => {

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
      <td>{category.url_image}</td>
      <th>
        <button className="btn-main" onClick={() => handleEditcategory() }> <img src={edit} alt="icon-edit" /> </button>{" "}
        <button className="btn-main-red" onClick={() => handleDeletecategory()}>
          <img src={trash} alt="icon-basura" />
        </button>
      </th>
    </tr>
  );
};

export default CategoryTableRow;
