import React, { useState,useEffect } from 'react'
import { APISERVICE } from "../../../services/api.services";
import ModalCreateUser from './ModalCreateUser';
import UserTable from './UserTable'
import ModalConfirm from "../../global/modal/ModalConfirm";
import { Toaster, toast} from "react-hot-toast";

export default function User() {

  const[users, setUsers]= useState([])
  const[pageInfo, setPageInfo]=useState(1)
  const [modalShow, setModalShow] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState({});
  let res = ""

  const messageToast = ( message ) =>{
    toast.success(message)
  }
  
  const getUsers = async (pageNumber=1) => {
    let url = "usuario/?";
    let params = `page=${pageNumber}`;
    const response = await APISERVICE.get(url,params);
    if (response.status === 200) {
      setUsers(response.pageInfo.users);
      setPageInfo(response.pageInfo);
      console.log(response.pageInfo.users)
    }
  };
  const createuser = async (body)=>{
    let params = "usuario/create-user"
    const response = await APISERVICE.post(body,params)
    if(response.status === 200){
      getUsers();
    }
    console.log(response)
  }

  const deleteUserModal= async (id) => {
    setShowModalConfirm(true);
    setCustomerToDelete(id);
  };

  const deleteUser = async () => {
    let url = "usuario/delete-user?";
    let params = `id=${customerToDelete}`
    const response = await APISERVICE.delete(url, params);
    if (response.status === 200) {
      getUsers();
      messageToast('Usuario eliminado con exito!')
    }
    setShowModalConfirm(false);
  };
  const updateuser = async (body,id)=>{
    let params = "usuario/edit-user?id="
    const response = await APISERVICE.update(body,params,id)
    if(response.status === 200){
      getUsers();
    }
    console.log(response)
  }
 
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className='conteiner-user'>
        <h1>Lista de Usuarios</h1>
    <div>
    <UserTable 
          getUsers={getUsers}
          users={users}
          pageInfo={pageInfo}
          updateuser={updateuser}
          createuser={createuser}
          deleteUser={deleteUserModal}
        />
    </div>
       
      
          <button className="btn-main" onClick={() => setModalShow(true)}>Nuevo</button>
          <ModalCreateUser
            show={modalShow}
            onHide={() => setModalShow(false)}
            updateuser={updateuser}
            createuser={createuser}
            valuerow={res}
                   
            
          />
        <ModalConfirm
          show={showModalConfirm}
          onHide={setShowModalConfirm}
          deleteCustomer={deleteUser}
        />
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        
        
      </div>

    </>
  )
}
