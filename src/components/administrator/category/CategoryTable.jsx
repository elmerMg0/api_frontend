import React from "react";
import { Table } from "react-bootstrap";
import Paginator from "../../global/paginador/Paginator";
import CategoryTableRow from "./CategoryTableRow";
const CategoryTable = ({
  categories,
  pageInfo,
  getcategories,
  setCategoryToEdit,
  setShow,
  deleteCategory,
}) => {
  return (
    <Table>
      <thead className="head-table">
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {categories && categories.length > 0 ? (
          categories.map((cat) => {
            return (
              <CategoryTableRow
                key={cat.id}
                category={cat}
                setCustomerToEdit={setCategoryToEdit}
                setShow={setShow}
                deleteCategory={deleteCategory}
              />
            );
          })
        ) : (
          <tr>
            <td colSpan={5} className="row-table-notExist">
              No existen resultados!
            </td>
          </tr>
        )}
        <tr>
          <td colSpan={5}>
            {categories.length > 0 && (
              <Paginator pageInfo={pageInfo} getcategories={getcategories} />
            )}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CategoryTable;
