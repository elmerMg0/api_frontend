import React,{useState} from 'react'
import { Button, Table } from 'react-bootstrap'
import Paginator from '../../global/paginador/Paginator';
import ModalCreateUser from './ModalCreateUser';
import UserTableRow from './UserTableRow'

export default function UserTable({getUsers,  users, page, updateuser, deleteUser,createuser}) {

  
  return (
    <>
      <div >
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Foto</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {
              users && users.length > 0 ? (
                users.map(res=>
                
                    <UserTableRow key={res.id} 
                    res={res} 
                    updateuser={updateuser} 
                    deleteUser={deleteUser} 
                    createuser={createuser}
                  />
                 
     
                )
              ):(
                <tr>
                <td colSpan={5}>No existen usuarios aun!</td>
              </tr>
              )
               
            }
            <tr>
              <td colSpan={5}>
                <Paginator page={page} getItems={getUsers} />
              </td>
            </tr>
          </tbody>
          
        </Table>

        
      </div>

    </>
  )
}
