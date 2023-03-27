import React, { useEffect, useState } from "react";
import CustomerTable from "./CustomerTable";
import { APISERVICE } from "../../../services/api.services";
import CustomerModal from "./CustomerModal";
import ModalConfirm from "../../global/modal/ModalConfirm";
import { Toaster, toast} from "react-hot-toast";
import SearchInput from "../../global/search/SearchInput";

const UserCrud = () => {
  const [customers, setCustomers] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [show, setShow] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [customerToEdit, setCustomerToEdit] = useState({});
  const [customerToDelete, setCustomerToDelete] = useState({});
  const [customersAll, setCustomersAll] = useState([]);
  const [customersFilter, setCustomersFilter] = useState([]);
  const [inputSearchCustomer, setInputSearchCustomer] = useState("");

  useEffect(() => {
    getCustomers();
    getCustomersAll();
  }, []);

  const getCustomers = async (pageNumber = 1) => {
    let url = "cliente/?";
    let params = `page=${pageNumber}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
    }
    setPageInfo(response.pageInfo);
    setCustomers(response.pageInfo.customers);
  };

  const getCustomersAll = async () => {
    let url = "cliente/customers";
    const response = await APISERVICE.get(url);
    if (response.status === 200) {
      setCustomersAll(response.customers);
    }
  };

  const createNewCustomer = async (customer) => {
    let url = "cliente/create";
    const response = await APISERVICE.post(customer, url);
    if (response.status === 201) {
      messageToast('Cliente agregado exitosamente!')
    }
    getCustomers();
  };

  const messageToast = ( message ) =>{
    toast.success(message)
  }

  const updateCustomer = async (customer) => {
    let $url = `cliente/update?`;
    let $params = `idCustomer=${customer.id}`;
    const response = await APISERVICE.post(customer, $url, $params);
    if (response.status === 200) {
      messageToast('Cliente Actualizado con exito!')
      getCustomers();
    }
  };

  const deleteCustomer = async (id) => {
    setShowModalConfirm(true);
    setCustomerToDelete(id);
  };

  const deleteCustomerToServer = async () => {
    let url = "cliente/delete?";
    let params = `idCustomer=${customerToDelete}`
    const response = await APISERVICE.delete(url, params);
    if (response.status === 200) {
      getCustomers();
      messageToast('Cliente eliminado con exito!')
    }
    setShowModalConfirm(false);
  };

  const filterCustomers = (customer) => {
    if(customer.length > 0){
      setInputSearchCustomer(customer);
      
      setCustomersFilter(
        customersAll.filter((cus) =>
        cus.nombre.toLowerCase().includes(customer.toLowerCase())
        )
        );
      }else{
        setInputSearchCustomer('');
        setCustomersFilter([])
    }
  };

  return (
    <div className="customers">
      <h3>Clientes</h3>
      <SearchInput setShow={setShow} filterSomething={filterCustomers} placeHolder='Juan Ramon' />
      {customersFilter.length > 0 || inputSearchCustomer.length > 0? (
        <CustomerTable
          customers={customersFilter}
          pageInfo={pageInfo}
          getCustomers={getCustomers}
          setCustomerToEdit={setCustomerToEdit}
          setShow={setShow}
          deleteCustomer={deleteCustomer}
        />
      ) : (
        <>
          <CustomerTable
              customers={customers}
              pageInfo={pageInfo}
              getCustomers={getCustomers}
              setCustomerToEdit={setCustomerToEdit}
              setShow={setShow}
              deleteCustomer={deleteCustomer}
            />
          {/* {inputSearchCustomer.length > 0 ? (
            <CustomerTable
              customers={[]}
              pageInfo={pageInfo}
              getCustomers={getCustomers}
              setCustomerToEdit={setCustomerToEdit}
              setShow={setShow}
              deleteCustomer={deleteCustomer}
            />
          ) : (
            <CustomerTable
              customers={customers}
              pageInfo={pageInfo}
              getCustomers={getCustomers}
              setCustomerToEdit={setCustomerToEdit}
              setShow={setShow}
              deleteCustomer={deleteCustomer}
            />
          )} */}
        </>
      )}

      <CustomerModal
        show={show}
        setShow={setShow}
        create={createNewCustomer}
        customerToEdit={customerToEdit}
        setCustomerToEdit={setCustomerToEdit}
        updateCustomer={updateCustomer}
      />
      <ModalConfirm
        show={showModalConfirm}
        onHide={setShowModalConfirm}
        deleteCustomer={deleteCustomerToServer}
      />
        <Toaster
      position="top-right"
      reverseOrder={false}
     />
    </div>
  );
};

export default UserCrud;
