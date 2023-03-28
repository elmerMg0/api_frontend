import React, { useState,useEffect } from 'react'
import { APISERVICE } from "../../../services/api.services";
import ModalCreateUser from './ModalCreateUser';
import UserTable from './UserTable'

export default function User() {

  const[users, setUsers]= useState([])
  const[page, setPage]=useState(1)
  const [modalShow, setModalShow] = useState(false);
  let res = ""

  
  
  const getUsers = async (page) => {
    const response = await APISERVICE.get(page,"usuario");
    if (response.status === 200) {
      setUsers(response.data);
      setPage(response.pagination);
      console.log(response.data)
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
  const deleteUser = async (id) =>{
    let params = "usuario/delete-user?id="
    const response = await APISERVICE.delete(id,params)
    if(response.status === 200){
      getUsers();
    }
    console.log(response)
  }
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
          page={page}
          updateuser={updateuser}
          createuser={createuser}
          deleteUser={deleteUser}
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
        
        
        
      </div>

    </>
  )
}
