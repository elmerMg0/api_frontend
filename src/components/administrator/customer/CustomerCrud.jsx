import React, { useEffect, useState} from 'react'
import UserTable from './UserTable'
import { APISERVICE } from "../../../services/api.services";
import {Button} from 'react-bootstrap'
const UserCrud = () => {

  const [customers, setCustomers] = useState([])
  const [pageInfo, setPageInfo] = useState({})

  useEffect( () => {
    getCustomers()
  },[])

  const getCustomers = async () => {
    const response = await APISERVICE.get()
    if(response.status === 200){
      setPageInfo(response.pageInfo)
      setCustomers(response.pageInfo.customers)
    }
    console.log(response);
  }

  return (
    <div className='users'>
        <h3>Lista de Usuarios</h3>
        <UserTable customers={customers} pageInfo={pageInfo}/>
        <Button>Nuevo</Button>
    </div>
  )
}

export default UserCrud