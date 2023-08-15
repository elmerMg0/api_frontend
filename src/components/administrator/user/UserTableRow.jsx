import React, { useState } from "react";
import edit from "../../../assets/svg/edit.svg";
import trash from "../../../assets/svg/trash.svg";

export default function UserTableRow({
  user,
  deleteUser,
  setUserUpdate,
  setModalShow,
}) {
  return (
    <>
      <tr>
        <td className="col-5">{user.nombres}</td>
        <td className="col-4">{user.tipo}</td>
        <td className="img-user"><img src={`http://localhost:8080/upload/${user.url_image}`} alt="foto user" /></td>
        <td className="col-2 text-center">
          <button
            className="btn-main"
            onClick={() => {
              setModalShow(true);
              setUserUpdate(user);
            }}
          >
            <img src={edit} alt="icon-edit" />{" "}
          </button>{" "}
          <button onClick={() => deleteUser(user.id)} className="btn-main-red">
            <img src={trash} alt="icon-basura" />
          </button>
        </td>
      </tr>
    </>
  );
}
