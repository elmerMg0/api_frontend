import React, { useEffect, useState } from "react";
import CustomerTable from "./CustomerTable";
import { APISERVICE } from "../../../services/api.services";
import { Button } from "react-bootstrap";
import CustomerModal from "./CustomerModal";
const UserCrud = () => {
  const [customers, setCustomers] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [show, setShow] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async ( pageNumber ) => {
    const response = await APISERVICE.get( pageNumber);
    if (response.status === 200) {
      setPageInfo(response.pageInfo);
      setCustomers(response.pageInfo.customers);
    }
    console.log(response);
  };

  const createNewCustomer = async (customer) => {
    let $params = `cliente/create`
    const response = await APISERVICE.post(customer,$params);
    console.log(response) 
  };

  return (
    <div className="users">
      <h3>Lista de Usuarios</h3>
      <CustomerTable customers={customers} pageInfo={pageInfo} getCustomers={getCustomers}/>
      <Button className="color-main" onClick={() => setShow(true)}>
        Nuevo
      </Button>
      <CustomerModal show={show} setShow={setShow} create={createNewCustomer} />
    </div>
  );
};

export default UserCrud;
