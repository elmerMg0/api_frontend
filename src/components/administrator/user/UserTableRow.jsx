import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import ModalCreateUser from './ModalCreateUser'

export default function UserTableRow({res,deleteUser,updateuser,createuser}) {

  const [modalShow, setModalShow] = useState(false);
  return (
  
    <>
      <tr>
        <td className='col-4'>{res.nombres}</td>
        <td className='col-2'>{res.tipo}</td>
        <td className='col-2'>image</td>
        <td className='col-2'>
          <Button onClick={() => setModalShow(true)}>Editar</Button>{" "}
          <button onClick={() => deleteUser(res.id)} className='btn-danger'>Eliminar</button>
        </td>
      </tr>
      <ModalCreateUser
        show={modalShow}
        onHide={() => setModalShow(false)}
        updateuser={updateuser}
        createuser={createuser}
        valuerow={res}
      />
    </>
 

  )
}
