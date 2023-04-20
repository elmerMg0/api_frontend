import React, { useState, useEffect } from "react";
import { APISERVICE } from "../../../services/api.services";
import ModalCreateUser from "./ModalCreateUser";
import UserTable from "./UserTable";
import ModalConfirm from "../../global/modal/ModalConfirm";
import { Toaster, toast } from "react-hot-toast";
import SearchInput from "../../global/search/SearchInput";

export default function User() {
  const [users, setUsers] = useState([]);
  const [pageInfo, setPageInfo] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState({});
  const [userUpdate, setUserUpdate] = useState({});
  const [inputSearchUser, setInputSearchUser] = useState("");
  const [usersFilter, setusersFilter] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const messageToast = (message) => {
    toast.success(message);
  };

  const getUsers = async (pageNumber = 1) => {
    let url = "usuario/?";
    let params = `page=${pageNumber}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
      setUsers(response.pageInfo.users);
      setPageInfo(response.pageInfo);
      console.log(response.pageInfo.users);
    }
  };
  const createuser = async (user, image) => {
    let url = "usuario/create-user";
    const formData = new FormData();
    let data = {
      nombres: user.nombres,
      username: user.username,
      password: user.password,
      tipo: user.tipo,
    };
    formData.append("data", JSON.stringify(data));
    if (image) formData.append("file", user.url_image);

    const response = await APISERVICE.postWithImage(formData, url);
    if (response.status === 201) {
      messageToast("Usuario agregado exitosamente!");
    }
    //envio de imagen categoria
    getUsers();
  };

  const deleteUserModal = async (id) => {
    setShowModalConfirm(true);
    setCustomerToDelete(id);
  };

  const deleteUser = async () => {
    let url = "usuario/delete-user?";
    let params = `id=${customerToDelete}`;
    const response = await APISERVICE.delete(url, params);
    if (response.status === 200) {
      getUsers();
      messageToast("Usuario eliminado con exito!");
    }
    setShowModalConfirm(false);
  };

  const updateUser = async (user, image) => {
    let $url = `usuario/edit-user?`;
    let $params = `id=${user.id}`;

    const data = new FormData();

    let body = {
      nombres: user.nombres,
      username: user.username,
      password: user.password,
      tipo: user.tipo,
    };
    data.append("data", JSON.stringify(body));
    if (image) data.append("file", user.url_image);
    const response = await APISERVICE.postWithImage(data, $url, $params);
    if (response.status === 200) {
      messageToast("Usuario Actualizado");
    }
    getUsers();
  };
  const getAllUsers = async () => {
    let url = "usuario/get-all-users";
    const response = await APISERVICE.get(url);
    if (response.status === 200) {
      setAllUsers(response.users);
    }
  };
  const filterUser = (user) => {
    if (user.length > 0) {
      setInputSearchUser(user);

      setusersFilter(
        allUsers.filter((res) =>
          res.nombres.toLowerCase().includes(user.toLowerCase())
        )
      );
    } else {
      setInputSearchUser("");
      setusersFilter([]);
    }
  };

  useEffect(() => {
    getUsers();
    getAllUsers();
  }, []);
  return (
    <>
      <div className="conteiner-user">
        <h1>Lista de Usuarios</h1>
        <SearchInput
          setShow={setModalShow}
          filterSomething={filterUser}
          placeHolder="cesar"
        />
        <div>
          {usersFilter.length > 0 || inputSearchUser.length > 0 ? (
            <UserTable
              getUsers={getUsers}
              users={usersFilter}
              pageInfo={pageInfo}
              deleteUser={deleteUserModal}
              setUserUpdate={setUserUpdate}
              setModalShow={setModalShow}
            />
          ) : (
            <UserTable
              getUsers={getUsers}
              users={users}
              pageInfo={pageInfo}
              deleteUser={deleteUserModal}
              setUserUpdate={setUserUpdate}
              setModalShow={setModalShow}
            />
          )}
        </div>
        <ModalCreateUser
          show={modalShow}
          onHide={() => setModalShow(false)}
          createuser={createuser}
          userUpdate={userUpdate}
          setUserUpdate={setUserUpdate}
          updateUser={updateUser}
        />
        <ModalConfirm
          show={showModalConfirm}
          onHide={setShowModalConfirm}
          deleteSomething={deleteUser}
        />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
}
