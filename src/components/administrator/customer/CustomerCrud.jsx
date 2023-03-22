import React, { useEffect, useState} from 'react'
import CustomerTable from './CustomerTable'
import { APISERVICE } from "../../../services/api.services";
import {Button} from 'react-bootstrap'
import CustomerModal from './CustomerModal'
const UserCrud = () => {

  const [customers, setCustomers] = useState([])
  const [pageInfo, setPageInfo] = useState({})
  const [show, setShow] = useState(false)
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
        <CustomerTable customers={customers} pageInfo={pageInfo}/>
        <Button onClick={() => setShow(true)}>Nuevo</Button>
        <CustomerModal show={show}/>
    </div>
  )
}

export default UserCrud